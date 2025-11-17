var UHYQuiz = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // src/index.js
  var src_exports = {};
  __export(src_exports, {
    default: () => src_default,
    destroyAll: () => destroyAll,
    init: () => init,
    restartAll: () => restartAll
  });

  // src/decisionTree.js
  var decisionTree = {
    startId: "q_age",
    nodes: {
      // STEP 1: Age / Living situation
      q_age: {
        id: "q_age",
        type: "yesno",
        prompt: "Are you 24 years or older?",
        yes: "out_auto_independent_24plus",
        no: "q_recent_hs"
      },
      q_recent_hs: {
        id: "q_recent_hs",
        type: "yesno",
        prompt: "Are you currently attending a public high school or did you graduate from a public high school in the last year?",
        yes: "q_identified_hs",
        no: "q_live_with_parents"
      },
      q_identified_hs: {
        id: "q_identified_hs",
        type: "yesno",
        prompt: "Were you identified as an unaccompanied homeless youth by a high school counselor, McKinney-Vento liaison, or other high school staff?",
        yes: "out_hs_determination_letter",
        no: "q_hs_staff_know"
      },
      q_hs_staff_know: {
        id: "q_hs_staff_know",
        type: "yesno",
        prompt: "Does a McKinney-Vento homeless liaison or other high school staff know about your homelessness?",
        yes: "out_hs_become_identified",
        no: "q_live_with_parents"
      },
      q_live_with_parents: {
        id: "q_live_with_parents",
        type: "yesno",
        prompt: "Do you live with your parents?",
        yes: "out_fafsa_parent",
        no: "q_temp_since_july"
      },
      // Since July 1 questions
      q_temp_since_july: {
        id: "q_temp_since_july",
        type: "yesno",
        prompt: "Since July 1 of the previous school year, have you had to stay somewhere temporarily because you didn\u2019t have anywhere else to go? For example:\n\n\u2022 Staying with friends or relatives because you lost housing or couldn\u2019t afford rent\n\u2022 \u201CCouch surfing\u201D or moving from place to place\n\u2022 Living in residence halls/dorms but you would otherwise have no safe place to go",
        yes: "q_can_someone_confirm",
        no: "q_not_meant_for_living"
      },
      q_not_meant_for_living: {
        id: "q_not_meant_for_living",
        type: "yesno",
        prompt: "Since July 1 of the previous school year, have you stayed in a place not meant for people to live? For example:\n\n\u2022 A motel or hotel because you had no other housing\n\u2022 A trailer park, campground, car, park, or abandoned building",
        yes: "q_can_someone_confirm",
        no: "q_at_risk"
      },
      q_at_risk: {
        id: "q_at_risk",
        type: "yesno",
        prompt: "Are you at risk of losing your housing soon or not having a safe place to stay? For example:\n\n\u2022 Being told you can\u2019t stay where you are much longer\n\u2022 Having a pending eviction\n\u2022 Not knowing where you\u2019ll sleep next week or next month",
        yes: "q_pay_all_expenses",
        no: "q_dep_support_from_parents"
      },
      q_pay_all_expenses: {
        id: "q_pay_all_expenses",
        type: "yesno",
        prompt: "Do you pay for all of your own expenses, including your housing? (Only answer \u201CYes\u201D if you do not receive any financial support from anyone.)",
        yes: "q_can_someone_confirm",
        no: "q_dep_support_from_parents"
      },
      // SECTION 2: UHY (Not through HS)
      q_can_someone_confirm: {
        id: "q_can_someone_confirm",
        type: "yesno",
        prompt: "Can any of the following individuals confirm your situation?\n\n\u2022 A high school McKinney-Vento liaison or their designee (e.g., a school counselor)\n\u2022 The director (or designee) of a shelter, drop-in center, or other program serving individuals experiencing homelessness\n\u2022 The director (or designee) of a TRIO or GEAR UP program\n\u2022 A financial aid administrator at your current or a previous college/university who has already made a similar determination",
        yes: "out_third_party_determination",
        no: "q_still_staying_temp"
      },
      q_still_staying_temp: {
        id: "q_still_staying_temp",
        type: "yesno",
        prompt: "Are you still staying somewhere temporarily, or in a situation like the ones mentioned above?",
        yes: "out_faa_determination_uhy",
        no: "q_dep_support_from_parents"
      },
      // STEP 3 / DEPENDENCY OVERRIDE
      q_dep_support_from_parents: {
        id: "q_dep_support_from_parents",
        type: "yesno",
        prompt: "Do you receive any financial support from either of your parents?",
        yes: "out_dependent_parent_info",
        no: "q_dep_contact_with_parents"
      },
      q_dep_contact_with_parents: {
        id: "q_dep_contact_with_parents",
        type: "yesno",
        prompt: "Do you have contact with your parents?",
        yes: "out_likely_dependent_contact_faa",
        no: "q_dep_abuse_or_unknown"
      },
      q_dep_abuse_or_unknown: {
        id: "q_dep_abuse_or_unknown",
        type: "yesno",
        prompt: "Do either of the following apply?\n\n\u2022 You do not know where your parents are or how to contact them\n\u2022 You left home due to an abusive or unsafe situation",
        yes: "out_may_qualify_dependency_override",
        no: "out_likely_dependent_contact_faa"
      },
      // OUTCOMES
      // Age-based automatic independence
      out_auto_independent_24plus: {
        id: "out_auto_independent_24plus",
        type: "outcome",
        title: "You are automatically considered an independent student",
        body: "Because you are 24 or older, you are automatically considered an independent student for FAFSA purposes. You should complete the FAFSA without parental information. Only use your own information (and your spouse\u2019s, if you are currently married).",
        actions: [
          { label: "Go to FAFSA.gov", href: "https://studentaid.gov/h/apply-for-aid/fafsa" }
        ]
      },
      // Reused but updated: complete FAFSA with parent info
      out_fafsa_parent: {
        id: "out_fafsa_parent",
        type: "outcome",
        title: "Complete the FAFSA with parental information",
        body: "Based on your answers, you are considered a dependent student and should complete the FAFSA including your parents\u2019 information.",
        actions: [
          { label: "Go to FAFSA.gov", href: "https://studentaid.gov/h/apply-for-aid/fafsa" }
        ]
      },
      // HS-identified UHY – request letter
      out_hs_determination_letter: {
        id: "out_hs_determination_letter",
        type: "outcome",
        title: "Request a determination letter from your high school",
        body: "You were identified as an unaccompanied homeless youth by your high school. Contact your McKinney-Vento liaison or high school counselor and request a written determination letter stating that you are (or were) an unaccompanied homeless youth. Give this letter to your financial aid office when you complete the FAFSA.",
        actions: [
          {
            label: "Find your McKinney-Vento liaison",
            href: "https://schoolhouseconnection.org/homeless-education-directory"
          },
          {
            label: "Sample determination letters",
            href: "https://schoolhouseconnection.org/article/sample-form-letters-to-determine-independent-student-status-of-unaccompanied-homeless-youth-for-the-fafsa"
          },
          { label: "Go to FAFSA.gov", href: "https://studentaid.gov/h/apply-for-aid/fafsa" }
        ]
      },
      // HS staff know, but student not yet identified
      out_hs_become_identified: {
        id: "out_hs_become_identified",
        type: "outcome",
        title: "Talk to your high school about being identified under McKinney-Vento",
        body: "Because your high school staff know about your homelessness, contact your McKinney-Vento liaison or school counselor to be formally identified as homeless under the McKinney-Vento Act. Once identified, you can request a determination letter as an unaccompanied homeless youth to give to your financial aid office.",
        actions: [
          {
            label: "Find your McKinney-Vento liaison",
            href: "https://schoolhouseconnection.org/homeless-education-directory"
          },
          {
            label: "Sample determination letters",
            href: "https://schoolhouseconnection.org/article/sample-form-letters-to-determine-independent-student-status-of-unaccompanied-homeless-youth-for-the-fafsa"
          },
          { label: "Go to FAFSA.gov", href: "https://studentaid.gov/h/apply-for-aid/fafsa" }
        ]
      },
      // UHY (not through HS) – third party determination
      out_third_party_determination: {
        id: "out_third_party_determination",
        type: "outcome",
        title: "Ask a program or liaison to provide a determination",
        body: "Someone who knows your situation (such as a McKinney-Vento liaison, shelter or program director, TRIO/GEAR UP staff, or a financial aid administrator) can provide a written determination that you are an unaccompanied homeless youth. Give this documentation to your financial aid office. You will then complete the FAFSA as an independent student, without parent information.",
        actions: [
          {
            label: "Sample determination letters",
            href: "https://schoolhouseconnection.org/article/sample-form-letters-to-determine-independent-student-status-of-unaccompanied-homeless-youth-for-the-fafsa"
          },
          { label: "Go to FAFSA.gov", href: "https://studentaid.gov/h/apply-for-aid/fafsa" }
        ]
      },
      // UHY – need FAA determination
      out_faa_determination_uhy: {
        id: "out_faa_determination_uhy",
        type: "outcome",
        title: "Request a determination from your financial aid office",
        body: "Because you are in a homeless or at-risk-of-homelessness situation and don\u2019t have another person who can document it, contact your school\u2019s financial aid office and request a determination as an unaccompanied homeless youth. They may ask you questions or request a written statement from you and from people who know your situation.",
        actions: [
          { label: "Go to FAFSA.gov", href: "https://studentaid.gov/h/apply-for-aid/fafsa" },
          { label: "How to answer FAFSA questions", href: "https://schoolhouseconnection.org/article/how-to-answer-fafsa-questions-about-homelessness" }
        ]
      },
      // Dependency override – clearly dependent
      out_dependent_parent_info: {
        id: "out_dependent_parent_info",
        type: "outcome",
        title: "You are a dependent student for FAFSA",
        body: "Because you receive financial support from your parents, you will be considered a dependent student for FAFSA purposes and will need to report your parents\u2019 information on the FAFSA.",
        actions: [
          { label: "Go to FAFSA.gov", href: "https://studentaid.gov/h/apply-for-aid/fafsa" },
          { label: "How to answer FAFSA questions", href: "__FAFSA_GUIDE_URL__" }
        ]
      },
      // Dependency override – likely dependent, but talk to FA
      out_likely_dependent_contact_faa: {
        id: "out_likely_dependent_contact_faa",
        type: "outcome",
        title: "You will most likely be considered a dependent student",
        body: "Based on your answers, you will most likely be considered a dependent student and will need to include your parents\u2019 information on the FAFSA. If you have unusual circumstances, contact your school\u2019s financial aid office and explain your situation.",
        actions: [
          { label: "Go to FAFSA.gov", href: "https://studentaid.gov/h/apply-for-aid/fafsa" },
          { label: "How to answer FAFSA questions", href: "https://schoolhouseconnection.org/article/how-to-answer-fafsa-questions-about-homelessness" }
        ]
      },
      // Dependency override – may qualify
      out_may_qualify_dependency_override: {
        id: "out_may_qualify_dependency_override",
        type: "outcome",
        title: "You may qualify for a dependency override",
        body: "Because you do not have contact with your parents and/or left home due to an abusive or unsafe situation, you may qualify for a dependency override. Submit the FAFSA as an independent student and follow up with your school\u2019s financial aid office.\n\nThey will need a statement from you describing your circumstances, and they will likely need signed statements from people who know you and can confirm your situation.\n\nNote that the following circumstances on their own usually do NOT qualify for a dependency override:\n\u2022 You do not live with your parents\n\u2022 You are financially self-sufficient\n\u2022 Your parents do not claim you on their taxes\n\u2022 Your parents are not helping with college expenses\n\u2022 Your parents do not want to provide their information or refuse to complete the FAFSA",
        actions: [
          { label: "Go to FAFSA.gov", href: "https://studentaid.gov/h/apply-for-aid/fafsa" },
          { label: "How to answer FAFSA questions", href: "__FAFSA_GUIDE_URL__" }
        ]
      }
    }
  };
  var decisionTree_default = decisionTree;

  // src/config.js
  var config = {
    links: {
      FAFSA: "https://studentaid.gov/h/apply-for-aid/fafsa",
      TEMPLATE_LIAISON: "https://docs.google.com/document/d/1i7Z4b-eQwXLOHdEkzQXGTFDqq_pqxiBmPcNyqc4w48o/edit?tab=t.0",
      TEMPLATE_PROGRAM: "https://docs.google.com/document/d/1i7Z4b-eQwXLOHdEkzQXGTFDqq_pqxiBmPcNyqc4w48o/edit?tab=t.0",
      TEMPLATE_TRIO: "https://docs.google.com/document/d/1i7Z4b-eQwXLOHdEkzQXGTFDqq_pqxiBmPcNyqc4w48o/edit?tab=t.0",
      TEMPLATE_FAA: "https://docs.google.com/document/d/1i7Z4b-eQwXLOHdEkzQXGTFDqq_pqxiBmPcNyqc4w48o/edit?tab=t.0",
      FAFSA_GUIDE_URL: "https://schoolhouseconnection.org/article/how-to-answer-fafsa-questions-about-homelessness"
    },
    i18n: {
      locale: "en-US"
    }
  };
  var config_default = config;

  // src/accessibility.js
  function initBinaryChoiceGroup(groupEl) {
    if (!groupEl) return () => {
    };
    const buttons = Array.from(groupEl.querySelectorAll("button"));
    if (buttons.length === 0) return () => {
    };
    const handleKeyDown = (event) => {
      if (!["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(event.key)) {
        return;
      }
      event.preventDefault();
      const currentIndex = buttons.indexOf(document.activeElement);
      if (currentIndex === -1) {
        buttons[0].focus();
        return;
      }
      const direction = event.key === "ArrowLeft" || event.key === "ArrowUp" ? -1 : 1;
      const nextIndex = (currentIndex + direction + buttons.length) % buttons.length;
      buttons[nextIndex].focus();
    };
    groupEl.addEventListener("keydown", handleKeyDown);
    return () => {
      groupEl.removeEventListener("keydown", handleKeyDown);
    };
  }
  function focusPrimaryAction(rootEl) {
    if (!rootEl) return;
    const primaryButton = rootEl.querySelector("[data-uhyq-focus]");
    if (primaryButton) {
      primaryButton.focus();
    }
  }
  function registerEscapeHandler(rootEl, handler) {
    if (!rootEl || typeof handler !== "function") return () => {
    };
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        handler(event);
      }
    };
    rootEl.addEventListener("keydown", onKeyDown);
    return () => {
      rootEl.removeEventListener("keydown", onKeyDown);
    };
  }
  function announceStep(liveRegion, message) {
    if (!liveRegion) return;
    liveRegion.textContent = "";
    window.requestAnimationFrame(() => {
      liveRegion.textContent = message;
    });
  }

  // src/ui.js
  var DEFAULT_FALLBACK_HTML = `
  <div class="uhyq-fallback" role="note">
    <p><strong>This tool needs JavaScript.</strong> If the interactive quiz does not load, visit SchoolHouse Connection for <a href="https://schoolhouseconnection.org" target="_blank" rel="noopener noreferrer">resources for unaccompanied homeless youth</a>.</p>
  </div>
`;
  function resolveLink(href, linksConfig) {
    if (!href) return "#";
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
    if (!node || node.type !== "yesno") return 0;
    const yesNode = tree.nodes[node.yes];
    const noNode = tree.nodes[node.no];
    let nextQuestionId = null;
    if (yesNode && yesNode.type === "yesno") {
      nextQuestionId = node.yes;
    }
    if (noNode && noNode.type === "yesno") {
      if (!nextQuestionId) {
        nextQuestionId = node.no;
      } else {
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
  function createQuiz({ container, tree, config: config2, callbacks = {}, initialPathSegments = [] }) {
    const linksConfig = config2?.links ?? {};
    const onStep = typeof callbacks.onStep === "function" ? callbacks.onStep : () => {
    };
    const onOutcome = typeof callbacks.onOutcome === "function" ? callbacks.onOutcome : () => {
    };
    const fallbackHTML = container.innerHTML.trim() || DEFAULT_FALLBACK_HTML;
    container.innerHTML = "";
    const root = document.createElement("div");
    root.className = "uhyq-root";
    root.setAttribute("role", "application");
    root.setAttribute("aria-label", "Unaccompanied homeless youth determination quiz");
    const progressEl = document.createElement("div");
    progressEl.className = "uhyq-progress";
    progressEl.setAttribute("role", "status");
    const stepRegion = document.createElement("div");
    stepRegion.className = "uhyq-card";
    stepRegion.setAttribute("aria-live", "polite");
    const politeRegion = document.createElement("div");
    politeRegion.className = "uhyq-sr-only";
    politeRegion.setAttribute("aria-live", "polite");
    politeRegion.setAttribute("aria-atomic", "true");
    const controlsEl = document.createElement("div");
    controlsEl.className = "uhyq-controls";
    const backBtn = document.createElement("button");
    backBtn.type = "button";
    backBtn.className = "uhyq-btn uhyq-btn-secondary";
    backBtn.textContent = "Back";
    backBtn.setAttribute("aria-label", "Go to previous question");
    backBtn.disabled = true;
    const restartBtn = document.createElement("button");
    restartBtn.type = "button";
    restartBtn.className = "uhyq-btn uhyq-btn-secondary";
    restartBtn.textContent = "Restart";
    restartBtn.setAttribute("aria-label", "Restart quiz");
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
      const shouldRestart = window.confirm("Restart the quiz? Your answers will be cleared.");
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
    function formatPromptMarkup(text) {
      if (typeof text !== "string" || !text.includes("\n")) {
        return text;
      }
      const segments = text.split("\n\n").filter(Boolean);
      return segments.map((segment) => formatPromptSegment(segment.trim())).join("");
    }
    function renderYesNoQuestion(node) {
      cleanupStepHandlers();
      stepRegion.innerHTML = "";
      const promptEl = document.createElement("h2");
      promptEl.id = `${node.id}-prompt`;
      promptEl.innerHTML = formatPromptMarkup(node.prompt);
      const choicesEl = document.createElement("div");
      choicesEl.className = "uhyq-choices";
      choicesEl.setAttribute("role", "group");
      choicesEl.setAttribute("aria-labelledby", promptEl.id);
      const yesChoice = { value: "yes", label: "Yes", nextId: node.yes, segmentValue: "yes" };
      const noChoice = { value: "no", label: "No", nextId: node.no, segmentValue: "no" };
      const yesBtn = document.createElement("button");
      yesBtn.type = "button";
      yesBtn.className = "uhyq-btn";
      yesBtn.dataset.answer = "yes";
      yesBtn.dataset.uhyqFocus = "true";
      yesBtn.textContent = yesChoice.label;
      yesBtn.addEventListener("click", () => handleChoice(yesChoice));
      const noBtn = document.createElement("button");
      noBtn.type = "button";
      noBtn.className = "uhyq-btn";
      noBtn.dataset.answer = "no";
      noBtn.textContent = noChoice.label;
      noBtn.addEventListener("click", () => handleChoice(noChoice));
      choicesEl.append(yesBtn, noBtn);
      stepRegion.append(promptEl, choicesEl);
      disposeBinaryHandler = initBinaryChoiceGroup(choicesEl);
      focusPrimaryAction(stepRegion);
      announceStep(politeRegion, node.prompt);
      onStep({ id: node.id, index: state.history.length + 1 });
    }
    function renderButtonGroup(node) {
      cleanupStepHandlers();
      stepRegion.innerHTML = "";
      const promptEl = document.createElement("h2");
      promptEl.id = `${node.id}-prompt`;
      promptEl.textContent = node.prompt;
      const choicesEl = document.createElement("div");
      choicesEl.className = "uhyq-choices";
      choicesEl.setAttribute("role", "group");
      choicesEl.setAttribute("aria-labelledby", promptEl.id);
      (node.options || []).forEach((option, index) => {
        const choice = {
          value: option.id || option.label,
          label: option.label,
          nextId: option.next,
          segmentValue: option.id || option.label
        };
        const button = document.createElement("button");
        button.type = "button";
        button.className = "uhyq-btn";
        if (index === 0) {
          button.dataset.uhyqFocus = "true";
        }
        button.textContent = option.label;
        button.addEventListener("click", () => handleChoice(choice));
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
      stepRegion.innerHTML = "";
      const titleEl = document.createElement("h2");
      titleEl.textContent = node.title;
      const bodyEl = document.createElement("p");
      bodyEl.className = "uhyq-body";
      bodyEl.textContent = node.body;
      const actionsEl = document.createElement("div");
      actionsEl.className = "uhyq-outcome-actions";
      (node.actions || []).forEach((action) => {
        const href = resolveLink(action.href, linksConfig);
        const link = document.createElement("a");
        link.className = "uhyq-btn uhyq-btn-secondary uhyq-link-button";
        link.href = href;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.textContent = action.label;
        actionsEl.appendChild(link);
      });
      if (actionsEl.children.length) {
        actionsEl.firstElementChild?.setAttribute("data-uhyq-focus", "true");
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
      let alertEl = root.querySelector(".uhyq-alert");
      if (!alertEl) {
        alertEl = document.createElement("div");
        alertEl.className = "uhyq-alert";
        root.insertBefore(alertEl, controlsEl);
      }
      alertEl.textContent = text;
      messageTimeout = window.setTimeout(() => {
        if (alertEl) {
          alertEl.remove();
        }
      }, 4e3);
    }
    function updateProgress(node) {
      if (node.type !== "yesno") {
        progressEl.textContent = "You're all set";
        return;
      }
      const answeredCount = state.history.filter((entry) => {
        const historyNode = tree.nodes[entry.id];
        return historyNode && historyNode.type === "yesno";
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
      const alertEl = root.querySelector(".uhyq-alert");
      if (alertEl) alertEl.remove();
      render();
    }
    function replayPath(segments) {
      if (!Array.isArray(segments) || !segments.length) {
        return;
      }
      restart();
      for (const segment of segments) {
        if (typeof segment !== "string" || !segment.length) {
          break;
        }
        let questionId;
        let answerToken;
        if (segment.includes(":")) {
          [questionId, answerToken] = segment.split(":");
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
        if (expectedNode.type === "buttonGroup") {
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
        if (expectedNode.type !== "yesno") {
          break;
        }
        const normalizedAnswer = answerToken === "y" ? "yes" : answerToken === "n" ? "no" : answerToken === "yes" || answerToken === "no" ? answerToken : null;
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
        if (tree.nodes[state.currentId]?.type !== "yesno" && tree.nodes[state.currentId]?.type !== "buttonGroup") {
          break;
        }
      }
    }
    function render() {
      const node = tree.nodes[state.currentId];
      if (!node) {
        stepRegion.innerHTML = fallbackHTML;
        backBtn.disabled = true;
        progressEl.textContent = "Sorry, this quiz is unavailable right now.";
        return;
      }
      if (node.type === "yesno") {
        updateProgress(node);
        renderYesNoQuestion(node);
        backBtn.disabled = state.history.length === 0;
      } else if (node.type === "buttonGroup") {
        progressEl.textContent = "Select your role to begin";
        renderButtonGroup(node);
        backBtn.disabled = state.history.length === 0;
      } else {
        updateProgress(node);
        renderOutcome(node);
      }
    }
    backBtn.addEventListener("click", goBack);
    restartBtn.addEventListener("click", () => {
      const shouldRestart = window.confirm("Restart the quiz? Your answers will be cleared.");
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

  // src/styles.css
  var styles_default = '.uhyq-card h2 p {\n  margin: 0 0 0.75rem;\n}\n\n.uhyq-card h2 ul {\n  margin: 0 0 0.75rem 1.25rem;\n  padding: 0;\n  list-style: disc;\n}\n\n.uhyq-card h2 ul:last-child {\n  margin-bottom: 0;\n}\n\n.uhyq-card h2 li {\n  margin: 0.35rem 0;\n  line-height: 1.45;\n}\n.uhyq-root {\n  font-family: "Inter", "Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif;\n  background: #f8f5ff;\n  color: #2c2050;\n  border: 1px solid rgba(91, 44, 131, 0.2);\n  border-radius: 16px;\n  box-shadow: 0 12px 24px rgba(44, 32, 80, 0.15);\n  padding: 24px;\n  max-width: 480px;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n.uhyq-root * {\n  box-sizing: border-box;\n}\n\n.uhyq-sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border: 0;\n}\n\n.uhyq-hidden {\n  display: none !important;\n}\n\n.uhyq-progress {\n  font-size: 0.95rem;\n  font-weight: 600;\n  color: #5b2c83;\n}\n\n.uhyq-card {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n.uhyq-card h2 {\n  margin: 0;\n  font-size: 1.25rem;\n  line-height: 1.3;\n  color: #432266;\n}\n\n.uhyq-body {\n  font-size: 0.95rem;\n  line-height: 1.5;\n}\n\n.uhyq-actions,\n.uhyq-choices {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n.uhyq-btn {\n  appearance: none;\n  background-color: #5b2c83;\n  color: #ffffff;\n  border: none;\n  border-radius: 999px;\n  padding: 12px 20px;\n  font-size: 1rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background-color 0.2s ease, transform 0.2s ease;\n  outline: none;\n}\n\n.uhyq-btn:hover,\n.uhyq-btn:focus-visible {\n  background-color: #4a206e;\n}\n\n.uhyq-btn:focus-visible {\n  box-shadow: 0 0 0 3px rgba(255, 220, 92, 0.6);\n}\n\n.uhyq-btn-secondary {\n  background-color: #ffdc5c;\n  color: #432266;\n  border: 2px solid #f6b81f;\n}\n\n.uhyq-btn-secondary:hover,\n.uhyq-btn-secondary:focus-visible {\n  background-color: #ffd13a;\n}\n\n.uhyq-controls {\n  display: flex;\n  justify-content: space-between;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n\n.uhyq-controls .uhyq-btn {\n  flex: 1 1 150px;\n}\n\n.uhyq-fallback {\n  padding: 16px;\n  border: 1px dashed rgba(91, 44, 131, 0.4);\n  border-radius: 12px;\n  background: #fff7d6;\n  color: #2c2050;\n  font-size: 0.95rem;\n}\n\n.uhyq-alert {\n  background: #f9ecff;\n  border-left: 4px solid #5b2c83;\n  padding: 12px 16px;\n  border-radius: 8px;\n  font-size: 0.95rem;\n}\n\n.uhyq-link-button {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  text-decoration: none;\n}\n\n.uhyq-link-button::after {\n  content: "\\2197";\n  font-size: 0.85em;\n}\n\n.uhyq-outcome-actions {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n.uhyq-muted {\n  font-size: 0.85rem;\n  color: #4a4a4a;\n}\n\n@media (max-width: 480px) {\n  .uhyq-root {\n    padding: 20px;\n    border-radius: 12px;\n  }\n\n  .uhyq-controls {\n    flex-direction: column;\n  }\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .uhyq-btn {\n    transition: none;\n  }\n}\n\n@media print {\n  .uhyq-root {\n    box-shadow: none;\n    border: 1px solid #000;\n  }\n\n  .uhyq-controls,\n  .uhyq-progress {\n    display: none !important;\n  }\n\n  .uhyq-outcome-actions {\n    display: block;\n  }\n\n  .uhyq-link-button::after {\n    content: " (" attr(href) ")";\n  }\n}\n\n';

  // src/index.js
  var STYLE_TAG_ID = "uhyq-style";
  var FALLBACK_HTML = `
  <div class="uhyq-fallback" role="note">
    <p><strong>This tool needs JavaScript.</strong> If the quiz does not load, visit SchoolHouse Connection for <a href="https://schoolhouseconnection.org" target="_blank" rel="noopener noreferrer">resources for unaccompanied homeless youth</a>.</p>
  </div>
`;
  var instances = /* @__PURE__ */ new Map();
  function injectStyles() {
    if (typeof document === "undefined") return;
    if (document.getElementById(STYLE_TAG_ID)) return;
    const styleTag = document.createElement("style");
    styleTag.id = STYLE_TAG_ID;
    styleTag.textContent = styles_default;
    document.head.appendChild(styleTag);
  }
  function deepMerge(target, source) {
    if (!source) return target;
    const output = Array.isArray(target) ? [...target] : { ...target };
    Object.keys(source).forEach((key) => {
      const value = source[key];
      if (value && typeof value === "object" && !Array.isArray(value)) {
        output[key] = deepMerge(output[key] || {}, value);
      } else {
        output[key] = value;
      }
    });
    return output;
  }
  function cloneConfig(baseConfig) {
    return deepMerge({}, baseConfig);
  }
  function parsePathHash(hash) {
    if (typeof hash !== "string" || !hash.startsWith("#")) return [];
    const params = new URLSearchParams(hash.slice(1));
    const raw = params.get("path");
    if (!raw) return [];
    const decoded = decodeURIComponent(raw);
    return decoded.split("-").map((segment) => segment.trim()).filter(Boolean);
  }
  function ensureFallbackMarkup(container) {
    if (!container) return;
    if (!container.innerHTML.trim()) {
      container.innerHTML = FALLBACK_HTML;
    }
  }
  function destroyAll() {
    instances.forEach((instance) => {
      if (instance && typeof instance.destroy === "function") {
        instance.destroy();
      }
    });
    instances.clear();
  }
  function restartAll() {
    instances.forEach((instance) => {
      if (instance && typeof instance.restart === "function") {
        instance.restart();
      }
    });
  }
  function init(options = {}) {
    if (typeof document === "undefined") return [];
    const {
      selector = "[data-uhy-quiz]",
      configOverrides = {},
      onStep,
      onOutcome
    } = options;
    injectStyles();
    const config2 = deepMerge(cloneConfig(config_default), configOverrides);
    const pathSegments = parsePathHash(window.location.hash);
    const containers = Array.from(document.querySelectorAll(selector));
    if (!containers.length) {
      console.warn("UHYQuiz: no containers found for selector", selector);
      return [];
    }
    const created = containers.map((container, index) => {
      if (instances.has(container)) {
        const existing = instances.get(container);
        existing.restart();
        return existing;
      }
      ensureFallbackMarkup(container);
      const instance = createQuiz({
        container,
        tree: decisionTree_default,
        config: config2,
        callbacks: { onStep, onOutcome },
        initialPathSegments: index === 0 ? pathSegments : []
      });
      instances.set(container, instance);
      return instance;
    });
    return created;
  }
  var api = { init, destroyAll, restartAll };
  if (typeof window !== "undefined") {
    window.UHYQuiz = api;
  }
  var src_default = api;
  return __toCommonJS(src_exports);
})();
//# sourceMappingURL=uhy-quiz.js.map
