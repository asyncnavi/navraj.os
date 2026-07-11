import { nowItems } from "@/content/portfolio";
import s from "./apps.module.css";

export default function NowApp() {
  return (
    <div className={s.term}>
      <div className={s.termInner}>
        <div className={s.termCmd}>$ now --status</div>
        <div className={s.termComment}>// what I&apos;m focused on right now</div>
        {nowItems.map((item, i) => (
          <div key={i}>→ {item}</div>
        ))}
        <div className={s.termDim}>last updated · this month</div>
        <div style={{ marginTop: 4 }}>
          $ <span className={s.caret} />
        </div>
      </div>
    </div>
  );
}
