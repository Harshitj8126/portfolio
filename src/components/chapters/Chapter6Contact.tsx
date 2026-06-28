"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import styles from "./Chapter6Contact.module.css";
import AnimatedText from "@/components/ui/AnimatedText";
import MagneticButton from "@/components/ui/MagneticButton";
import { useInView } from "@/hooks/useInView";
import { SOCIALS } from "@/lib/constants";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPaperPlane, FaInstagram } from "react-icons/fa6";

const socialIcons: Record<string, React.ReactNode> = {
  github: <FaGithub />,
  linkedin: <FaLinkedin />,
  twitter: <FaTwitter />,
  email: <FaEnvelope />,
  instagram: <FaInstagram />,
};

export default function Chapter6Contact() {
  const [ref, inView] = useInView<HTMLElement>({ threshold: 0.02 });
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    
    // Pure frontend fallback: Use mailto to open the user's default email client
    const subject = encodeURIComponent(`New Contact from ${formState.name}`);
    const body = encodeURIComponent(`Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`);
    
    window.location.href = `mailto:harshitjindal0203@gmail.com?subject=${subject}&body=${body}`;
    
    setSending(false);
    setFormState({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" ref={ref} className={styles.section}>
      <div className={styles.ambientOrb} />
      <div className={styles.ambientOrb2} />

      <div className={styles.container}>
        {/* Chapter Label */}
        <div className={`${styles.chapterLabel} ${inView ? styles.visible : ""}`}>
          <span className={styles.chapterNum}>06</span>
          <span className={styles.chapterLine} />
          <span className={styles.chapterTitle}>CONTACT</span>
        </div>

        <div className={styles.header}>
          <AnimatedText as="h2" className={styles.heading} animation="words" delay={0.2}>
            Let&apos;s Create Something Extraordinary
          </AnimatedText>
          <AnimatedText as="p" className={styles.subheading} animation="fade" delay={0.6}>
            Have a project in mind? Let&apos;s talk about building intelligent systems together.
          </AnimatedText>
        </div>

        <div className={styles.content}>
          {/* Contact Form */}
          <form
            className={`${styles.form} ${inView ? styles.visible : ""}`}
            onSubmit={handleSubmit}
          >
            <div className={styles.formGroup}>
              <label htmlFor="contact-name" className={styles.label}>NAME</label>
              <input
                id="contact-name"
                type="text"
                className={styles.input}
                placeholder="Your name"
                value={formState.name}
                onChange={(e) => setFormState((s) => ({ ...s, name: e.target.value }))}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="contact-email" className={styles.label}>EMAIL</label>
              <input
                id="contact-email"
                type="email"
                className={styles.input}
                placeholder="your@email.com"
                value={formState.email}
                onChange={(e) => setFormState((s) => ({ ...s, email: e.target.value }))}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="contact-message" className={styles.label}>MESSAGE</label>
              <textarea
                id="contact-message"
                className={styles.textarea}
                placeholder="Tell me about your project..."
                rows={5}
                value={formState.message}
                onChange={(e) => setFormState((s) => ({ ...s, message: e.target.value }))}
                required
              />
            </div>
            <MagneticButton variant="primary" onClick={() => {}} className={styles.submitBtn}>
              {sending ? "Sending..." : "Send Message"}
            </MagneticButton>
          </form>

          {/* Socials */}
          <div className={`${styles.socials} ${inView ? styles.visible : ""}`}>
            <p className={styles.socialsLabel}>FIND ME ON</p>
            <div className={styles.socialLinks}>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.6 }} style={{ position: "relative", zIndex: 100 }}>
                  <a href="https://github.com/Harshitj8126" target="_blank" rel="noopener noreferrer" className={styles.socialLink} style={{ cursor: 'pointer', pointerEvents: 'auto', display: 'flex', width: '100%' }}>
                    <FaGithub />
                    <span>GitHub</span>
                  </a>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.7 }} style={{ position: "relative", zIndex: 100 }}>
                  <a href="https://www.linkedin.com/in/harshitjindal-ai/" target="_blank" rel="noopener noreferrer" className={styles.socialLink} style={{ cursor: 'pointer', pointerEvents: 'auto', display: 'flex', width: '100%' }}>
                    <FaLinkedin />
                    <span>LinkedIn</span>
                  </a>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.8 }} style={{ position: "relative", zIndex: 100 }}>
                  <a href="https://www.instagram.com/harshit.8126/" target="_blank" rel="noopener noreferrer" className={styles.socialLink} style={{ cursor: 'pointer', pointerEvents: 'auto', display: 'flex', width: '100%' }}>
                    <FaInstagram />
                    <span>Instagram</span>
                  </a>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.9 }} style={{ position: "relative", zIndex: 100 }}>
                  <a href="mailto:harshitjindal0203@gmail.com" className={styles.socialLink} style={{ cursor: 'pointer', pointerEvents: 'auto', display: 'flex', width: '100%' }}>
                    <FaEnvelope />
                    <span>Email</span>
                  </a>
                </motion.div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className={`${styles.footer} ${inView ? styles.visible : ""}`}>
          <p>Designed and Developed by <span className={styles.footerName}>Harshit Jindal</span></p>
          <p className={styles.footerYear}>© {new Date().getFullYear()}</p>
        </footer>
      </div>
    </section>
  );
}
