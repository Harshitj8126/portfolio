"use client";

import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import { NAV_ITEMS } from "@/lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);
  const lastScrollY = typeof window !== "undefined" ? { current: 0 } : { current: 0 };

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 50);
      lastScrollY.current = currentY;

      // Detect active section
      const sections = NAV_ITEMS.map((item) => item.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 200) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      // Lenis integrates with window.scrollTo or scrollIntoView natively if set up, 
      // but native scrollIntoView can clash. 
      // It's safest to just let standard scroll jump or smooth scroll depending on CSS, 
      // or if Lenis is active, we can dispatch a custom event or just use scrollIntoView.
      el.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <nav
      className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}
    >
      <div className={styles.inner}>
        <a href="#hero" className={styles.logo} onClick={(e) => handleNavClick(e, "#hero")} aria-label="Home">
          {/* Logo removed as requested */}
        </a>

        {/* Desktop Nav */}
        <div className={styles.links}>
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`${styles.link} ${activeSection === item.href.replace("#", "") ? styles.active : ""}`}
              onClick={(e) => handleNavClick(e, item.href)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="/Resume/Harshit Jindal Resume.pdf"
            download="Harshit_Jindal_Resume.pdf"
            className={styles.resumeBtn}
          >
            RESUME
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className={styles.mobileMenu}>
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`${styles.mobileLink} ${activeSection === item.href.replace("#", "") ? styles.active : ""}`}
              onClick={(e) => handleNavClick(e, item.href)}
            >
              <span className={styles.mobileLinkNum}>0{item.chapter}</span>
              {item.label}
            </a>
          ))}
          <a
            href="/Resume/Harshit Jindal Resume.pdf"
            download="Harshit_Jindal_Resume.pdf"
            className={styles.resumeBtnMobile}
          >
            DOWNLOAD RESUME
          </a>
        </div>
      )}
    </nav>
  );
}
