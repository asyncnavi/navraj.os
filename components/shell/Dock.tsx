"use client";

import { useDesktop } from "@/lib/store";
import { APP_ORDER, WINDOWS } from "@/components/window/windowConfig";
import styles from "./Dock.module.css";

export default function Dock() {
  const openApp = useDesktop((s) => s.openApp);
  const windows = useDesktop((s) => s.windows);
  const activeId = APP_ORDER.filter((id) => windows[id].open).reduce<
    (typeof APP_ORDER)[number] | undefined
  >((active, id) => !active || windows[id].z > windows[active].z ? id : active, undefined);

  return (
    <nav className={styles.dock} aria-label="Portfolio sections" style={{ zIndex: Math.max(4000, activeId ? windows[activeId].z + 1 : 4000) }}>
      {APP_ORDER.map((id) => {
        const meta = WINDOWS[id];
        return (
          <button
            key={id}
            className={styles.item}
            style={{ background: meta.accentVar }}
            title={meta.label}
            aria-label={meta.label}
            aria-current={activeId === id ? "page" : undefined}
            onClick={() => openApp(id)}
          >
            <span aria-hidden="true">{meta.glyph}</span>
            <span className={styles.label}>{id}</span>
          </button>
        );
      })}
    </nav>
  );
}
