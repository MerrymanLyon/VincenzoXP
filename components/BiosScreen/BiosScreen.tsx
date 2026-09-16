import React, { useEffect } from "react";
import styles from "./BiosScreen.module.css";

interface BiosScreenProps {
  onComplete: () => void;
  durationMs?: number;
}

const BiosScreen: React.FC<BiosScreenProps> = ({
  onComplete,
  durationMs = 4000,
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, durationMs);

    return () => clearTimeout(timer);
  }, [durationMs, onComplete]);

  return (
    <div className={styles.biosContainer}>
      <div className={styles.biosContent}>
        <div className={styles.title}>*** SYSTEM WARNING ***</div>

        <div className={styles.message}>
          A problem has been detected and the OS desktop interface is trying to optimize for your current mobile screen.
        </div>

        <div className={styles.message}>
          For the best experience on mobile, please <strong>ROTATE YOUR DEVICE HORIZONTALLY</strong> (Landscape mode).
        </div>

        <div className={styles.message}>
          For the absolute ideal experience, we strongly recommend accessing this site from an actual desktop computer.
        </div>

        <div className={styles.sarcasm}>
          (Yes, one of those physical machines with a keyboard, mouse, or trackpad.)
        </div>

        <div className={styles.statusRow}>
          Switching to Full Desktop environment... <span className={styles.blinking}>_</span>
        </div>
      </div>
    </div>
  );
};

export default BiosScreen;
