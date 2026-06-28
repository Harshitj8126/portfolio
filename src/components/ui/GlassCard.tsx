"use client";

import { ReactNode } from "react";
import styles from "./GlassCard.module.css";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  glow?: "cyan" | "green" | "orange" | "none";
  hover?: boolean;
  padding?: "sm" | "md" | "lg" | "xl";
  onClick?: () => void;
}

export default function GlassCard({
  children,
  className = "",
  glow = "none",
  hover = true,
  padding = "lg",
  onClick,
}: GlassCardProps) {
  return (
    <div
      className={`${styles.card} ${styles[`glow-${glow}`]} ${styles[`pad-${padding}`]} ${hover ? styles.hoverable : ""} ${className}`}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {children}
    </div>
  );
}
