"use client";

import { useEffect, useState } from "react";
import { useDesktop } from "@/lib/store";
import styles from "./BootScreen.module.css";

export default function BootScreen() {
  const finishBoot = useDesktop((s) => s.finishBoot);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => {
      setGone(true);
      finishBoot();
    }, 1150);
    return () => clearTimeout(t);
  }, [finishBoot]);

  if (gone) return null;

  return (
    <div className={styles.boot}>
      <div className={styles.logo}>◆</div>
      <div className={styles.text}>booting folio.os …</div>
    </div>
  );
}
