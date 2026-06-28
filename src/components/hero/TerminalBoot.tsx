"use client";

import { useState, useEffect, useRef } from "react";
import styles from "./TerminalBoot.module.css";
import { BOOT_SEQUENCE } from "@/lib/constants";

interface TerminalBootProps {
  onComplete?: () => void;
}

export default function TerminalBoot({ onComplete }: TerminalBootProps) {
  const [visibleLines, setVisibleLines] = useState<number>(0);
  const [currentText, setCurrentText] = useState<string[]>([]);
  const completedRef = useRef(false);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];

    BOOT_SEQUENCE.forEach((line, index) => {
      const timer = setTimeout(() => {
        setVisibleLines(index + 1);

        // Type out each line character by character
        let charIndex = 0;
        const typeInterval = setInterval(() => {
          charIndex++;
          setCurrentText((prev) => {
            const newTexts = [...prev];
            newTexts[index] = line.text.substring(0, charIndex);
            return newTexts;
          });

          if (charIndex >= line.text.length) {
            clearInterval(typeInterval);

            // If last line, trigger complete
            if (index === BOOT_SEQUENCE.length - 1 && !completedRef.current) {
              completedRef.current = true;
              setTimeout(() => onComplete?.(), 800);
            }
          }
        }, 25);

        timers.push(typeInterval as unknown as ReturnType<typeof setTimeout>);
      }, line.delay);

      timers.push(timer);
    });

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <div className={styles.terminal}>
      <div className={styles.lines}>
        {BOOT_SEQUENCE.slice(0, visibleLines).map((line, i) => (
          <div
            key={i}
            className={`${styles.line} ${i === BOOT_SEQUENCE.length - 1 ? styles.welcome : ""}`}
          >
            {i < BOOT_SEQUENCE.length - 1 && (
              <span className={styles.prefix}>▸</span>
            )}
            <span className={styles.text}>
              {currentText[i] || ""}
            </span>
            {i === visibleLines - 1 && (
              <span className={styles.cursor}>▋</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
