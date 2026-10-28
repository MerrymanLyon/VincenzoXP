import React, { useEffect, useRef, useState } from "react";
import Head from "next/head";
import BootScreen from "components/BootScreen/BootScreen";
import BiosScreen from "components/BiosScreen/BiosScreen";
import StartBar from "components/StartBar/StartBar";
import DesktopIcon from "components/DesktopIcon/DesktopIcon";
import WinForm from "components/WinForm/WinForm";
import CveError from "@/programs/CveError";
import "xp.css/dist/XP.css";
import styles from "../styles/Home.module.css";
import mycomputer from "../../assets/mycomputer.png";
import bin from "../../assets/recycling_bin.png";
import pdf from "../../assets/pdf.png";
import cmd from "../../assets/cmd.png";
import linkedin from "../../assets/linkedin.png";
import errorIcon from "../../assets/dialog/error.png";
import store from "@/redux/store";
import { addTab, removeTab } from "@/redux/tabSlice";
import { useSelector } from "react-redux";
import { App, RootState, Tab } from "@/types";

type Stage = "BOOT" | "DESKTOP_FLASH" | "BIOS" | "DESKTOP_LOCKED";

// Dimensioni stimate del pop-up CVE (WinForm in modalità prompt)
const POPUP_WIDTH = 450;
const POPUP_HEIGHT = 230;

// WinForm posiziona i prompt in modo fisso (centrati, top 10% e bottom 10%):
// qui li spostiamo nella posizione casuale e lasciamo l'altezza al contenuto
const cvePopupCss = `
  .cve-popup { position: absolute; inset: 0; pointer-events: none; }
  .cve-popup > div {
    left: var(--x) !important;
    top: var(--y) !important;
    bottom: auto !important;
    width: min(450px, calc(100vw - 16px)) !important;
    pointer-events: auto;
  }
`;

export default function Home() {
  const [stage, setStage] = useState<Stage>("BOOT");
  // Posizione casuale (in px) di ogni pop-up
  const [positions, setPositions] = useState<Record<number, { x: number; y: number }>>({});

  const Tabs = useSelector((state: RootState) => state.tab.tray);
  const cveTabs = Tabs.filter((tab) => tab.program === App.ERROR);
  const prevCveIds = useRef<number[]>([]);

  // Transizione dal Desktop al BIOS dopo 1 secondo di flash
  useEffect(() => {
    if (stage === "DESKTOP_FLASH") {
      const timer = setTimeout(() => {
        setStage("BIOS");
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [stage]);

  // Helper per generare posizioni casuali che tengono il pop-up dentro lo schermo
  const getRandomPosition = () => {
    if (typeof window === "undefined") return { x: 100, y: 100 };
    const maxX = Math.max(0, window.innerWidth - POPUP_WIDTH - 16);
    const maxY = Math.max(0, window.innerHeight - 40 - POPUP_HEIGHT - 16); // 40px circa di StartBar
    return { x: 8 + Math.floor(Math.random() * maxX), y: 8 + Math.floor(Math.random() * maxY) };
  };

  // Crea una nuova finestra d'errore in posizione casuale
  const spawnCveErrorTab = () => {
    const newId = Date.now() + Math.floor(Math.random() * 1000);

    const errorTab: Tab = {
      id: newId,
      title: "System Error - CVE Breach",
      message: "",
      Icon: errorIcon,
      isMinimized: false,
      zIndex: 0, // assegnato dal reducer addTab
      program: App.ERROR,
      prompt: true,
      backBtnActive: false,
    };

    setPositions((prev) => ({ ...prev, [newId]: getRandomPosition() }));
    store.dispatch(addTab(errorTab));
  };

  // Quando l'utente esce dal BIOS
  const handleDismissBios = () => {
    setStage("DESKTOP_LOCKED");
    spawnCveErrorTab();
  };

  // "Press ANY KEY": qualsiasi tasto (o tap fuori dal link LinkedIn) chiude il BIOS
  useEffect(() => {
    if (stage !== "BIOS") return;
    const onKey = () => handleDismissBios();
    const onClick = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest("a")) return;
      handleDismissBios();
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("click", onClick);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("click", onClick);
    };
  }, [stage]);

  // POPUP STORM: ogni finestra CVE chiusa (X della finestra o Cancel) ne fa spawnare una nuova
  useEffect(() => {
    const currentIds = cveTabs.map((tab) => tab.id);
    if (stage === "DESKTOP_LOCKED") {
      prevCveIds.current
        .filter((id) => !currentIds.includes(id))
        .forEach(() => {
          // Piccolo timeout per dare l'effetto reattivo d'attacco
          setTimeout(spawnCveErrorTab, 120);
        });
    }
    prevCveIds.current = currentIds;
  }, [Tabs, stage]);

  const siteTitle = "Vincenzo Reina - system hacked";
  const siteDescription =
    "VincenzoXP system has completed its execution. A critical security breach was detected.";
  const siteUrl = "https://vincenzoxp.com";
  const ogImageUrl = `${siteUrl}/IMG_0760.jpeg`;

  return (
    <>
      <Head>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Windows-logo.png" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:title" content={siteTitle} />
        <meta property="og:description" content={siteDescription} />
        <meta property="og:image" content={ogImageUrl} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={siteUrl} />
        <meta name="twitter:title" content={siteTitle} />
        <meta name="twitter:description" content={siteDescription} />
        <meta name="twitter:image" content={ogImageUrl} />
      </Head>

      {/* 1. BOOT SCREEN */}
      {stage === "BOOT" && (
        <BootScreen durationMs={2500} onComplete={() => setStage("DESKTOP_FLASH")} />
      )}

      {/* 2. DESKTOP FLASH */}
      {stage === "DESKTOP_FLASH" && (
        <main className={styles.main}>
          <div style={{ position: "relative", width: "100%", height: "100%" }}>
            <DesktopIcon appID={1} doubleClick={() => {}} title="Control Panel" img={{ src: "/IMG_0698.webp", height: 48, width: 48 }} />
            <DesktopIcon appID={2} doubleClick={() => {}} title="Recycling Bin" img={bin} />
            <DesktopIcon appID={3} doubleClick={() => {}} title="My Resume" img={pdf} />
            <DesktopIcon appID={4} doubleClick={() => {}} title="My LinkedIn" img={linkedin} />
            <DesktopIcon appID={5} doubleClick={() => {}} title="My Computer" img={mycomputer} />
            <DesktopIcon appID={6} doubleClick={() => {}} title="My Work" img={cmd} />
          </div>
          <StartBar disabled={true} />
        </main>
      )}

      {/* 3. BIOS SCREEN */}
      {stage === "BIOS" && <BiosScreen />}

      {/* 4. DESKTOP BLOCCATO CON POPUP STORM */}
      {stage === "DESKTOP_LOCKED" && (
        <main className={styles.main}>
          <div style={{ position: "relative", width: "100%", height: "100%" }}>
            <DesktopIcon appID={1} doubleClick={() => {}} title="Control Panel" img={{ src: "/IMG_0698.webp", height: 48, width: 48 }} />
            <DesktopIcon appID={2} doubleClick={() => {}} title="Recycling Bin" img={bin} />
            <DesktopIcon appID={3} doubleClick={() => {}} title="My Resume" img={pdf} />
            <DesktopIcon appID={4} doubleClick={() => {}} title="My LinkedIn" img={linkedin} />
            <DesktopIcon appID={5} doubleClick={() => {}} title="My Computer" img={mycomputer} />
            <DesktopIcon appID={6} doubleClick={() => {}} title="My Work" img={cmd} />

            {/* Rendering di tutte le finestre CVE spawnate, ognuna in una posizione casuale */}
            <style>{cvePopupCss}</style>
            {cveTabs.map((tab) => {
              const pos = positions[tab.id] || { x: 100, y: 100 };
              return (
                <div
                  key={tab.id}
                  className="cve-popup"
                  style={{ zIndex: tab.zIndex, "--x": `${pos.x}px`, "--y": `${pos.y}px` } as React.CSSProperties}
                >
                  <WinForm
                    id={tab.id}
                    title={tab.title}
                    message={tab.message || ""}
                    icon={tab.Icon}
                    zIndex={tab.zIndex}
                    programType={tab.program}
                    prompt={tab.prompt}
                  >
                    <CveError onClose={() => store.dispatch(removeTab({ id: tab.id }))} />
                  </WinForm>
                </div>
              );
            })}
          </div>

          <StartBar disabled={false} />
        </main>
      )}
    </>
  );
}
