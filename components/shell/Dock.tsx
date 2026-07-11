"use client";

import { useDesktop } from "@/lib/store";
import { APP_ORDER, WINDOWS } from "@/components/window/windowConfig";
import styles from "./Dock.module.css";

export default function Dock() {
  const openApp = useDesktop((s) => s.openApp);

  return (
    <div className={styles.dock}>
      {APP_ORDER.map((id) => {
        const meta = WINDOWS[id];
        return (
          <button
            key={id}
            className={styles.item}
            style={{ background: meta.accentVar }}
            title={meta.label}
            aria-label={meta.label}
            onClick={() => openApp(id)}
          >
            {meta.glyph}
          </button>
        );
      })}
    </div>
  );
}
