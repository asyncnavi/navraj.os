import { projects } from "@/content/portfolio";
import s from "./apps.module.css";

export default function ProjectsApp() {
  return (
    <div style={{ padding: 24 }}>
      <div
        style={{
          fontFamily: "var(--font-mono), monospace",
          fontWeight: 700,
          color: "var(--accent)",
          marginBottom: 16,
        }}
      >
        Adding soon
      </div>
      <div className={s.projGrid}>
        {projects.map((p) => (
          <div key={p.title} className={s.projCard}>
            <div className={s.projShot}>screenshot</div>
            <div className={s.projBody}>
              <div className={s.projTitle}>{p.title}</div>
              <div className={s.projDesc}>{p.description}</div>
              <div className={s.tagRow}>
                {p.tags.map((t) => (
                  <span key={t} className={s.tag}>
                    {t}
                  </span>
                ))}
              </div>
              <div className={s.projLinks}>
                {p.github && (
                  <a
                    className={s.linkDark}
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub ↗
                  </a>
                )}
                {p.demo && (
                  <a className={s.linkLight} href={p.demo}>
                    Live demo ↗
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
