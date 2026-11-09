import React, { useEffect } from "react";
import styles from "./RotateScreen.module.css";

interface RotateScreenProps {
  onComplete: () => void;
  onBackToPocketPC: () => void;
  durationMs?: number;
}

const RotateScreen: React.FC<RotateScreenProps> = ({
  onComplete,
  onBackToPocketPC,
  durationMs = 10000,
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, durationMs);

    return () => clearTimeout(timer);
  }, [durationMs, onComplete]);

  const handleReturnToPocketPC = (e: React.MouseEvent) => {
    e.preventDefault();
    onBackToPocketPC();
  };

  return (
    <div className={styles.biosContainer}>
      <div className={styles.biosContent}>
        <div className={styles.title}>*** SYSTEM WARNING ***</div>

        <div className={styles.message}>
          A problem has been detected and the OS desktop interface is trying to optimize for your current mobile screen.
        </div>

        <div className={styles.message}>
          For the best experience on mobile, please <strong>ROTATE YOUR DEVICE HORIZONTALLY</strong> (Landscape mode) or{" "}
          <a
            href="#"
            onClick={handleReturnToPocketPC}
            style={{
              color: "#ffff55",
              textDecoration: "underline",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            return to the Pocket PC Version
          </a>
          .
        </div>

        <div className={styles.message}>
          For the absolute ideal experience, we strongly <strong>recommend accessing this site from an actual desktop computer</strong>.
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

export default RotateScreen;
