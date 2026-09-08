import React, { useState } from "react";
import styles from "../styles/InternetExplorer.module.css";

interface Props {
  id?: string | number;
}

const InternetExplorer = ({ id }: Props) => {
  const [showClippy, setShowClippy] = useState(false);
  const [url, setUrl] = useState("https://www.google.com");

  const handleKillClick = () => {
    // Attiva/disattiva il popup pulito di Clippy senza alcun filtro glitch
    setShowClippy(true);
  };

  const handleCloseClippy = () => {
    setShowClippy(false);
  };

  return (
    <div className={styles.container}>
      {/* Barra superiore / Toolbar IE */}
      <div className={styles.toolbar}>
        <div className={styles.navButtons}>
          <button className={styles.iconBtn} title="Back">◄</button>
          <button className={styles.iconBtn} title="Forward">►</button>
          <button className={styles.iconBtn} title="Stop">✖</button>
          <button className={styles.iconBtn} title="Refresh">↻</button>
          <button className={styles.iconBtn} title="Home">🏠</button>
        </div>

        {/* Campo Indirizzo URL */}
        <div className={styles.addressBar}>
          <span className={styles.addressLabel}>Address</span>
          <input
            type="text"
            className={styles.urlInput}
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </div>

        {/* Pulsante Kill Easter Egg */}
        <button className={styles.killBtn} onClick={handleKillClick} title="Kill">
          Kill
        </button>
      </div>

      {/* Area Contenuto Browser */}
      <div className={styles.contentArea}>
        <iframe
          src={url}
          title="Internet Explorer Content"
          className={styles.iframeContent}
        />

        {/* Easter Egg: Popup pulito di Clippy (Senza alcun effetto glitch) */}
        {showClippy && (
          <div className={styles.clippyOverlay} onClick={handleCloseClippy}>
            <div className={styles.clippyCard} onClick={(e) => e.stopPropagation()}>
              <button className={styles.clippyCloseBtn} onClick={handleCloseClippy}>
                ✕
              </button>
              <div className={styles.clippyImageWrapper}>
                <img
                  src="/IMG_0637.gif"
                  alt="Clippy Assistant"
                  className={styles.clippyGif}
                />
              </div>
              <div className={styles.clippySpeechBubble}>
                It looks like you're trying to kill Internet Explorer. Would you like help with that?
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default InternetExplorer;
