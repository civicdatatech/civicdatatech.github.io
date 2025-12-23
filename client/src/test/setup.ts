/* language: typescript */
// filepath: /Users/virginiadooley/Documents/civicdataproject/client/src/test/setup.ts
import "@testing-library/jest-dom/vitest";

// Simple IntersectionObserver mock for Framer Motion
class IntersectionObserverMock {
  constructor(
    _callback: IntersectionObserverCallback,
    _options?: IntersectionObserverInit
  ) {}
  observe(_target: Element) {}
  unobserve(_target: Element) {}
  disconnect() {}
  takeRecords(): IntersectionObserverEntry[] {
    return [];
  }
}

// Attach to JSDOM global
// @ts-expect-error jsdom global
globalThis.IntersectionObserver = IntersectionObserverMock as any;