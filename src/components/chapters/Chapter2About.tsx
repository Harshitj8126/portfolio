"use client";

import Image from "next/image";
import styles from "./Chapter2About.module.css";
import AnimatedText from "@/components/ui/AnimatedText";
import GlassCard from "@/components/ui/GlassCard";
import { useInView } from "@/hooks/useInView";

const EDUCATION = [
  {
    year: "2024 — 2028",
    title: "B.Tech Computer Science",
    institution: "Vivekananda Institute of Professional Studies",
    score: "8.3/10 CGPA",
    color: "cyan",
  },
  {
    year: "2023 — 2024",
    title: "Class 12th High School Education",
    institution: "CBSE Board",
    score: "80%",
    color: "orange",
  },
  {
    year: "2021 — 2022",
    title: "Class 10th Secondary Education",
    institution: "CBSE Board",
    score: "90%",
    color: "green",
  },
];

export default function Chapter2About() {
  const [ref, inView] = useInView<HTMLElement>({ threshold: 0.02 });

  return (
    <section id="about" ref={ref} className={styles.section}>
      <div className={styles.ambientOrb} />

      <div className={styles.container}>
        {/* Chapter Label */}
        <div className={`${styles.chapterLabel} ${inView ? styles.visible : ""}`}>
          <span className={styles.chapterNum}>02</span>
          <span className={styles.chapterLine} />
          <span className={styles.chapterTitle}>MEET HARSHIT</span>
        </div>

        <div className={styles.grid}>
          {/* Left Column: Image & Bio */}
          <div className={styles.leftCol}>
            <div className={`${styles.imageWrapper} ${inView ? styles.imageVisible : ""}`}>
              <Image 
                src="/images/harshit-boat.jpg"
                alt="Harshit Jindal"
                width={500}
                height={500}
                className={styles.profileImage}
                priority
              />
              <div className={styles.imageGlow} />
            </div>

            <div className={styles.bio}>
              <AnimatedText as="h2" className={styles.heading} animation="words" delay={0.2}>
                Building The Future With AI
              </AnimatedText>
              <div className={`${styles.bioText} ${inView ? styles.textVisible : ""}`}>
                <p>
                  I'm <strong>Harshit Jindal</strong>, an AI Engineer focused on building the next generation of intelligent software. 
                </p>
                <p>
                  My work spans <strong>LLMs, RAG systems, AI Agents, Machine Learning, LangChain, LangGraph, scalable backend engineering, workflow automation, and immersive cinematic web experiences</strong>—creating products that seamlessly blend innovation, performance, and exceptional user experience.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Education Timeline */}
          <div className={styles.rightCol}>
            <h3 className={`${styles.timelineHeading} ${inView ? styles.visible : ""}`}>
              Education
            </h3>
            
            <div className={styles.timeline}>
              <div className={styles.timelineLine} />
              
              {EDUCATION.map((edu, i) => (
                <div 
                  key={edu.year} 
                  className={`${styles.timelineItem} ${inView ? styles.itemVisible : ""}`}
                  style={{ transitionDelay: `${0.6 + i * 0.2}s` }}
                >
                  <div className={styles.nodeWrapper}>
                    <div className={styles.nodeGlow} data-color={edu.color} />
                    <div className={styles.node} />
                  </div>
                  
                  <GlassCard glow={edu.color as any} padding="md" className={styles.eduCard}>
                    <div className={styles.eduYear}>{edu.year}</div>
                    <h4 className={styles.eduTitle}>{edu.title}</h4>
                    <p className={styles.eduInstitution}>{edu.institution}</p>
                    <div className={styles.eduScore}>
                      <span className={styles.scoreHighlight}>Score:</span> {edu.score}
                    </div>
                  </GlassCard>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
