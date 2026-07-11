"use client";

import { useDesktop } from "@/lib/store";
import { APP_ORDER, WINDOWS } from "@/components/window/windowConfig";
import { useIsMobile } from "@/lib/useIsMobile";
import styles from "./DesktopIcons.module.css";

export default function DesktopIcons() {
  const openApp = useDesktop((s) => s.openApp);
  const windows = useDesktop((s) => s.windows);
  const isMobile = useIsMobile();

  // On mobile, hide the launcher grid while any window is open.
  const anyOpen = APP_ORDER.some((id) => windows[id].open);
  if (isMobile && anyOpen) return null;

  return (
    <div className={styles.icons}>
      {APP_ORDER.map((id) => {
        const meta = WINDOWS[id];
        return (
          <button
            key={id}
            className={styles.icon}
            onClick={() => openApp(id)}
          >
            <span
              className={styles.tile}
              style={{ background: meta.accentVar }}
            >
              {meta.glyph}
            </span>
            <span className={styles.label}>{meta.label}</span>
          </button>
        );
      })}
    </div>
  );
}
