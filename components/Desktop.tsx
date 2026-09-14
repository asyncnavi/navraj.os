"use client";

import { useEffect } from "react";
import { useDesktop } from "@/lib/store";

import MenuBar from "./shell/MenuBar";
import DesktopIcons from "./shell/DesktopIcons";
import Dock from "./shell/Dock";
import BootScreen from "./shell/BootScreen";

import Window from "./window/Window";
import AboutApp from "./apps/AboutApp";
import ProjectsApp from "./apps/ProjectsApp";
import BlogApp from "./apps/BlogApp";
import ResumeApp from "./apps/ResumeApp";
import NowApp from "./apps/NowApp";
import ContactApp from "./apps/ContactApp";

import { resumePdf } from "@/content/portfolio";
import styles from "./Desktop.module.css";

export default function Desktop() {
  const openApp = useDesktop((s) => s.openApp);

  // Open About by default on desktop; on mobile the launcher grid stays.
  // Read the real width at mount — the useIsMobile hook is still false on
  // first render, so relying on it here would wrongly auto-open on phones.
  useEffect(() => {
    if (window.innerWidth > 860) openApp("about");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.root}>
      <MenuBar />
      <DesktopIcons />

      <Window id="about">
        <AboutApp />
      </Window>
      <Window id="projects">
        <ProjectsApp />
      </Window>
      <Window id="blog">
        <BlogApp />
      </Window>
      <Window
        id="resume"
        titleExtra={
          <a className={styles.download} href={resumePdf} download>
            ↓ Download
          </a>
        }
      >
        <ResumeApp />
      </Window>
      <Window id="now">
        <NowApp />
      </Window>
      <Window id="contact">
        <ContactApp />
      </Window>

      <Dock />
      <BootScreen />
    </div>
  );
}
