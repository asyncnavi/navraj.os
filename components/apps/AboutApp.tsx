import Image from "next/image";
import { aboutParagraphs, profile } from "@/content/portfolio";
import s from "./apps.module.css";

export default function AboutApp() {
  return (
    <div className={s.pad}>
      <div className={s.aboutHead}>
        <Image
          className={s.avatar}
          src="/navraj-profile.png"
          alt="Navraj"
          width={92}
          height={92}
          sizes="92px"
          style={{ objectFit: "cover", objectPosition: "50% 30%" }}
        />
        <div>
          <div className={s.name}>{profile.name}</div>
          <div className={s.roleLine}>{profile.role}</div>
          <div className={s.tagline}>{profile.tagline}</div>
        </div>
      </div>

      {aboutParagraphs.map((p, i) => (
        <p key={i} className={s.para}>
          {p}
        </p>
      ))}

      <div className={s.btnRow}>
        <a
          className={s.btnDark}
          href={profile.github}
          target="_blank"
          rel="noreferrer"
        >
          GitHub ↗
        </a>
        <a
          className={s.btnLight}
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn ↗
        </a>
        <a className={s.btnLight} href={`mailto:${profile.email}`}>
          Email ↗
        </a>
      </div>
    </div>
  );
}
