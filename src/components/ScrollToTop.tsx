// ScrollToTop.tsx
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, search, hash } = useLocation();
  const prevLocation = useRef({ pathname: "", search: "", hash: "" });

  useEffect(() => {
    const prev = prevLocation.current;

    // Case 1: If route (pathname or search) changes → scroll to top
    if (pathname !== prev.pathname || search !== prev.search) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    // Case 2: If hash exists → always scroll that element into view
    else if (hash) {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);

      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 200);
      }
    }

    // Save current location for next comparison
    prevLocation.current = { pathname, search, hash };
  }, [pathname, search, hash]);

  return null;
}
