import React, { useState, useEffect } from "react";
import styles from "./BiosScreen.module.css";
import { PILL_ROWS, PILL_COLORS } from "./asciiPill";

interface BiosScreenProps {
  onCheat?: () => void;
  onDismiss?: () => void;
}

const CHEAT = "AEZAKMI";
// Solo touch, senza mouse né trackpad (smartphone, iPad senza tastiera): niente tastiera per il trucco
export const isTouchOnly = () =>
  window.matchMedia("(pointer: coarse)").matches && !window.matchMedia("(any-pointer: fine)").matches;

// Tinte della palette BIOS a 16 colori, per codice colore della pillola ASCII
const PILL_PALETTES = {
  blue: ["", "#000066", "#3f8fff", "#55ffff", "#ffffff", "#aaaaaa", "#ffffff"],
  red: ["", "#000066", "#e03a3a", "#ff7a6a", "#ffffff", "#aaaaaa", "#ffffff"],
};
const MIRROR: Record<string, string> = { "<": ">", ">": "<", "'": "`", "`": "'", "/": "\\", "\\": "/", "(": ")", ")": "(" };

// Disegna la pillola raggruppando i caratteri consecutivi dello stesso colore
function AsciiPill({ color, mirror }: { color: "blue" | "red"; mirror?: boolean }) {
  const palette = PILL_PALETTES[color];
  return (
    <pre className={styles.asciiPill} aria-hidden="true">
      {PILL_ROWS.map((row, r) => {
        const chars = mirror ? row.split("").reverse().map((ch) => MIRROR[ch] || ch) : row.split("");
        const codes = mirror ? PILL_COLORS[r].split("").reverse() : PILL_COLORS[r].split("");
        const runs: { text: string; code: string }[] = [];
        chars.forEach((ch, i) => {
          const last = runs[runs.length - 1];
          if (last && last.code === codes[i]) last.text += ch;
          else runs.push({ text: ch, code: codes[i] });
        });
        return (
          <div key={r}>
            {runs.map((run, i) => (
              <span key={i} style={{ color: palette[Number(run.code)] || "transparent" }}>
                {run.text}
              </span>
            ))}
          </div>
        );
      })}
    </pre>
  );
}

export default function BiosScreen({ onCheat, onDismiss }: BiosScreenProps) {
  const [cveIndex, setCveIndex] = useState(0);
  const [cheatBuffer, setCheatBuffer] = useState("");
  const [isTouch, setIsTouch] = useState(false);
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
    setIsTouch(isTouchOnly());
  }, []);

  // Il trucco di GTA San Andreas: le lettere digitate riempiono il buffer, AEZAKMI apre il gioco
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!/^[a-zA-Z]$/.test(e.key)) return;
      // un tasto fisico vuol dire tastiera attaccata (es. iPad): si passa alla versione con il trucco
      setIsTouch(false);
      setCheatBuffer((prev) => {
        const next = (prev + e.key.toUpperCase()).slice(-CHEAT.length);
        if (next === CHEAT) {
          onCheat?.();
          return "";
        }
        return next;
      });
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onCheat]);

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

        {/* Su telefono non c'è tastiera: le due pillole stanno in alto, subito visibili */}
        {isTouch && (
          <div className={styles.pills}>
            <button className={styles.pillButton} onClick={onDismiss}>
              <AsciiPill color="blue" />
              <span className={styles.pillLabel}>[ GO BACK TO WINDOWS ]</span>
            </button>
            <button className={styles.pillButton} onClick={onCheat}>
              <AsciiPill color="red" mirror />
              <span className={`${styles.pillLabel} ${styles.redLabel}`}>[ SAN TUFELLOS ]</span>
            </button>
          </div>
        )}

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
        {!isTouch && (
          <>
            <div>
              CHEAT_INPUT_BUFFER : [{cheatBuffer.padEnd(CHEAT.length, "_")}]{" "}
              <span className={styles.blinking}>AWAITING CODE</span>
            </div>
            <br />
            <div className={styles.warningTitle}>
              HINT: TYPE THE SAN ANDREAS CHEAT THAT CLEARS YOUR WANTED LEVEL.
            </div>
          </>
        )}
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
        {!isTouch && (
          <div className={styles.footer}>
            Press ENTER to return to the desktop and ignore the threat <span className={styles.blinking}>_</span>
          </div>
        )}
      </div>
    </div>
  );
}
