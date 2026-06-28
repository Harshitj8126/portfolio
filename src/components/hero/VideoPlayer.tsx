"use client";

import { useRef, useEffect, useState } from "react";
import styles from "./VideoPlayer.module.css";
import { FaPlay, FaPause, FaVolumeHigh, FaVolumeXmark } from "react-icons/fa6";

export default function VideoPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  
  // Track if the user explicitly clicked pause, so we don't auto-resume if they did
  const userPaused = useRef(false);

  // Handle the start experience event
  useEffect(() => {
    const handleStartExperience = () => {
      setHasStarted(true);
      userPaused.current = false;
      if (videoRef.current) {
        videoRef.current.muted = false;
        videoRef.current.play().catch(e => console.error("Play failed", e));
        setIsMuted(false);
        setIsPlaying(true);
      }
    };

    window.addEventListener('start-experience', handleStartExperience);
    return () => window.removeEventListener('start-experience', handleStartExperience);
  }, []);

  // Handle auto-pause when scrolling out of view
  useEffect(() => {
    if (!videoRef.current) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          // Video is out of view -> Pause it automatically
          if (videoRef.current && !videoRef.current.paused) {
            videoRef.current.pause();
            setIsPlaying(false);
          }
        } else {
          // Video is back in view -> Resume playing ONLY if it was started and not manually paused
          if (hasStarted && videoRef.current && !userPaused.current) {
            videoRef.current.play().catch(e => console.error("Auto-resume failed", e));
            setIsPlaying(true);
          }
        }
      });
    }, { threshold: 0.1 });

    observer.observe(videoRef.current);
    return () => observer.disconnect();
  }, [hasStarted]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
      userPaused.current = false;
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
      userPaused.current = true; // Mark that the user explicitly paused it
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const handleVideoEnded = () => {
    // When video finishes, automatically scroll to the next section
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={styles.wrapper}>
      {/* Foreground video */}
      <div className={styles.videoContainer}>
        <video
          ref={videoRef}
          className={styles.video}
          playsInline
          onEnded={handleVideoEnded}
        >
          <source src="/videos/hero-intro.mov" type="video/mp4" />
        </video>
      </div>

      {/* Controls (Only visible after START is clicked) */}
      {hasStarted && (
        <div className={styles.controls}>
          <button className={styles.controlBtn} onClick={togglePlay} aria-label={isPlaying ? "Pause" : "Play"}>
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>
          <button className={styles.controlBtn} onClick={toggleMute} aria-label={isMuted ? "Unmute" : "Mute"}>
            {isMuted ? <FaVolumeXmark /> : <FaVolumeHigh />}
          </button>
        </div>
      )}
    </div>
  );
}
