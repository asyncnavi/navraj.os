import s from "./apps.module.css";

const SLOTS = ["IMG_01", "IMG_02", "IMG_03", "IMG_04", "IMG_05", "IMG_06"];

export default function PhotosApp() {
  return (
    <div style={{ padding: 22 }}>
      <div className={s.photoGrid}>
        {SLOTS.map((name) => (
          <div key={name} className={s.photo}>
            {name}
          </div>
        ))}
      </div>
      <div className={s.photoNote}>
        drop your own photos in here — travel, setup, events, whatever tells
        your story.
      </div>
    </div>
  );
}
