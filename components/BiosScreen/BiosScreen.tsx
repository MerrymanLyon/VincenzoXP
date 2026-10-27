import React, { useState, useEffect } from "react";
import styles from "./BiosScreen.module.css";

export default function BiosScreen() {
  const [visibleCount, setVisibleCount] = useState(0);

  const cveList = [
    { date: "02.10.26", text: "CVE-2026-34512: PHP Remote Code Execution Vulnerability detected" },
    { date: "08.10.26", text: "CVE-2026-38901: NGINX HTTP/3 Stack Buffer Overflow exploited" },
    { date: "15.10.26", text: "CVE-2026-41203: OpenSSL Certificate Parsing Memory Corruption" },
    { date: "21.10.26", text: "CVE-2026-43990: WebKit Zero-Day Arbitrary Code Execution" },
    { date: "25.10.26", text: "CVE-2026-45102: Apache HTTP Server Authentication Bypass" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleCount((prev) => {
        if (prev < cveList.length + 1) {
          return prev + 1;
        }
        clearInterval(interval);
        return prev;
      });
    }, 600); // Fa comparire una nuova CVE ogni 600ms

    return () => clearInterval(interval);
  }, [cveList.length]);

  const handleOpenLinkedin = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open("https://www.linkedin.com/in/vincenzo-reina/", "_blank", "noreferrer");
  };

  return (
    <div className={styles.biosContainer}>
      <div className={styles.biosContent}>
        <div className={styles.header}>
          VINCENZOXP.COM BIOS v2.0 (C) 1994-2026, INC.
        </div>
        <div className={styles.divider}>
          --------------------------------------------------
        </div>

        <div className={styles.codeBlock}>
          *** SYSTEM HACKED: CVE-2026-XXXXX ***
        </div>

        <div className={styles.cveContainer}>
          {cveList.slice(0, visibleCount).map((item, index) => (
            <div key={index} className={styles.cveRow}>
              <span className={styles.cveDate}>[{item.date}]</span> {item.text}
            </div>
          ))}

          {visibleCount > cveList.length && (
            <div className={styles.cveRowCritical}>
              <span className={styles.cveDate}>[29.10.26]</span> *** CRITICAL ALERT: VINCENZOXP.COM LEAKED ***
            </div>
          )}
        </div>

        <div className={styles.divider}>
          --------------------------------------------------
        </div>

        <div className={styles.actionBlock}>
          To follow any news connect on LinkedIn:
          <br />
          <a
            href="https://www.linkedin.com/in/vincenzo-reina/"
            onClick={handleOpenLinkedin}
            className={styles.biosLink}
          >
            &gt; LINKEDIN PROFILE &lt;
          </a>
        </div>

        <div className={styles.footer}>
          Press ANY KEY to return to the desktop and ignore the threat <span className={styles.blinking}>_</span>
        </div>
      </div>
    </div>
  );
}
