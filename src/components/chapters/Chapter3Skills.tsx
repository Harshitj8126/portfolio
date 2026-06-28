"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Chapter3Skills.module.css";
import AnimatedText from "@/components/ui/AnimatedText";
import { useInView } from "@/hooks/useInView";
import { TECH_STACK } from "@/lib/constants";
import { 
  SiPython, SiReact, SiTailwindcss, SiFastapi, SiPostgresql, SiRedis, SiDocker,
  SiJavascript, SiTypescript, SiCplusplus, SiC, SiFramer, SiGreensock, SiThreedotjs,
  SiNodedotjs, SiDjango, SiNextdotjs
} from "react-icons/si";
import { FaJava, FaDatabase, FaBrain, FaRobot, FaPaintBrush, FaNetworkWired, FaProjectDiagram } from "react-icons/fa";

const CATEGORIES = ["AI/ML", "Programming", "Backend & APIs", "Frontend"];

const getIcon = (name: string) => {
  switch (name) {
    case "Python": return <SiPython className={styles.techIcon} color="#3776AB" />;
    case "Java": return <FaJava className={styles.techIcon} color="#007396" />;
    case "C": return <SiC className={styles.techIcon} color="#A8B9CC" />;
    case "C++": return <SiCplusplus className={styles.techIcon} color="#00599C" />;
    case "SQL": return <FaDatabase className={styles.techIcon} color="#4479A1" />;
    case "JavaScript": return <SiJavascript className={styles.techIcon} color="#F7DF1E" />;
    case "TypeScript": return <SiTypescript className={styles.techIcon} color="#3178C6" />;
    case "React": return <SiReact className={styles.techIcon} color="#61DAFB" />;
    case "Next.js": return <SiNextdotjs className={styles.techIcon} color="#FFFFFF" />;
    case "Tailwind CSS": return <SiTailwindcss className={styles.techIcon} color="#06B6D4" />;
    case "Framer Motion": return <SiFramer className={styles.techIcon} color="#0055FF" />;
    case "GSAP": return <SiGreensock className={styles.techIcon} color="#88CE02" />;
    case "Three.js": return <SiThreedotjs className={styles.techIcon} color="#FFFFFF" />;
    case "UI/UX Design": return <FaPaintBrush className={styles.techIcon} color="#FF61F6" />;
    case "FastAPI": return <SiFastapi className={styles.techIcon} color="#009688" />;
    case "REST APIs": return <FaNetworkWired className={styles.techIcon} color="#00E5FF" />;
    case "Django & Flask": return <SiDjango className={styles.techIcon} color="#092E20" />;
    case "Node.js": return <SiNodedotjs className={styles.techIcon} color="#339933" />;
    case "PostgreSQL": return <SiPostgresql className={styles.techIcon} color="#4169E1" />;
    case "Redis": return <SiRedis className={styles.techIcon} color="#DC382D" />;
    case "Docker": return <SiDocker className={styles.techIcon} color="#2496ED" />;
    case "Machine Learning": return <FaBrain className={styles.techIcon} color="#FF4B4B" />;
    case "Deep Learning": return <FaBrain className={styles.techIcon} color="#FF4B4B" />;
    case "Gen AI & Claude": return <FaRobot className={styles.techIcon} color="#A259FF" />;
    case "Agents": return <FaRobot className={styles.techIcon} color="#FF9900" />;
    case "RAG Systems": return <FaDatabase className={styles.techIcon} color="#00E5FF" />;
    case "LangChain & LangGraph": return <FaProjectDiagram className={styles.techIcon} color="#1C3C3C" />;
    default: return <FaRobot className={styles.techIcon} color="#00E5FF" />;
  }
};

export default function Chapter3Skills() {
  const [ref, inView] = useInView<HTMLElement>({ threshold: 0.02 });
  const [activeCategory, setActiveCategory] = useState("Programming");
  const [isClustered, setIsClustered] = useState(true);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (inView) {
      setIsClustered(true);
      const timer = setTimeout(() => setIsClustered(false), 2200);
      return () => clearTimeout(timer);
    } else {
      setIsClustered(true);
    }
  }, [inView, activeCategory]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const filteredStack = TECH_STACK.filter(
    (tech) => tech.category === activeCategory
  );

  // Pre-generate deterministic particles
  const particles = Array.from({ length: 30 }).map((_, i) => ({
    id: i,
    size: (i % 3) * 2 + 2,
    x: (i * 7) % 100,
    delay: (i % 5) * 1.5,
    duration: 10 + (i % 10),
  }));

  return (
    <section 
      id="skills" 
      ref={ref} 
      className={styles.section}
      onMouseMove={handleMouseMove}
      style={{ '--mouse-x': `${mousePos.x}px`, '--mouse-y': `${mousePos.y}px` } as React.CSSProperties}
    >
      {/* 1. Mouse Spotlight */}
      <div className={styles.mouseSpotlight} />

      {/* 2. Cyber Holodeck Grid */}
      <div className={styles.holodeckGrid} />

      {/* 3. Floating Particles */}
      <div className={styles.particlesContainer}>
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className={styles.particle}
            style={{ width: p.size, height: p.size, left: `${p.x}%` }}
            animate={{
              y: ["110vh", "-10vh"],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: "linear",
              delay: p.delay,
            }}
          />
        ))}
      </div>

      <div className={styles.container}>
        {/* Chapter Label */}
        <div className={`${styles.chapterLabel} ${inView ? styles.visible : ""}`}>
          <span className={styles.chapterNum}>03</span>
          <span className={styles.chapterLine} />
          <span className={styles.chapterTitle}>SKILLS</span>
        </div>

        <AnimatedText as="h2" className={styles.heading} animation="words" delay={0.2}>
          Technology Arsenal
        </AnimatedText>

        {/* Filter Buttons */}
        <div 
          className={`${styles.filters} ${inView ? styles.visible : ""}`}
          style={{ position: "relative", zIndex: 10, display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "32px", opacity: inView ? 1 : 0, transition: "opacity 0.5s ease 0.4s" }}
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`${styles.filterBtn} ${activeCategory === cat ? styles.filterBtnActive : ""}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Tech Stack */}
        <div className={styles.techSection}>
          <motion.div layout className={styles.techGrid}>
            <AnimatePresence mode="popLayout">
              {filteredStack.map((tech, i) => {
                return (
                <motion.div
                  layout
                  initial={{ 
                    opacity: 0, 
                    scale: 0.5, 
                    y: -500, 
                    x: 0, 
                    rotateZ: (i % 2 === 0 ? 45 : -45),
                    rotateX: 90 
                  }}
                  animate={inView ? { 
                    opacity: 1, 
                    scale: 1, 
                    y: isClustered ? Math.sin(i) * 40 : 0, 
                    x: isClustered ? Math.cos(i) * 40 : 0, 
                    rotateZ: isClustered ? (i % 2 === 0 ? 15 : -15) * (i % 3) : 0,
                    rotateX: 0 
                  } : {}}
                  exit={{ opacity: 0, scale: 0.5, y: 50 }}
                  whileHover={{ 
                    scale: 1.05, 
                    rotateX: 10, 
                    rotateY: -10, 
                    z: 50,
                    transition: { duration: 0.3, type: "spring", bounce: 0.4 } 
                  }}
                  transition={{ 
                    duration: isClustered ? 1.5 : 1.5, 
                    type: "spring", 
                    bounce: isClustered ? 0.7 : 0.5,
                    damping: isClustered ? 8 : 12,
                    delay: isClustered ? i * 0.05 : i * 0.05
                  }}
                  key={tech.name}
                  className={`${styles.techItem} ${isClustered ? styles.clusteredItem : ""}`}
                >
                  <div className={styles.techBadge}>
                    <div className={styles.iconWrapper}>
                      {getIcon(tech.name)}
                    </div>
                    <span className={styles.techName}>{tech.name}</span>
                  </div>
                </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
