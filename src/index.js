import decisionTree from './decisionTree.js';
import defaultConfig from './config.js';
import { createQuiz } from './ui.js';
import styles from './styles.css';

const STYLE_TAG_ID = 'uhyq-style';
const FALLBACK_HTML = `
  <div class="uhyq-fallback" role="note">
    <p><strong>This tool needs JavaScript.</strong> If the quiz does not load, visit SchoolHouse Connection for <a href="https://schoolhouseconnection.org" target="_blank" rel="noopener noreferrer">resources for unaccompanied homeless youth</a>.</p>
  </div>
`;

const instances = new Map();

function injectStyles() {
  if (typeof document === 'undefined') return;
  if (document.getElementById(STYLE_TAG_ID)) return;

  const styleTag = document.createElement('style');
  styleTag.id = STYLE_TAG_ID;
  styleTag.textContent = styles;
  document.head.appendChild(styleTag);
}

function deepMerge(target, source) {
  if (!source) return target;
  const output = Array.isArray(target) ? [...target] : { ...target };

  Object.keys(source).forEach((key) => {
    const value = source[key];
    if (value && typeof value === 'object' && !Array.isArray(value)) {
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
  if (typeof hash !== 'string' || !hash.startsWith('#')) return [];
  const params = new URLSearchParams(hash.slice(1));
  const raw = params.get('path');
  if (!raw) return [];

  const decoded = decodeURIComponent(raw);
  return decoded
    .split('-')
    .map((segment) => segment.trim())
    .filter(Boolean);
}

function ensureFallbackMarkup(container) {
  if (!container) return;
  if (!container.innerHTML.trim()) {
    container.innerHTML = FALLBACK_HTML;
  }
}

function destroyAll() {
  instances.forEach((instance) => {
    if (instance && typeof instance.destroy === 'function') {
      instance.destroy();
    }
  });
  instances.clear();
}

function restartAll() {
  instances.forEach((instance) => {
    if (instance && typeof instance.restart === 'function') {
      instance.restart();
    }
  });
}

function init(options = {}) {
  if (typeof document === 'undefined') return [];

  const {
    selector = '[data-uhy-quiz]',
    configOverrides = {},
    onStep,
    onOutcome
  } = options;

  injectStyles();

  const config = deepMerge(cloneConfig(defaultConfig), configOverrides);
  const pathSegments = parsePathHash(window.location.hash);

  const containers = Array.from(document.querySelectorAll(selector));
  if (!containers.length) {
    console.warn('UHYQuiz: no containers found for selector', selector);
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
      tree: decisionTree,
      config,
      callbacks: { onStep, onOutcome },
      initialPathSegments: index === 0 ? pathSegments : []
    });

    instances.set(container, instance);
    return instance;
  });

  return created;
}

const api = { init, destroyAll, restartAll };

if (typeof window !== 'undefined') {
  window.UHYQuiz = api;
}

export { init, destroyAll, restartAll };
export default api;

