import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/InternetExplorer.module.css";

interface Props {
  id?: string | number;
}

const InternetExplorer = ({ id }: Props) => {
  const [isGlitching, setIsGlitching] = useState(false);
  const [subliminalText, setSubliminalText] = useState("");
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const subliminalMessages = [
    "DONT OPEN INTERNET EXPLORER",
    "SYSTEM CORRUPTED",
    "THE PAST IS LEAKING",
    "CLOSE THE WINDOW",
    "OBEY THE MACHINE",
    "ERROR 404: REALITY NOT FOUND",
    "NO ESCAPE",
    "STAY AWAY",
  ];

  // Effetto Matrix / Rain in background durante il kill
  useEffect(() => {
    if (!isGlitching) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = canvas.parentElement?.clientWidth || 800;
    canvas.height = canvas.parentElement?.clientHeight || 600;

    const katakana = "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const latin = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const alphabet = katakana + latin;

    const fontSize = 16;
    const columns = Math.floor(canvas.width / fontSize);
    const rainDrops: number[] = Array(columns).fill(1);

    const renderMatrix = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#0F0";
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < rainDrops.length; i++) {
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        ctx.fillText(text, i * fontSize, rainDrops[i] * fontSize);

        if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          rainDrops[i] = 0;
        }
        rainDrops[i]++;
      }
    };

    const interval = setInterval(renderMatrix, 30);

    // Gestore testi subliminali animati
    const textInterval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * subliminalMessages.length);
      setSubliminalText(subliminalMessages[randomIndex]);
    }, 400);

    return () => {
      clearInterval(interval);
      clearInterval(textInterval);
    };
  }, [isGlitching]);

  const handleKillClick = () => {
    setIsGlitching(true);
  };

  const handleStopKill = () => {
    setIsGlitching(false);
  };

  return (
    <div className={`${styles.container} ${isGlitching ? styles.glitchActive : ""}`}>
      {/* Structural Toolbar Originale */}
      <div className={styles.ieHeader}>
        <div className={styles.titleBar}>
          <span>Internet Explorer</span>
        </div>
        <div className={styles.addressBarContainer}>
          <span className={styles.addressLabel}>Address</span>
          <input
            type="text"
            readOnly
            value="http://www.donotopen.com"
            className={styles.addressInput}
          />
          <button className={styles.killButton} onClick={handleKillClick}>
            Kill
          </button>
        </div>
      </div>

      {/* Main View Area */}
      <div className={styles.viewport}>
        {!isGlitching ? (
          <div className={styles.normalState}>
            <iframe
              src="about:blank"
              title="Internet Explorer"
              className={styles.frame}
            />
          </div>
        ) : (
          <div className={styles.easterEggOverlay}>
            {/* Background Matrix Canvas */}
            <canvas ref={canvasRef} className={styles.matrixCanvas} />

            {/* Testi Subliminali Animati */}
            <div className={styles.subliminalContainer}>
              <h1 className={styles.subliminalText}>{subliminalText}</h1>
            </div>

            {/* Immagine Clippy pulita senza filtri glitch */}
            <div className={styles.clippyContainer}>
              <img
                src="/IMG_0637.gif"
                alt="Clippy"
                style={{
                  width: "220px",
                  height: "auto",
                  objectFit: "contain",
                  filter: "none", // Rimosso ogni filtro glitch
                  animation: "none", // Rimossa l'animazione di shake o distorsione
                }}
              />
              <div className={styles.speechBubble}>
                It looks like you're trying to kill Internet Explorer.
                <br />
                <button className={styles.closeEggBtn} onClick={handleStopKill}>
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default InternetExplorer;
