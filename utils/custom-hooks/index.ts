import { ReactNode, useEffect } from "react";

export function useClickAway(
  ref: React.MutableRefObject<HTMLElement | null>,
  action?: () => void
) {
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        ref &&
        ref.current &&
        event.target &&
        !ref.current.contains(event.target as Node)
      ) {
        action && action();
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [action, ref]);
}
