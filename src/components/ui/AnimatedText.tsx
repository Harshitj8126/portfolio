"use client";

import { useEffect, useRef } from "react";
import { useInView } from "@/hooks/useInView";
import styles from "./AnimatedText.module.css";

interface AnimatedTextProps {
  children: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  className?: string;
  delay?: number;
  animation?: "words" | "lines" | "chars" | "fade";
  staggerDelay?: number;
}

export default function AnimatedText({
  children,
  as: Tag = "p",
  className = "",
  delay = 0,
  animation = "words",
  staggerDelay = 0.04,
}: AnimatedTextProps) {
  const [ref, inView] = useInView<HTMLElement>({ threshold: 0.2 });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (inView) hasAnimated.current = true;
  }, [inView]);

  const shouldAnimate = inView || hasAnimated.current;

  if (animation === "fade") {
    return (
      <Tag
        ref={ref as React.Ref<HTMLHeadingElement & HTMLParagraphElement & HTMLSpanElement>}
        className={`${styles.fadeContainer} ${shouldAnimate ? styles.visible : ""} ${className}`}
        style={{ transitionDelay: `${delay}s` }}
      >
        {children}
      </Tag>
    );
  }

  const units =
    animation === "chars"
      ? children.split("")
      : animation === "lines"
        ? children.split("\n")
        : children.split(" ");

  return (
    <Tag
      ref={ref as React.Ref<HTMLHeadingElement & HTMLParagraphElement & HTMLSpanElement>}
      className={`${styles.container} ${className}`}
      aria-label={children}
    >
      {units.map((unit, i) => (
        <span key={i} className={styles.wordWrap}>
          <span
            className={`${styles.word} ${shouldAnimate ? styles.visible : ""}`}
            style={{
              transitionDelay: `${delay + i * staggerDelay}s`,
            }}
            aria-hidden="true"
          >
            {unit}
            {animation === "words" && i < units.length - 1 ? "\u00A0" : ""}
          </span>
        </span>
      ))}
    </Tag>
  );
}
