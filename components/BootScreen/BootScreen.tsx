import React, { useEffect, useState } from "react";
import styles from "./BootScreen.module.css";
import Image from "next/image";

interface BootScreenProps {
  onComplete: () => void;
  durationMs?: number;
}

const BootScreen: React.FC<BootScreenProps> = ({
  onComplete,
  durationMs = 2800,
}) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, durationMs - 400);

    const completeTimer = setTimeout(() => {
      onComplete();
    }, durationMs);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
    };
  }, [durationMs, onComplete]);

  return (
    <div className={`${styles.bootContainer} ${fadeOut ? styles.fadeOut : ""}`}>
      <div className={styles.centerContent}>
        {/* BRANDING BLOCK */}
        <div className={styles.brandBlock}>
          {/* LOGO WINDOWS IMG_0691.png */}
          <div className={styles.logoWrapper}>
            <Image
              src="/IMG_0691.png"
              alt="Windows Logo"
              width={85}
              height={68}
              className={styles.logoImage}
            />
          </div>

          {/* REINA® IN ALTO A SINISTRA */}
          <span className={styles.subHeader}>Reina®</span>

          {/* VINCENZO + xp MINUSCOLO */}
          <div className={styles.mainTitleRow}>
            <span className={styles.nameText}>Vincenzo</span>
            <span className={styles.xpText}>xp</span>
          </div>
        </div>

        {/* PROGRESS BAR CON BLOCCHETTI BLU */}
        <div className={styles.progressTrack}>
          <div className={styles.blockGroup}>
            <div className={styles.block}></div>
            <div className={styles.block}></div>
            <div className={styles.block}></div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className={styles.footer}>
        <div className={styles.footerLeft}>
          <span>Welcome to my website</span>
        </div>
        <div className={styles.footerRight}>
          <span>Vincenzo</span>
        </div>
      </div>
    </div>
  );
};

export default BootScreen;
