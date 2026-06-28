"use client";

import { useRef, useCallback, ReactNode } from "react";
import styles from "./MagneticButton.module.css";

interface MagneticButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  href?: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

export default function MagneticButton({
  children,
  variant = "primary",
  href,
  onClick,
  className = "",
  disabled = false,
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLElement>(null);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!buttonRef.current || disabled) return;
      const rect = buttonRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      buttonRef.current.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
    },
    [disabled]
  );

  const handleMouseLeave = useCallback(() => {
    if (!buttonRef.current) return;
    buttonRef.current.style.transform = "translate(0, 0)";
  }, []);

  const Tag = href ? "a" : "button";
  const linkProps = href
    ? { href, target: href.startsWith("http") ? "_blank" : undefined, rel: href.startsWith("http") ? "noopener noreferrer" : undefined }
    : {};

  return (
    <Tag
      ref={buttonRef as React.Ref<HTMLAnchorElement & HTMLButtonElement>}
      className={`${styles.button} ${styles[variant]} ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      disabled={disabled && !href}
      {...linkProps}
    >
      <span className={styles.content}>{children}</span>
      <span className={styles.glow} />
    </Tag>
  );
}
