import { RemixBrowser } from "@remix-run/react";
import { StrictMode } from "react";
import { hydrate as reactHydrate } from "react-dom";


function hydrate() {
  reactHydrate(
    <StrictMode>
      <RemixBrowser />
    </StrictMode>,
    document
  );
}

export const entryClient = () => {
  if (typeof requestIdleCallback === "function") {
    requestIdleCallback(hydrate);
  } else {
    // Safari doesn't support requestIdleCallback
    // https://caniuse.com/requestidlecallback
    setTimeout(hydrate, 1);
  }
};

entryClient();
