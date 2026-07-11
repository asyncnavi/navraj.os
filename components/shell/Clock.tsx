"use client";

import { useEffect, useState } from "react";

/** Live clock. Renders a stable placeholder until mounted to avoid
 *  hydration mismatch (server has no wall clock). */
export default function Clock() {
  const [time, setTime] = useState<string>("9:41");

  useEffect(() => {
    const tick = () => {
      const d = new Date();
      let h = d.getHours();
      const m = String(d.getMinutes()).padStart(2, "0");
      const ap = h >= 12 ? "PM" : "AM";
      h = h % 12 || 12;
      setTime(`${h}:${m} ${ap}`);
    };
    tick();
    const iv = setInterval(tick, 20000);
    return () => clearInterval(iv);
  }, []);

  return <span suppressHydrationWarning>{time}</span>;
}
