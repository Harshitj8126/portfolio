"use client";

import styles from "./ScrollIndicator.module.css";

interface ScrollIndicatorProps {
  targetId?: string;
}

export default function ScrollIndicator({ targetId = "about" }: ScrollIndicatorProps) {
  const handleClick = () => {
    const el = document.getElementById(targetId);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button className={styles.indicator} onClick={handleClick} aria-label="Scroll to next section">
      <div className={styles.line} />
      <span className={styles.text}>SCROLL</span>
      <div className={styles.arrow}>
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M6 0v10M1 6l5 5 5-5" stroke="currentColor" strokeWidth="1.2" />
        </svg>
      </div>
    </button>
  );
}
