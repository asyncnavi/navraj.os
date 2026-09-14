"use client";

import { useDesktop } from "@/lib/store";
import { WINDOWS } from "@/components/window/windowConfig";
import Clock from "./Clock";
import styles from "./MenuBar.module.css";

const LINKS = ["projects", "blog", "resume", "now", "contact"] as const;

export default function MenuBar() {
  const openApp = useDesktop((s) => s.openApp);

  return (
    <div className={styles.menubar}>
      <button className={styles.brand} onClick={() => openApp("about")}>
        <span className={styles.logo}>◆</span>
        navraj<span className={styles.dim}>.s</span>
      </button>

      <nav className={styles.links}>
        {LINKS.map((id) => (
          <button key={id} className={styles.link} onClick={() => openApp(id)}>
            {capitalize(WINDOWS[id].id)}
          </button>
        ))}
      </nav>

      <div className={styles.spacer} />

      <div className={styles.status}>
        <span className={styles.online}>
          <span className={styles.dot} />
          online
        </span>
        <span className={styles.sep}>·</span>
        <Clock />
      </div>
    </div>
  );
}

function capitalize(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}
