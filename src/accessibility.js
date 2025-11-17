export function initBinaryChoiceGroup(groupEl) {
  if (!groupEl) return () => {};

  const buttons = Array.from(groupEl.querySelectorAll('button'));
  if (buttons.length === 0) return () => {};

  const handleKeyDown = (event) => {
    if (!['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(event.key)) {
      return;
    }

    event.preventDefault();
    const currentIndex = buttons.indexOf(document.activeElement);
    if (currentIndex === -1) {
      buttons[0].focus();
      return;
    }

    const direction = event.key === 'ArrowLeft' || event.key === 'ArrowUp' ? -1 : 1;
    const nextIndex = (currentIndex + direction + buttons.length) % buttons.length;
    buttons[nextIndex].focus();
  };

  groupEl.addEventListener('keydown', handleKeyDown);

  return () => {
    groupEl.removeEventListener('keydown', handleKeyDown);
  };
}

export function focusPrimaryAction(rootEl) {
  if (!rootEl) return;
  const primaryButton = rootEl.querySelector('[data-uhyq-focus]');
  if (primaryButton) {
    primaryButton.focus();
  }
}

export function registerEscapeHandler(rootEl, handler) {
  if (!rootEl || typeof handler !== 'function') return () => {};

  const onKeyDown = (event) => {
    if (event.key === 'Escape') {
      handler(event);
    }
  };

  rootEl.addEventListener('keydown', onKeyDown);

  return () => {
    rootEl.removeEventListener('keydown', onKeyDown);
  };
}

export function announceStep(liveRegion, message) {
  if (!liveRegion) return;
  liveRegion.textContent = '';
  window.requestAnimationFrame(() => {
    liveRegion.textContent = message;
  });
}

