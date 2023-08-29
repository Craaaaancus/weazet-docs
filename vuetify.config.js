/* eslint-disable @typescript-eslint/no-empty-function */
global.CSS = { supports: () => false };

// Fix undefined ResizeObserver error
class ResizeObserverStub {
  observe() {}
  unobserve() {}
  disconnect() {}
}

window.ResizeObserver = window.ResizeObserver || ResizeObserverStub;
