"use client";

import { useCallback, useEffect, useRef, type ReactNode } from "react";
import { useDesktop } from "@/lib/store";
import { WINDOWS, type AppId } from "./windowConfig";
import { useIsMobile } from "@/lib/useIsMobile";
import styles from "./Window.module.css";

type WindowProps = {
  id: AppId;
  /** Optional extra node in the titlebar (e.g. resume download button) */
  titleExtra?: ReactNode;
  children: ReactNode;
};

export default function Window({ id, titleExtra, children }: WindowProps) {
  const meta = WINDOWS[id];
  const state = useDesktop((s) => s.windows[id]);
  const focusApp = useDesktop((s) => s.focusApp);
  const closeApp = useDesktop((s) => s.closeApp);
  const toggleMax = useDesktop((s) => s.toggleMax);
  const setPos = useDesktop((s) => s.setPos);
  const isMobile = useIsMobile();

  const ref = useRef<HTMLDivElement>(null);
  const drag = useRef<{ dx: number; dy: number } | null>(null);

  const onPointerMove = useCallback(
    (e: PointerEvent) => {
      if (!drag.current || !ref.current) return;
      const w = ref.current.offsetWidth;
      let left = e.clientX - drag.current.dx;
      let top = e.clientY - drag.current.dy;
      left = Math.max(-w + 90, Math.min(left, window.innerWidth - 90));
      top = Math.max(46, Math.min(top, window.innerHeight - 46));
      setPos(id, { top, left });
    },
    [id, setPos],
  );

  const endDrag = useCallback(() => {
    drag.current = null;
    window.removeEventListener("pointermove", onPointerMove);
    window.removeEventListener("pointerup", endDrag);
  }, [onPointerMove]);

  useEffect(() => endDrag, [endDrag]);

  const onTitlePointerDown = (e: React.PointerEvent) => {
    if (isMobile || state.maxed) return;
    // ignore clicks on the traffic-light controls
    if ((e.target as HTMLElement).closest("[data-control]")) return;
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    focusApp(id);
    drag.current = { dx: e.clientX - rect.left, dy: e.clientY - rect.top };
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", endDrag);
    e.preventDefault();
  };

  if (!state.open) return null;

  // Compute geometry
  const top = state.pos?.top ?? meta.top;
  const left = state.pos?.left ?? meta.left;

  const geometry: React.CSSProperties =
    isMobile
      ? {
          position: "fixed",
          top: "var(--menubar-h)",
          left: 0,
          right: 0,
          bottom: 0,
          width: "auto",
          borderRadius: 0,
          borderLeft: "none",
          borderRight: "none",
          borderBottom: "none",
        }
      : state.maxed
        ? {
            position: "fixed",
            top: 58,
            left: 20,
            right: 20,
            bottom: 78,
            width: "auto",
          }
        : {
            position: "absolute",
            top,
            left,
            width: meta.width,
            maxWidth: "calc(100vw - 44px)",
          };

  return (
    <div
      ref={ref}
      className={styles.window}
      style={{ zIndex: state.z, ...geometry }}
      onPointerDown={() => !isMobile && focusApp(id)}
      role="dialog"
      aria-label={meta.label}
    >
      <div
        className={styles.titlebar}
        style={{ background: meta.accentVar }}
        onPointerDown={onTitlePointerDown}
      >
        <div className={styles.lights}>
          <button
            data-control
            className={styles.light}
            style={{ background: "var(--tl-close)" }}
            aria-label="Close"
            onClick={() => closeApp(id)}
          />
          <button
            data-control
            className={styles.light}
            style={{ background: "var(--tl-min)" }}
            aria-label="Minimize"
            onClick={() => closeApp(id)}
          />
          <button
            data-control
            className={styles.light}
            style={{ background: "var(--tl-max)" }}
            aria-label="Maximize"
            onClick={() => toggleMax(id)}
          />
        </div>
        <div className={styles.title}>
          {meta.glyph} {meta.label}
        </div>
        {titleExtra ? <div className={styles.titleExtra}>{titleExtra}</div> : null}
      </div>
      <div className={styles.body}>{children}</div>
    </div>
  );
}
