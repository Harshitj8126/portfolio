"use client";

import { useState } from "react";
import styles from "./Chapter1Hero.module.css";
import VideoPlayer from "@/components/hero/VideoPlayer";
import TerminalBoot from "@/components/hero/TerminalBoot";
import ScrollIndicator from "@/components/hero/ScrollIndicator";
import { HERO } from "@/lib/constants";

export default function Chapter1Hero() {
  const [bootComplete, setBootComplete] = useState(false);
  const [experienceStarted, setExperienceStarted] = useState(false);

  const startExperience = () => {
    setExperienceStarted(true);
    // This will trigger the video player to unmute and play guaranteed
    window.dispatchEvent(new Event('start-experience'));
  };

  return (
    <section id="hero" className={styles.hero}>
      {/* Full Screen Video Background */}
      <div className={`${styles.videoBackground} ${bootComplete ? styles.videoVisible : ""}`}>
        <VideoPlayer />
      </div>

      <div className={styles.content}>
        {/* Terminal Boot Sequence */}
        <div className={`${styles.terminal} ${bootComplete ? styles.terminalDone : ""}`}>
          <TerminalBoot onComplete={() => setBootComplete(true)} />
        </div>

        {/* Hero Content — appears centered after boot */}
        <div className={`${styles.heroContent} ${bootComplete ? styles.heroVisible : ""}`}>
          
          {/* Top Label */}
          <span className={styles.topLabel}>PORTFOLIO {new Date().getFullYear()}</span>

          {/* Main Centered Name */}
          <h1 className={styles.mainName}>
            <span>{HERO.firstName}</span>
            <br />
            <span>{HERO.lastName}</span>
          </h1>

          {/* Start Button */}
          {!experienceStarted && (
            <button className={styles.startBtn} onClick={startExperience}>
              START
            </button>
          )}

          {/* Bottom Tagline */}
          <div className={styles.bottomTagline}>
            {HERO.tagline}
          </div>

        </div>
      </div>

      <div className={styles.scrollWrapper}>
        <ScrollIndicator targetId="about" />
      </div>
    </section>
  );
}
