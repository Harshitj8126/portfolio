"use client";

import styles from "./Chapter5Experience.module.css";
import AnimatedText from "@/components/ui/AnimatedText";
import GlassCard from "@/components/ui/GlassCard";
import { useInView } from "@/hooks/useInView";
import { JOURNEY } from "@/lib/constants";

export default function Chapter5Experience() {
  const [ref, inView] = useInView<HTMLElement>({ threshold: 0.02 });

  return (
    <section id="experience" ref={ref} className={styles.section}>
      <div className={styles.ambientOrb} />

      <div className={styles.container}>
        {/* Chapter Label */}
        <div className={`${styles.chapterLabel} ${inView ? styles.visible : ""}`}>
          <span className={styles.chapterNum}>05</span>
          <span className={styles.chapterLine} />
          <span className={styles.chapterTitle}>PROFESSIONAL EXPERIENCE</span>
        </div>

        <AnimatedText as="h2" className={styles.heading} animation="words" delay={0.2}>
          Engineering Excellence In Practice
        </AnimatedText>

        {/* Timeline */}
        <div className={styles.timeline}>
          {/* Vertical line */}
          <div className={`${styles.timelineLine} ${inView ? styles.lineGrow : ""}`} />

          {JOURNEY.map((era, eraIndex) => (
            <div
              key={era.year}
              className={`${styles.era} ${inView ? styles.visible : ""}`}
              style={{ transitionDelay: `${0.5 + eraIndex * 0.3}s` }}
            >
              {/* Year marker */}
              <div className={styles.yearMarker}>
                <div className={styles.yearDot} />
                <span className={styles.year}>{era.year}</span>
                <span className={styles.eraTitle}>{era.title}</span>
              </div>

              {/* Milestones */}
              <div className={styles.milestones}>
                {era.milestones.map((milestone, mIndex) => (
                  <div
                    key={milestone.title}
                    className={`${styles.milestone} ${inView ? styles.visible : ""}`}
                    style={{ transitionDelay: `${0.7 + eraIndex * 0.3 + mIndex * 0.15}s` }}
                  >
                    <GlassCard padding="md" hover>
                      <h4 className={styles.milestoneTitle}>
                        {milestone.title}
                      </h4>
                      <p className={styles.milestoneDesc}>{milestone.description}</p>
                      <div className={styles.techTags}>
                        {milestone.technologies.map((tech) => (
                          <span key={tech} className={styles.techTag}>
                            {tech}
                          </span>
                        ))}
                      </div>
                    </GlassCard>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
