import React, { useEffect, useRef, useState } from "react";
import Head from "next/head";
import BootScreen from "components/BootScreen/BootScreen";
import BiosScreen from "components/BiosScreen/BiosScreen";
import StartBar from "components/StartBar/StartBar";
import DesktopIcon from "components/DesktopIcon/DesktopIcon";
import WinForm from "components/WinForm/WinForm";
import MsgBox from "components/MsgBox/MsgBox";
import CveError from "@/programs/CveError";
import Outlook from "@/programs/Outlook";
import MyWork from "@/programs/MyWork";
import Welcome from "@/programs/Welcome";
import MyGallery from "@/programs/MyGallery";
import InternetExplorer from "@/programs/InternetExplorer";
import Education from "@/programs/Education";
import RecyclingBin from "@/programs/RecyclingBin";
import WhyXP from "@/programs/WhyXP";
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
import { AppDirectory } from "@/appData";

type Stage = "BOOT" | "DESKTOP_FLASH" | "BIOS" | "DESKTOP";

const CVE_TITLE = "System Error - CVE Breach";

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
  const currTabID = useSelector((state: RootState) => state.tab.id);
  const isCveTab = (tab: Tab) => tab.program === App.ERROR && tab.title === CVE_TITLE;
  const cveTabs = Tabs.filter(isCveTab);
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
      title: CVE_TITLE,
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

  const handleRunApp = (e: number) => {
    const appConfig = AppDirectory.get(e);
    if (appConfig) {
      const newTab: Tab = {
        ...appConfig,
        id: Date.now(),
        zIndex: currTabID,
      };
      store.dispatch(addTab(newTab));
    }
  };

  const handleOpenLinkedin = () => {
    window.open(
      "https://www.linkedin.com/in/vincenzo-reina/",
      "_blank",
      "noreferrer"
    );
  };

  const handleOpenResume = () => {
    window.open(encodeURI("./Copia di CV-Reina-2025_ENG_noport.pdf"));
  };

  // Quando l'utente esce dal BIOS
  const handleDismissBios = () => {
    setStage("DESKTOP");
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
    if (stage === "DESKTOP") {
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

      {/* 4. DESKTOP FUNZIONANTE + POPUP STORM CVE */}
      {stage === "DESKTOP" && (
        <main className={styles.main}>
          <div style={{ position: "relative", width: "100%", height: "100%" }}>
            <DesktopIcon
              appID={1}
              doubleClick={() => handleRunApp(0)}
              title="Control Panel"
              img={{ src: "/IMG_0698.webp", height: 48, width: 48 }}
            />
            <DesktopIcon appID={2} doubleClick={() => handleRunApp(3)} title="Recycling Bin" img={bin} />
            <DesktopIcon appID={3} doubleClick={handleOpenResume} title="My Resume" img={pdf} />
            <DesktopIcon appID={4} doubleClick={handleOpenLinkedin} title="My LinkedIn" img={linkedin} />
            <DesktopIcon appID={5} doubleClick={() => handleRunApp(11)} title="My Computer" img={mycomputer} />
            <DesktopIcon appID={6} doubleClick={() => handleRunApp(2)} title="My Work" img={cmd} />

            {/* Finestre normali del sito */}
            {Tabs.map((tab) => {
              if (tab.isMinimized || isCveTab(tab)) return <React.Fragment key={tab.id}></React.Fragment>;
              return (
                <WinForm
                  key={tab.id}
                  id={tab.id}
                  title={tab.title}
                  message={tab.message || ""}
                  icon={tab.Icon}
                  zIndex={tab.zIndex}
                  programType={tab.program}
                  prompt={tab.prompt}
                >
                  {tab.program === App.MYWORK ? (
                    <MyWork id={tab.id} />
                  ) : tab.program === App.OUTLOOK ? (
                    <Outlook />
                  ) : tab.program === App.WELCOME ? (
                    <Welcome id={tab.id} />
                  ) : tab.program === App.MYGALLERY ? (
                    <MyGallery id={tab.id} />
                  ) : tab.program === App.INTERNET_EXPLORER ? (
                    <InternetExplorer id={tab.id} />
                  ) : tab.program === App.EDUCATION ? (
                    <Education id={tab.id} />
                  ) : tab.program === App.RECYCLING_BIN ? (
                    <RecyclingBin id={tab.id} />
                  ) : tab.program === App.WHY_XP ? (
                    <WhyXP id={tab.id} />
                  ) : tab.program === App.ERROR ? (
                    <p>{tab.message}</p>
                  ) : tab.program === App.INFO ? (
                    <MsgBox id={tab.id} message={tab.message || ""} icon={tab.Icon} />
                  ) : tab.program === App.WARNING ? (
                    <p>{tab.message}</p>
                  ) : tab.program === App.HELP ? (
                    <p>{tab.message}</p>
                  ) : null}
                </WinForm>
              );
            })}

            {/* Finestre CVE, ognuna in una posizione casuale */}
            <style>{cvePopupCss}</style>
            {cveTabs.map((tab) => {
              if (tab.isMinimized) return <React.Fragment key={tab.id}></React.Fragment>;
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
