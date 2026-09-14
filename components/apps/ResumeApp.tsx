import {
  education,
  experience,
  profile,
  skills,
} from "@/content/portfolio";
import s from "./apps.module.css";

export default function ResumeApp() {
  return (
    <div style={{ padding: "28px 30px 32px" }}>
      <div className={s.resumeHead}>
        <div className={s.resumeName}>{profile.name}</div>
        <div className={s.resumeSub}>{profile.role}</div>
      </div>

      <div className={s.sectionLabel}>Experience</div>
      <div className={s.expList}>
        {experience.map((e) => (
          <div key={e.title} className={s.expItem}>
            <div className={s.expDotCol}>
              <span className={s.expDot} style={{ background: e.dot }} />
            </div>
            <div>
              <div className={s.expTitle}>{e.title}</div>
              <div className={s.expMeta}>{e.meta}</div>
              <div className={s.expBody}>{e.body}</div>
            </div>
          </div>
        ))}
      </div>

      <div className={s.twoCol}>
        <div>
          <div className={s.sectionLabel}>Skills</div>
          <div className={s.skillRow}>
            {skills.map((sk) => (
              <span key={sk} className={s.skill}>
                {sk}
              </span>
            ))}
          </div>
        </div>
        <div>
          <div className={s.sectionLabel}>Education</div>
          <div className={s.eduTitle}>{education.title}</div>
          <div className={s.eduBody}>{education.body}</div>
        </div>
      </div>
    </div>
  );
}
