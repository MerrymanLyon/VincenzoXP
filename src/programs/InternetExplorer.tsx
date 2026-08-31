import React from "react";
import styles from "../styles/InternetExplorer.module.css";

interface Props {
  id?: string | number;
}

const InternetExplorer = ({ id }: Props) => {
  return (
    <div className={styles.container}>
      {/* Address Bar Navigation */}
      <div className={styles.toolbar}>
        <span style={{ fontSize: "12px", color: "#444" }}>Address</span>
        <div className={styles.addressBar}>
          <input
            type="text"
            readOnly
            value="http://www.vincenzoreina.com/corrupted_zone"
            className={styles.addressInput}
          />
        </div>
      </div>

      {/* Main Viewport with Glitch Effects */}
      <div className={styles.viewport}>
        <div className={styles.scanlines} />

        <h1 className={styles.glitchText}>SYSTEM CORRUPTION DETECTED</h1>
        <p style={{ marginTop: "10px", fontFamily: "monospace" }}>
          Welcome to the restricted Internet Explorer module.
        </p>
      </div>
    </div>
  );
};

export default InternetExplorer;
