import React, { useEffect, useState } from "react";
import styles from "../styles/InternetExplorer.module.css";

interface Props {
  id?: string | number;
}

const ASCII_CHARACTERS = "01101001 01101110 01110100 01100101 01110010 01101110 01100101 01110100 01100101 01110104 01110000 01101100 01101111 01110010 01100101 01110010 £$%&!?#@§±∆∇∈∉∋∏∑−∕∗∘√∝∞∠∧∨∩∪∫∬∭∮∯∰∱∲∳";

const LOREM_TEXTS = [
  "L0r3m 1ps3m d0l0r s1t 0m3t, c0ns3ct3t3r 0d1p1sc1ng 3l1t. S3d d0 31usd0m t3mp0r 1nc1d1dunt ut l0b0r3 3t d0l0r3 m0gn0 0l1qu0.",
  "CRITICAL ERROR: MEMORY CORRUPTION AT ADDRESS 0x00F8A39C. DO NOT CLOSE THIS WINDOW.",
  "U01t 3n1m 0d m1n1m v3n10m, qu1s n0strud 3x3rc1t0t10n ull0mc0 l0b0r1s n1s1 ut 0l1qu1p 3x 30 c0mm0d0 c0ns3qu0t.",
  "D31s 0ut3m 1rur3 d0l0r 1n r3pr3h3nd3r1t 1n v0lupt0t3 v3l1t 3ss3 c1llum d0l0r3 3u fug10t null0 p0r10tur.",
  "EXEIN_KERNEL_PANIC // PHYSICAL_AI_SAFETY_OVERRIDE_FAILED // REBOOT_DISABLED",
  "3xc3pt3ur s1nt 0cc03c0t cup1d0t0t n0n pr01d3nt, sunt 1n culp0 qu1 0ff1c10 d3s3rund m0ll1t 0n1m 1d 3st l0b0rum."
];

const InternetExplorer = ({ id }: Props) => {
  const [glitchText, setGlitchText] = useState(LOREM_TEXTS[0]);

  // Ciclo dinamico per variare casualmente le righe di testo inquietante
  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * LOREM_TEXTS.length);
      setGlitchText(LOREM_TEXTS[randomIndex]);
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.viewport}>
        {/* Effetto rumore / scanlines / flash d'allarme */}
        <div className={styles.scanlines} />
        <div className={styles.flashOverlay} />

        {/* Matrix Rain di ASCII e codice */}
        <div className={styles.matrixRain}>
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className={styles.matrixColumn}>
              {ASCII_CHARACTERS.split("").map((char, j) => (
                <span key={j}>{char}</span>
              ))}
            </div>
          ))}
        </div>

        {/* Muro di testo centrale con allarme e Lorem Ipsum corrotto */}
        <div className={styles.textWall}>
          <h1 className={styles.glitchHeader}>SYSTEM CORRUPTION DETECTED</h1>
          <p className={styles.subText}>
            [!] FATAL UNHANDLED EXCEPTION IN KERNEL MODULE
          </p>

          <div className={styles.corruptedLorem}>
            <p>{glitchText}</p>
            <p style={{ marginTop: "10px" }}>
              01010110 01101001 01101110 01100011 01100101 01101110 01111010
              01101111 00100000 01010010 01010000 01010011 00100000 01010011
              01111001 01110011 01110100 01100101 01101101
            </p>
            <p style={{ marginTop: "10px" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
          </div>

          <div className={styles.warningBox}>
            &gt;&gt; DO NOT ATTEMPT TO TERMINATE PROCESS // ACCESS DENIED &lt;&lt;
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternetExplorer;
