import { describe, expect, it, vi } from "vitest";

vi.mock("react-dom", () => {
  return {
    hydrate: vi.fn(),
  };
});

describe("entry.client", () => {
  it("set env using vi.stubEnv", async () => {
    // This should set process.env.NODE_ENV to production but it stays in test
    vi.stubEnv("NODE_ENV", "production");
    
    expect(process.env.NODE_ENV).toBe("production");
  });

  // Uncomment this test to see the test fail. Using .skip still fails.
  // it("set env directly", async () => {
  //   // This should set process.env.NODE_ENV to production but it stays in test
  //   process.env.NODE_ENV = "production";
  //   
  //   expect(process.env.NODE_ENV).toBe("production");
  // });
});
