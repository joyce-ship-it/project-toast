import React from "react";

export default function useEscapeKey(runThisFunction, dependencies = []) {
  React.useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "Escape") {
        runThisFunction();
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, dependencies);
}
