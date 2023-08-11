import matchers from "@testing-library/jest-dom/matchers";
import { cleanup } from "@testing-library/react";
import { vi, expect, afterEach, beforeAll, afterAll } from "vitest";


// Extends Vitest expect method with methods from react-testing-library
expect.extend(matchers);

// Clears the JSDom after each "it" statement
afterEach(() => {
  cleanup();
});

const IntersectionObserverMock = vi.fn(() => {
  return {
    disconnect: vi.fn(),
    observe: vi.fn(),
    takeRecords: vi.fn(),
    unobserve: vi.fn(),
  };
});

vi.stubGlobal("IntersectionObserver", IntersectionObserverMock);

const ResizeObserver = vi.fn(() => {
  return {
    observe: vi.fn(),
    unobserve: vi.fn(),
    disconnect: vi.fn(),
  };
});

vi.stubGlobal("ResizeObserver", ResizeObserver);

const caches = {
  default: {
    match: vi.fn(async () => {
      return undefined;
    }),
    put: vi.fn(),
  },
};

vi.stubGlobal("caches", caches);

const crypto = {
  subtle: {
    digest: vi.fn(async () => {
      return new Uint8Array([1, 2, 3]);
    }),
  },
};

vi.stubGlobal("crypto", crypto);

const matchMedia = vi.fn((query) => {
  return {
    matches: false,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    media: query,
    onchange: null,
    addListener: vi.fn(), // Deprecated
    removeListener: vi.fn(), // Deprecated
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  };
});

vi.stubGlobal("matchMedia", matchMedia);

// Mocks console methods to throw errors instead of logging them in the CI
if (process.env.CI) {
  global.console.log = vi.fn((message) => {
    console.debug(message);
    throw new Error("Unexpected console.log() call");
  });

  global.console.warn = vi.fn((message) => {
    console.debug(message);
    throw new Error("Unexpected console.warn() call");
  });

  global.console.error = vi.fn((message) => {
    console.debug(message);
    throw new Error("Unexpected console.error() call");
  });
}