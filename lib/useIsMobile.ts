import { useEffect, useState } from "react";

const MOBILE_MAX = 860;

/**
 * Tracks whether the viewport is in "mobile" desktop-OS mode.
 * Starts false to keep SSR/first client render consistent, then
 * corrects after mount.
 */
export function useIsMobile(): boolean {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= MOBILE_MAX);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return isMobile;
}
