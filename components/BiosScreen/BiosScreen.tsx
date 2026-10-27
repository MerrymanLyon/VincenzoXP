import React, { useState, useEffect } from "react";
import styles from "./BiosScreen.module.css";

export default function BiosScreen() {
  const [cveIndex, setCveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  const cveList = [
    { date: "02.10.26", text: "CVE-2026-34512: PHP Remote Code Execution" },
    { date: "08.10.26", text: "CVE-2026-38901: NGINX HTTP/3 Stack Overflow" },
    { date: "15.10.26", text: "CVE-2026-41203: OpenSSL Cert Memory Corruption" },
    { date: "21.10.26", text: "CVE-2026-43990: WebKit Zero-Day Execution" },
    { date: "25.10.26", text: "CVE-2026-45102: Apache Auth Bypass" },
  ];

  // Garantisce che le animazioni e i numeri casuali partano SOLO lato Client
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Sequenza di comparsa delle CVE
  useEffect(() => {
    if (!isMounted) return;

    const interval = setInterval(() => {
      setCveIndex((prev) => {
        if (prev < cveList.length) return prev + 1;
        clearInterval(interval);
        return prev;
      });
    }, 450);

    return () => clearInterval(interval);
  }, [isMounted, cveList.length]);

  // Barra di caricamento buggata che loopa e si resetta (solo Client)
  useEffect(() => {
    if (!isMounted) return;

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 99) return Math.floor(Math.random() * 20); // Glitch & reset
        return prev + Math.floor(Math.random() * 15) + 1;
      });
    }, 180);

    return () => clearInterval(progressInterval);
  }, [isMounted]);

  const handleOpenLinkedin = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open("https://www.linkedin.com/in/vincenzo-reina/", "_blank", "noreferrer");
  };

  const blocksCount = isMounted ? Math.min(20, Math.max(0, Math.floor(progress / 5))) : 0;
  const emptyCount = 20 - blocksCount;

  return (
    <div className={styles.biosContainer}>
      <div className={styles.biosContent}>
        <div>VINCENZOXP.COM BIOS v2.0 (C) 1994-2026, INC.</div>
        <div>-----------------------------------------------------------------</div>
        <br />
        <div className={styles.warningTitle}>*** SYSTEM HACKED: CVE-2026-XXXXX ***</div>
        <br />

        {/* LISTA CVE IN PURO TESTO BIOS */}
        {isMounted &&
          cveList.slice(0, cveIndex).map((item, idx) => (
            <div key={idx}>
              [{item.date}] {item.text} ... <span className={styles.failed}>FAILED</span>
            </div>
          ))}

        {isMounted && cveIndex >= cveList.length && (
          <div className={styles.criticalAlert}>
            [29.10.26] *** CRITICAL ALERT: VINCENZOXP.COM LEAKED ***
          </div>
        )}

        <br />
        <div>-----------------------------------------------------------------</div>
        <div>[ SYSTEM DIAGNOSTICS & MEMORY DUMP ]</div>
        <br />

        {/* PARAMETRI BUGGATI ANIMATI */}
        <div>MEM_CORRUPTION_ADDR : 0x0000F83C [ERR_OVERFLOW]</div>
        <div>STACK_INTEGRITY    : 0% CORRUPTED</div>
        <div>EXECUTION_THREAD   : TERMINATED_BY_SYSTEM</div>
        <div>NEXT_CHAPTER_STATUS: INITIALIZING_NEW_BRAND...</div>
        <br />

        {/* BARRA LOADING ANIMATA BUGGATA */}
        <div>DUMPING SYSTEM MEMORY: {isMounted ? progress : 0}%</div>
        <div>
          [{"█".repeat(blocksCount)}{"░".repeat(emptyCount)}] <span className={styles.blinking}>_</span>
        </div>

        <br />
        <div>-----------------------------------------------------------------</div>
        <br />

        <div>To follow any news connect on LinkedIn:</div>
        <div>
          <a
            href="https://www.linkedin.com/in/vincenzo-reina/"
            onClick={handleOpenLinkedin}
            className={styles.biosLink}
          > 
            &gt; LINKEDIN PROFILE &lt;
          </a>
        </div>

        <br />
        <br />
        <div className={styles.footer}>
          Press ANY KEY to return to the desktop and ignore the threat <span className={styles.blinking}>_</span>
        </div>
      </div>
    </div>
  );
}
