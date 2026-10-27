import React, { useState, useEffect } from "react";
import styles from "./BiosScreen.module.css";

export default function BiosScreen() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 40); // Completa il caricamento in circa 4 secondi

    return () => clearInterval(interval);
  }, []);

  const handleOpenLinkedin = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open("https://www.linkedin.com/in/vincenzo-reina/", "_blank", "noreferrer");
  };

  return (
    <div className={styles.biosContainer}>
      <div className={styles.biosContent}>
        <div className={styles.header}>
          VINCENZO_XP BIOS v2.0 (C) 2001-2026, INC.
        </div>
        <div className={styles.divider}>--------------------------------------------------</div>

        <div className={styles.codeBlock}>
          *** SYSTEM HALTED: NEW CHAPTER DETECTED ***
        </div>

        <p className={styles.paragraph}>
          A problem has NOT occurred. The system has successfully executed its personal branding mission.
        </p>

        <p className={styles.paragraph}>
          The interactive portfolio experience is officially closing to make room for a new professional journey.
        </p>

        <div className={styles.sectionTitle}>
          [ SYSTEM STATUS & DIAGNOSTICS ]
        </div>
        
        <div className={styles.diagRow}>
          <span>JOB_HUNT_STATUS:</span> <span className={styles.success}>COMPLETED</span>
        </div>
        <div className={styles.diagRow}>
          <span>PREVIOUS_ROLE:</span> <span>OFFICIALLY_TERMINATED</span>
        </div>
        <div className={styles.diagRow}>
          <span>NEXT_CHALLENGE:</span> <span className={styles.highlight}>INITIALIZING_NEW_BRAND...</span>
        </div>

        <div className={styles.progressContainer}>
          <div className={styles.progressLabel}>
            Loading new adventure: {progress}%
          </div>
          <div className={styles.progressBar}>
            {"█".repeat(Math.floor(progress / 5))}
            <span className={styles.blinking}>_</span>
          </div>
        </div>

        <div className={styles.divider}>--------------------------------------------------</div>

        <div className={styles.actionBlock}>
          To follow the new adventure and discover the next role, connect on LinkedIn:
          <br />
          <a
            href="https://www.linkedin.com/in/vincenzo-reina/"
            onClick={handleOpenLinkedin}
            className={styles.biosLink}
          >
            &gt; PRESS HERE TO OPEN LINKEDIN PROFILE &lt;
          </a>
        </div>

        <div className={styles.footer}>
          Press ANY KEY to continue... (or just click the link above) <span className={styles.blinking}>_</span>
        </div>
      </div>
    </div>
  );
}
