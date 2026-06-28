"use client";

import { motion } from "framer-motion";
import styles from "./Chapter4Projects.module.css";
import AnimatedText from "@/components/ui/AnimatedText";
import { useInView } from "@/hooks/useInView";
import { PROJECTS } from "@/lib/constants";

export default function Chapter4Projects() {
  const [ref, inView] = useInView<HTMLElement>({ threshold: 0.02 });

  return (
    <section id="projects" ref={ref} className={styles.section}>
      <div className={styles.ambientOrb} />

      <div className={styles.container}>
        {/* Chapter Label */}
        <div className={`${styles.chapterLabel} ${inView ? styles.visible : ""}`}>
          <span className={styles.chapterNum}>04</span>
          <span className={styles.chapterLine} />
          <span className={styles.chapterTitle}>PROJECT SHOWCASE</span>
        </div>

        <AnimatedText as="h2" className={styles.heading} animation="words" delay={0.2}>
          Systems That Solve Real Problems
        </AnimatedText>

        {/* Project Grid */}
        <div className={styles.grid}>
          {PROJECTS.map((project, i) => (
            <div
              key={project.id}
              className={`${styles.cardWrapper} ${inView ? styles.visible : ""}`}
              style={{ transitionDelay: `${0.4 + i * 0.12}s` }}
            >
              <motion.div
                className={styles.card}
                style={{ ["--project-color" as string]: project.color }}
                animate={{
                  y: [0, -10, 0],
                  rotateX: [0, 2, -1, 0],
                  rotateY: [0, -2, 1, 0],
                }}
                transition={{
                  duration: 6 + (i % 3),
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.2
                }}
                whileHover={{
                  scale: 1.05,
                  rotateX: 6,
                  rotateY: -6,
                  y: -10,
                  transition: { type: "spring", bounce: 0.5 }
                }}
              >
                {/* Top Cover */}
                <div className={styles.cover}>
                  <span className={styles.emoji}>
                    {"emoji" in project ? (project as any).emoji : "✨"}
                  </span>

                  <div className={styles.coverTags}>
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span key={tech} className={styles.techPill}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Details */}
                <div className={styles.details}>
                  <h3 className={styles.title}>{project.title}</h3>
                  <p className={styles.description}>{project.description}</p>

                  {"highlightTags" in project && (
                    <div className={styles.highlightTags}>
                      {((project as any).highlightTags as string[]).map((tag) => (
                        <span key={tag} className={styles.highlightTag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className={styles.actions}>
                    {("live" in project && (project as any).live !== "#") && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.btnLive}
                        data-lenis-prevent="true"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          window.open(project.live, '_blank');
                        }}
                      >
                        Live Demo ↗
                      </a>
                    )}
                    {("github" in project && (project as any).github !== "#") && (
                      <a
                        href={(project as any).github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.btnGithub}
                        data-lenis-prevent="true"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          window.open((project as any).github, '_blank');
                        }}
                      >
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
