import { useEffect, useRef } from "react";

export function useOutsideClick(close, listenCapturing = true) {
  const ref = useRef();

  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          close();
        }
      }
      // the third prop true is to be handled in the capturing phase
      document.addEventListener("click", handleClick, listenCapturing);
      return () => document.removeEventListener("click", handleClick);
    },
    [close, listenCapturing]
  );

  return ref;
}
