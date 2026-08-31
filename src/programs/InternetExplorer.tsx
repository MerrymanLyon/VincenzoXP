import React, { useEffect, useState } from "react";
import styles from "../styles/InternetExplorer.module.css";

interface Props {
  id?: string | number;
}

// Parole chiave dal mondo Deep Tech & Cybersecurity
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
  "SYSTEM_CALL_HOOK"
];

// 1. Testo criptico sugli Easter Egg nei CV (Leetspeak / Criptato)
const EASTER_EGG_TEXTS = [
  "C0ngr4tul4t10ns 0n f1nd1ng th1s h1dd3n 34st3r 3gg. M0st r3cr31t3rs n3v3r d1sc0v3r th3 d33p3st l4y3rs 0f 4 cur r1culum v1t43.",
  "Y0u 4r3 0n3 0f th3 f3w wh0 4ctu4lly c11ck3d thr0ugh. C0r10s1ty 1s th3 tr03 m4rk 0f g3n1us 1n t3ch & str4t3gy.",
  "D1gg1ng 1nt0 unkn0wn 1nt3rf4c3s pr0v3s y0u p4y 4tt3nt10n t0 d3t41l. K33p3 xpl0r1ng th3 unkn0wn k3rn3l.",
  "34st3r 3ggs 1n CVs 4r3 th3 u1t1m4t3 t3st. Y0u p4ss3d th3 h1dd3n ch4ll3ng3 0f th1s p0rtf0l10."
];

// 2. Testo di avvertimento a cambio rapido
const WARNING_TEXTS = [
  "WARNING: DO NOT CLICK THE CLOSING BUTTON BELOW! IT WILL TRIGGER AN UNRECOVERABLE SYSTEM DUMP!",
  "CRITICAL ALERT: KEEP YOUR CURSOR AWAY FROM THE KILL BUTTON! CLOSE AT YOUR OWN RISK!",
  "DANGER: TERMINATING THIS PROCESS WILL PERMANENTLY WIPE LOCAL MEMORY CACHE! ABORT!",
  "STOP! DO NOT PRESS THE BUTTON AT THE BOTTOM! IT UNLEASHES KERNEL-LEVEL CORRUPTION!"
];

const ASCII_CHARACTERS = "01101001 01101110 01110100 01100101 01110010 01101110 01100101 01110100 £$%&!?#@§±∆∇∈∉∋∏∑−∕∗∘√∝∞";

const InternetExplorer = ({ id }: Props) => {
  const [crypticText, setCrypticText] = useState(EASTER_EGG_TEXTS[0]);
  const [warningText, setWarningText] = useState(WARNING_TEXTS[0]);
  const [techStream, setTechStream] = useState(DEEP_TECH_TERMS[0]);

  // Aggiornamento iper-veloce per massima tensione visiva
  useEffect(() => {
    const textInterval = setInterval(() => {
      const randomEgg = EASTER_EGG_TEXTS[Math.floor(Math.random() * EASTER_EGG_TEXTS.length)];
      const randomWarn = WARNING_TEXTS[Math.floor(Math.random() * WARNING_TEXTS.length)];
      const randomTech = DEEP_TECH_TERMS[Math.floor(Math.random() * DEEP_TECH_TERMS.length)];

      setCrypticText(randomEgg);
      setWarningText(randomWarn);
      setTechStream(randomTech);
    }, 150); // Cambia ogni 150ms

    return () => clearInterval(textInterval);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.viewport}>
        {/* Effetto rumore / scanlines / flash d'allarme accelerato */}
        <div className={styles.scanlines} />
        <div className={styles.flashOverlay} />

        {/* Matrix Rain di ASCII e codice */}
        <div className={styles.matrixRain}>
          {Array.from({ length: 14 }).map((_, i) => (
            <div key={i} className={styles.matrixColumn}>
              {ASCII_CHARACTERS.split("").map((char, j) => (
                <span key={j}>{char}</span>
              ))}
            </div>
          ))}
        </div>

        {/* Overlay continuo di termini Deep Tech / Cybersecurity */}
        <div className={styles.deepTechOverlay}>
          <span>{techStream}</span>
        </div>

        {/* Muro di testo centrale con allarme e Lorem Ipsum corrotto */}
        <div className={styles.textWall}>
          <h1 className={styles.glitchHeader}>Corruption Detected</h1>
          <p className={styles.subText}>
            [!] ERROR ON DOOM LEVEL [!] RESTART [1]
          </p>

          <div className={styles.corruptedBox}>
            <p className={styles.fastCrypticText}>{crypticText}</p>
            <p className={styles.fastWarningText}>{warningText}</p>
          </div>

          {/* Pulsante "Kill" in stile pulito e intatto di Windows XP */}
          <div className={styles.buttonContainer}>
            <button className={styles.xpKillButton}>
              Kill
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternetExplorer;
