import React, { useEffect, useState } from "react";
import styles from "../styles/InternetExplorer.module.css";

interface Props {
  id?: string | number;
}

interface GlitchImage {
  id: number;
  src: string;
  top: number; // in pixel
  left: number; // in pixel
  size: number;
  rotation: number;
}

const KILL_IMAGES = ["/IMG_0903-modified.png"];

const DEEP_TECH_TERMS = [
  "KERNEL_RUNTIME_AGENT",
  "PHYSICAL_AI_THREAT",
  "AGENTIC_RISK_VECTOR",
  "EBPF_PROBE_INTERCEPT",
  "RSA_2026_ENCRYPTION",
  "SERIES_C_PAYLOAD",
  "ZERO_DAY_PREEMPTION",
  "MEMORY_BUFFER_OVERFLOW",
  "DECENTRALIZED_EMBEDDED",
  "SYSTEM_CALL_HOOK",
];

const EASTER_EGG_TEXTS = [
  "C0ngr4tul4t10ns 0n f1nd1ng th1s h1dd3n 34st3r 3gg. M0st r3cr31t3rs n3v3r d1sc0v3r th3 d33p3st l4y3rs 0f 4 cur r1culum v1t43.",
  "Y0u 4r3 0n3 0f th3 f3w wh0 4ctu4lly c11ck3d thr0ugh. C0r10s1ty 1s th3 tr03 m4rk 0f g3n1us 1n t3ch & str4t3gy.",
  "D1gg1ng 1nt0 unkn0wn 1nt3rf4c3s pr0v3s y0u p4y 4tt3nt10n t0 d3t41l. K33p3 xpl0r1ng th3 unkn0wn k3rn3l.",
  "34st3r 3ggs 1n CVs 4r3 th3 u1t1m4t3 t3st. Y0u p4ss3d th3 h1dd3n ch4ll3ng3 0f th1s p0rtf0l10.",
];

const WARNING_TEXTS = [
  "WARNING: DO NOT CLICK THE CLOSING BUTTON BELOW! IT WILL TRIGGER AN UNRECOVERABLE SYSTEM DUMP!",
  "CRITICAL ALERT: KEEP YOUR CURSOR AWAY FROM THE KILL BUTTON! CLOSE AT YOUR OWN RISK!",
  "DANGER: TERMINATING THIS PROCESS WILL PERMANENTLY WIPE LOCAL MEMORY CACHE! ABORT!",
  "STOP! DO NOT PRESS THE BUTTON AT THE BOTTOM! IT UNLEASHES KERNEL-LEVEL CORRUPTION!",
];

const ASCII_CHARACTERS =
  "01101001 01101110 01110100 01100101 01110010 01101110 01100101 01110100 £$%&!?#@§±∆∇∈∉∋∏∑−∕∗∘√∝∞";

const InternetExplorer = ({ id }: Props) => {
  const [crypticText, setCrypticText] = useState(EASTER_EGG_TEXTS[0]);
  const [warningText, setWarningText] = useState(WARNING_TEXTS[0]);
  const [techStream, setTechStream] = useState(DEEP_TECH_TERMS[0]);

  // Stato per le immagini spawnate su tutto lo schermo
  const [spawnedImages, setSpawnedImages] = useState<GlitchImage[]>([]);

  useEffect(() => {
    const textInterval = setInterval(() => {
      setCrypticText(
        EASTER_EGG_TEXTS[Math.floor(Math.random() * EASTER_EGG_TEXTS.length)]
      );
      setWarningText(
        WARNING_TEXTS[Math.floor(Math.random() * WARNING_TEXTS.length)]
      );
      setTechStream(
        DEEP_TECH_TERMS[Math.floor(Math.random() * DEEP_TECH_TERMS.length)]
      );
    }, 150);

    return () => clearInterval(textInterval);
  }, []);

  // Gestore click per spawnare immagini su tutto il desktop
  const handleKillClick = () => {
    const randomSrc =
      KILL_IMAGES[Math.floor(Math.random() * KILL_IMAGES.length)];

    // Genera dimensione immagine tra 100px e 260px
    const randomSize = Math.floor(Math.random() * 160) + 100;

    // Calcola coordinate pixel relative a tutta la finestra del browser (Desktop)
    const screenWidth = typeof window !== "undefined" ? window.innerWidth : 1000;
    const screenHeight = typeof window !== "undefined" ? window.innerHeight : 700;

    const randomTop = Math.floor(Math.random() * (screenHeight - randomSize));
    const randomLeft = Math.floor(Math.random() * (screenWidth - randomSize));

    // Rotazione casuale tra -30 e +30 gradi
    const randomRotation = Math.floor(Math.random() * 60) - 30;

    const newImage: GlitchImage = {
      id: Date.now() + Math.random(),
      src: randomSrc,
      top: randomTop,
      left: randomLeft,
      size: randomSize,
      rotation: randomRotation,
    };

    setSpawnedImages((prev) => [...prev, newImage]);
  };

  return (
    <div className={styles.container}>
      <div className={styles.viewport}>
        <div className={styles.scanlines} />
        <div className={styles.flashOverlay} />

        {/* Matrix Rain */}
        <div className={styles.matrixRain}>
          {Array.from({ length: 14 }).map((_, i) => (
            <div key={i} className={styles.matrixColumn}>
              {ASCII_CHARACTERS.split("").map((char, j) => (
                <span key={j}>{char}</span>
              ))}
            </div>
          ))}
        </div>

        {/* Stream Deep Tech */}
        <div className={styles.deepTechOverlay}>
          <span>{techStream}</span>
        </div>

        {/* Muro di testo */}
        <div className={styles.textWall}>
          <h1 className={styles.glitchHeader}>Corruption Detected</h1>
          <p className={styles.subText}>
            [!] ERROR ON DOOM LEVEL [!] RESTART [1]
          </p>

          <div className={styles.corruptedBox}>
            <p className={styles.fastCrypticText}>{crypticText}</p>
            <p className={styles.fastWarningText}>{warningText}</p>
          </div>

          <div className={styles.buttonContainer}>
            <button className={styles.xpKillButton} onClick={handleKillClick}>
              Kill
            </button>
          </div>
        </div>

        {/* Render Immagini Irremovibili su tutto il Desktop */}
        {spawnedImages.map((img) => (
          <img
            key={img.id}
            src={img.src}
            alt="Corrupted Artifact"
            className={styles.unremovableImage}
            style={{
              top: `${img.top}px`,
              left: `${img.left}px`,
              width: `${img.size}px`,
              transform: `rotate(${img.rotation}deg)`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default InternetExplorer;
