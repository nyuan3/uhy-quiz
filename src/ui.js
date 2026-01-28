import { initBinaryChoiceGroup, focusPrimaryAction, registerEscapeHandler, announceStep } from './accessibility.js';

const DEFAULT_FALLBACK_HTML = `
  <div class="uhyq-fallback" role="note">
    <p><strong>This tool needs JavaScript.</strong> If the interactive quiz does not load, visit SchoolHouse Connection for <a href="https://schoolhouseconnection.org" target="_blank" rel="noopener noreferrer">resources for unaccompanied homeless youth</a>.</p>
  </div>
`;

function resolveLink(href, linksConfig) {
  if (!href) return '#';
  const map = {
    __FAFSA_URL__: linksConfig.FAFSA,
    __TEMPLATE_LIAISON__: linksConfig.TEMPLATE_LIAISON,
    __TEMPLATE_PROGRAM__: linksConfig.TEMPLATE_PROGRAM,
    __TEMPLATE_TRIO__: linksConfig.TEMPLATE_TRIO,
    __TEMPLATE_FAA__: linksConfig.TEMPLATE_FAA,
    __FAFSA_GUIDE_URL__: linksConfig.FAFSA_GUIDE_URL
  };

  if (map[href]) {
    return map[href];
  }

  return href;
}

function calculateRemainingQuestions(tree, nodeId) {
  const node = tree.nodes[nodeId];
  if (!node || node.type !== 'yesno') return 0;

  const yesNode = tree.nodes[node.yes];
  const noNode = tree.nodes[node.no];

  let nextQuestionId = null;
  if (yesNode && yesNode.type === 'yesno') {
    nextQuestionId = node.yes;
  }
  if (noNode && noNode.type === 'yesno') {
    if (!nextQuestionId) {
      nextQuestionId = node.no;
    } else {
      // If both branches lead to more questions, default to yes path.
      nextQuestionId = node.yes;
    }
  }

  return 1 + (nextQuestionId ? calculateRemainingQuestions(tree, nextQuestionId) : 0);
}

function buildPathSegment(questionId, answerValue) {
  if (!answerValue) {
    return questionId;
  }

  return `${questionId}:${answerValue}`;
}

function buildShareableHash(pathSegments) {
  if (!pathSegments.length) return '';
  const encoded = encodeURIComponent(pathSegments.join('-'));
  return `#path=${encoded}`;
}

export function createQuiz({ container, tree, config, callbacks = {}, initialPathSegments = [] }) {
  const linksConfig = config?.links ?? {};
  const onStep = typeof callbacks.onStep === 'function' ? callbacks.onStep : () => {};
  const onOutcome = typeof callbacks.onOutcome === 'function' ? callbacks.onOutcome : () => {};

  const fallbackHTML = container.innerHTML.trim() || DEFAULT_FALLBACK_HTML;
  container.innerHTML = '';

  const root = document.createElement('div');
  root.className = 'uhyq-root';
  root.setAttribute('role', 'application');
  root.setAttribute('aria-label', 'Interactive unaccompanied homeless youth determination tool');

  const progressEl = document.createElement('div');
  progressEl.className = 'uhyq-progress';
  progressEl.setAttribute('role', 'status');

  const stepRegion = document.createElement('div');
  stepRegion.className = 'uhyq-card';
  stepRegion.setAttribute('aria-live', 'polite');

  const politeRegion = document.createElement('div');
  politeRegion.className = 'uhyq-sr-only';
  politeRegion.setAttribute('aria-live', 'polite');
  politeRegion.setAttribute('aria-atomic', 'true');

  const controlsEl = document.createElement('div');
  controlsEl.className = 'uhyq-controls';

  const backBtn = document.createElement('button');
  backBtn.type = 'button';
  backBtn.className = 'uhyq-btn uhyq-btn-secondary';
  backBtn.textContent = 'Back';
  backBtn.setAttribute('aria-label', 'Go to previous question');
  backBtn.disabled = true;

  const restartBtn = document.createElement('button');
  restartBtn.type = 'button';
  restartBtn.className = 'uhyq-btn uhyq-btn-secondary';
  restartBtn.textContent = 'Restart';
  restartBtn.setAttribute('aria-label', 'Restart quiz');

  controlsEl.append(backBtn, restartBtn);

  root.append(progressEl, stepRegion, controlsEl, politeRegion);
  container.appendChild(root);

  const state = {
    currentId: tree.startId,
    history: [],
    pathSegments: []
  };

  let disposeBinaryHandler = null;
  let disposeEscapeHandler = registerEscapeHandler(root, () => {
    const shouldRestart = window.confirm('Restart the quiz? Your answers will be cleared.');
    if (shouldRestart) {
      restart();
    }
  });

  function cleanupStepHandlers() {
    if (disposeBinaryHandler) {
      disposeBinaryHandler();
      disposeBinaryHandler = null;
    }
  }

function formatPromptSegment(text) {
  if (!text) return '';
  if (text.includes('\n\n')) {
    return text
      .split('\n\n')
      .map((segment) => formatPromptSegment(segment.trim()))
      .join('');
  }
  if (text.includes('\n•') || text.trim().startsWith('•')) {
    const lines = text.split('\n');
    const bulletStartIndex = lines.findIndex(line => line.trim().startsWith('•'));
    
    let result = '';
    
    // If there's intro text before bullets, add it as a paragraph
    if (bulletStartIndex > 0) {
      const introText = lines.slice(0, bulletStartIndex).join(' ').trim();
      if (introText) {
        result += `<p>${introText}</p>`;
      }
    }
    
    // Process bullet points
    const bulletLines = lines.slice(bulletStartIndex);
    const bullets = bulletLines
      .flatMap((line) => line.split('•'))
      .map((item) => item.trim())
      .filter(Boolean);
    
    result += `<ul class="uhyq-bullet-list">${bullets.map((item) => `<li>${item}</li>`).join('')}</ul>`;
    return result;
  }

  return `<p>${text}</p>`;
}

function formatPromptMarkup(text) {
  if (typeof text !== 'string' || !text.includes('\n')) {
    return text;
  }

  return formatPromptSegment(text.trim());
}

function parseTooltips(text) {
  if (typeof text !== 'string') return text;
  
  // Match [tooltip:word:definition] pattern
  return text.replace(/\[tooltip:([^:]+):([^\]]+)\]/g, (match, word, definition) => {
    const helpIcon = `<svg class="uhyq-tooltip-icon" role="button" tabindex="0" aria-label="More information about ${word}" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><path d="M12 17h.01"></path></svg>`;
    return `${word}<span class="uhyq-tooltip-wrapper">${helpIcon}<span class="uhyq-tooltip-text" role="tooltip">${definition}</span></span>`;
  });
}

function parseHelpLinks(text) {
  if (typeof text !== 'string') return text;
  
  // Match [helplink:word:url:label] pattern (url can contain colons like https://)
  return text.replace(/\[helplink:([^:]+):(https?:\/\/[^:\s]+):([^\]]+)\]/g, (match, word, url, label) => {
    const helpIcon = `<span class="uhyq-helplink-wrapper"><a href="${url}" target="_blank" rel="noopener noreferrer" class="uhyq-helplink" aria-label="${label}"><svg class="uhyq-helplink-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><path d="M12 17h.01"></path></svg></a><span class="uhyq-helplink-tooltip">${label}</span></span>`;
    return `${word}${helpIcon}`;
  });
}

function renderYesNoQuestion(node) {
    cleanupStepHandlers();
    stepRegion.innerHTML = '';

  const promptEl = document.createElement('h2');
  promptEl.id = `${node.id}-prompt`;

  // Split prompt into heading and body if it contains bullets or multiple paragraphs
  let headingText = node.prompt;
  let bodyText = '';
  
  // Check if prompt contains bullets
  if (node.prompt.includes('\n•')) {
    const parts = node.prompt.split(/\n(?=•)/);
    headingText = parts[0];
    bodyText = parts.slice(1).join('\n');
  } else if (node.prompt.includes('\n\n')) {
    const parts = node.prompt.split('\n\n');
    headingText = parts[0];
    bodyText = parts.slice(1).join('\n\n');
  }

  // Parse tooltips, help links, and convert single line breaks in heading to <br> tags
  if (headingText.includes('[tooltip:') || headingText.includes('[helplink:') || headingText.includes('\n')) {
    let processedText = headingText;
    if (processedText.includes('[tooltip:')) {
      processedText = parseTooltips(processedText);
    }
    if (processedText.includes('[helplink:')) {
      processedText = parseHelpLinks(processedText);
    }
    if (processedText.includes('\n')) {
      processedText = processedText.split('\n').join('<br>');
    }
    promptEl.innerHTML = processedText;
  } else {
    promptEl.textContent = headingText;
  }

  // Add body content if present
  let bodyEl = null;
  if (bodyText) {
    bodyEl = document.createElement('div');
    bodyEl.className = 'uhyq-body';
    bodyEl.innerHTML = formatPromptMarkup(bodyText);
  }

    const choicesEl = document.createElement('div');
    choicesEl.className = 'uhyq-choices';
    choicesEl.setAttribute('role', 'group');
    choicesEl.setAttribute('aria-labelledby', promptEl.id);

    const yesChoice = { value: 'yes', label: 'Yes', nextId: node.yes, segmentValue: 'yes' };
    const noChoice = { value: 'no', label: 'No', nextId: node.no, segmentValue: 'no' };

    const yesBtn = document.createElement('button');
    yesBtn.type = 'button';
    yesBtn.className = 'uhyq-btn';
    yesBtn.dataset.answer = 'yes';
    yesBtn.dataset.uhyqFocus = 'true';
    yesBtn.textContent = yesChoice.label;
    yesBtn.addEventListener('click', () => handleChoice(yesChoice));

    const noBtn = document.createElement('button');
    noBtn.type = 'button';
    noBtn.className = 'uhyq-btn';
    noBtn.dataset.answer = 'no';
    noBtn.textContent = noChoice.label;
    noBtn.addEventListener('click', () => handleChoice(noChoice));

    choicesEl.append(yesBtn, noBtn);

    if (bodyEl) {
      stepRegion.append(promptEl, bodyEl, choicesEl);
    } else {
      stepRegion.append(promptEl, choicesEl);
    }

    disposeBinaryHandler = initBinaryChoiceGroup(choicesEl);
    focusPrimaryAction(stepRegion);

    announceStep(politeRegion, node.prompt);
    onStep({ id: node.id, index: state.history.length + 1 });
  }

  function renderButtonGroup(node) {
    cleanupStepHandlers();
    stepRegion.innerHTML = '';

    const promptEl = document.createElement('h2');
    promptEl.id = `${node.id}-prompt`;
    promptEl.textContent = node.prompt;

    const choicesEl = document.createElement('div');
    choicesEl.className = 'uhyq-choices';
    choicesEl.setAttribute('role', 'group');
    choicesEl.setAttribute('aria-labelledby', promptEl.id);

    (node.options || []).forEach((option, index) => {
      const choice = {
        value: option.id || option.label,
        label: option.label,
        nextId: option.next,
        segmentValue: option.id || option.label
      };

      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'uhyq-btn';
      if (index === 0) {
        button.dataset.uhyqFocus = 'true';
      }
      button.textContent = option.label;
      button.addEventListener('click', () => handleChoice(choice));
      choicesEl.appendChild(button);
    });

    stepRegion.append(promptEl, choicesEl);

    disposeBinaryHandler = initBinaryChoiceGroup(choicesEl);
    focusPrimaryAction(stepRegion);

    announceStep(politeRegion, node.prompt);
    onStep({ id: node.id, index: state.history.length + 1 });
  }

  function renderOutcome(node) {
    cleanupStepHandlers();
    stepRegion.innerHTML = '';

    const titleEl = document.createElement('h2');
    titleEl.textContent = node.title;

    const bodyEl = document.createElement('div');
    bodyEl.className = 'uhyq-body';
    let bodyContent = formatPromptMarkup(node.body);
    if (bodyContent.includes('[helplink:')) {
      bodyContent = parseHelpLinks(bodyContent);
    }
    bodyEl.innerHTML = bodyContent;

    const actionsEl = document.createElement('div');
    actionsEl.className = 'uhyq-outcome-actions';

    (node.actions || []).forEach((action) => {
      const href = resolveLink(action.href, linksConfig);
      const link = document.createElement('a');
      link.className = 'uhyq-btn uhyq-btn-secondary uhyq-link-button';
      link.href = href;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.textContent = action.label;
      actionsEl.appendChild(link);
    });

    if (actionsEl.children.length) {
      actionsEl.firstElementChild?.setAttribute('data-uhyq-focus', 'true');
    }

    stepRegion.append(titleEl, bodyEl, actionsEl);

    announceStep(politeRegion, node.title);
    onOutcome({ id: node.id, title: node.title });
    backBtn.disabled = state.history.length === 0;
    focusPrimaryAction(stepRegion);
  }

  let messageTimeout = null;
  function showEphemeralMessage(text) {
    clearTimeout(messageTimeout);
    let alertEl = root.querySelector('.uhyq-alert');
    if (!alertEl) {
      alertEl = document.createElement('div');
      alertEl.className = 'uhyq-alert';
      root.insertBefore(alertEl, controlsEl);
    }
    alertEl.textContent = text;
    messageTimeout = window.setTimeout(() => {
      if (alertEl) {
        alertEl.remove();
      }
    }, 4000);
  }

  function updateProgress(node) {
    if (node.type !== 'yesno') {
      progressEl.textContent = "You're all set";
      return;
    }

    const answeredCount = state.history.filter((entry) => {
      const historyNode = tree.nodes[entry.id];
      return historyNode && historyNode.type === 'yesno';
    }).length;
    const currentIndex = answeredCount + 1;
    const total = answeredCount + calculateRemainingQuestions(tree, node.id);
    progressEl.textContent = `Question ${currentIndex} of ${total}`;
  }

  function handleChoice(choice) {
    const node = tree.nodes[state.currentId];
    if (!node || !choice || !choice.nextId) return;

    const answerValue = choice.segmentValue ?? choice.value ?? null;

    state.history.push({ id: node.id, answer: answerValue });
    state.pathSegments.push(buildPathSegment(node.id, answerValue));
    state.currentId = choice.nextId;

    render();
  }

  function goBack() {
    if (!state.history.length) {
      return;
    }

    const previous = state.history.pop();
    state.pathSegments.pop();
    state.currentId = previous.id;
    render();
  }

  function restart() {
    state.currentId = tree.startId;
    state.history = [];
    state.pathSegments = [];
    if (messageTimeout) {
      clearTimeout(messageTimeout);
    }
    const alertEl = root.querySelector('.uhyq-alert');
    if (alertEl) alertEl.remove();
    render();
  }

  function replayPath(segments) {
    if (!Array.isArray(segments) || !segments.length) {
      return;
    }

    restart();

    for (const segment of segments) {
      if (typeof segment !== 'string' || !segment.length) {
        break;
      }

      let questionId;
      let answerToken;

      if (segment.includes(':')) {
        [questionId, answerToken] = segment.split(':');
      } else {
        questionId = segment.slice(0, -1);
        answerToken = segment.slice(-1);
      }

      if (!questionId) {
        break;
      }

      const expectedNode = tree.nodes[state.currentId];

    if (!expectedNode || expectedNode.id !== questionId) {
        break;
      }

      if (expectedNode.type === 'buttonGroup') {
        const optionMatch = (expectedNode.options || []).find(
          (option) => (option.id || option.label) === answerToken
        );

        if (!optionMatch || !optionMatch.next) {
          break;
        }

        handleChoice({
          value: optionMatch.id || optionMatch.label,
          nextId: optionMatch.next,
          segmentValue: optionMatch.id || optionMatch.label
        });
        continue;
      }

      if (expectedNode.type !== 'yesno') {
        break;
      }

      const normalizedAnswer =
        answerToken === 'y'
          ? 'yes'
          : answerToken === 'n'
          ? 'no'
          : answerToken === 'yes' || answerToken === 'no'
          ? answerToken
          : null;

      if (!normalizedAnswer) {
        break;
      }

      const nextId = expectedNode[normalizedAnswer];
      if (!nextId) {
        break;
      }

      handleChoice({
        value: normalizedAnswer,
        nextId,
        segmentValue: normalizedAnswer
      });
      if (tree.nodes[state.currentId]?.type !== 'yesno' && tree.nodes[state.currentId]?.type !== 'buttonGroup') {
        break;
      }
    }
  }

  function render() {
    const node = tree.nodes[state.currentId];
    if (!node) {
      stepRegion.innerHTML = fallbackHTML;
      backBtn.disabled = true;
      progressEl.textContent = 'Sorry, this quiz is unavailable right now.';
      return;
    }

    if (node.type === 'yesno') {
      updateProgress(node);
      renderYesNoQuestion(node);
      backBtn.disabled = state.history.length === 0;
    } else if (node.type === 'buttonGroup') {
      progressEl.textContent = 'Select your role to begin';
      renderButtonGroup(node);
      backBtn.disabled = state.history.length === 0;
    } else {
      updateProgress(node);
      renderOutcome(node);
    }
  }

  backBtn.addEventListener('click', goBack);
  restartBtn.addEventListener('click', () => {
    const shouldRestart = window.confirm('Restart the quiz? Your answers will be cleared.');
    if (shouldRestart) {
      restart();
    }
  });

  render();

  if (initialPathSegments.length) {
    replayPath(initialPathSegments);
  }

  return {
    destroy() {
      cleanupStepHandlers();
      if (disposeEscapeHandler) {
        disposeEscapeHandler();
        disposeEscapeHandler = null;
      }
      if (messageTimeout) {
        clearTimeout(messageTimeout);
      }
      container.innerHTML = fallbackHTML;
    },
    restart,
    applyPath: replayPath
  };
}

