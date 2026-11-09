import React, { useEffect, useRef, useState } from "react";
import Head from "next/head";
import BootScreen from "components/BootScreen/BootScreen";
import BiosScreen from "components/BiosScreen/BiosScreen";
import PocketPC from "components/PocketPC/PocketPC";
import RotateScreen from "components/RotateScreen/RotateScreen";
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

type Stage = "BOOT" | "DESKTOP_FLASH" | "BIOS" | "POCKET" | "ROTATE" | "DESKTOP";

const CVE_TITLE = "System Error - CVE Breach";
// Le due finestre sopra il BIOS: sono WinForm veri come quelli del desktop (solo il pulsante di chiusura)
const THREAT_TITLE = "System Error - Multiple Threats";
const ARCADE_TITLE = "Threat Resolver.exe";

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
  .bios-win { position: fixed; inset: 0; pointer-events: none; }
  .bios-win.dim { background: rgba(0, 0, 40, 0.35); pointer-events: auto; }
  .bios-win > div { pointer-events: auto; }
  .bios-threat > div {
    width: min(450px, calc(100vw - 16px)) !important;
    left: calc(50% - min(225px, 50vw - 8px)) !important;
    top: calc(50% - 130px) !important;
    bottom: auto !important;
  }
  .bios-arcade > div {
    display: flex !important;
    flex-direction: column;
    width: min(860px, 96vw) !important;
    height: min(640px, 92vh) !important;
    left: calc(50% - min(430px, 48vw)) !important;
    top: calc(50% - min(320px, 46vh)) !important;
    bottom: auto !important;
  }
  .bios-arcade > div > div:last-child { flex: 1; height: auto; min-height: 0; }
  .bios-arcade iframe { border: 0; width: 100%; height: 100%; flex: 1; display: block; background: #000; }
  @media (max-width: 699px) {
    .bios-arcade > div {
      width: 100vw !important;
      height: 100dvh !important;
      left: 0 !important;
      top: 0 !important;
    }
  }
`;

export default function Home() {
  const [stage, setStage] = useState<Stage>("BOOT");
  // la sala giochi (o un gioco preciso), aperta in una finestra sopra il BIOS
  const [gameOpen, setGameOpen] = useState<string | null>(null);
  // sul telefono il "desktop" è la versione Pocket PC; il desktop XP vero si apre dal suo pulsante in basso
  const [isMobileView, setIsMobileView] = useState(false);
  const [forceDesktop, setForceDesktop] = useState(false);
  // Posizione casuale (in px) di ogni pop-up
  const [positions, setPositions] = useState<Record<number, { x: number; y: number }>>({});

  const Tabs = useSelector((state: RootState) => state.tab.tray);
  const currTabID = useSelector((state: RootState) => state.tab.id);
  const isCveTab = (tab: Tab) => tab.program === App.ERROR && tab.title === CVE_TITLE;
  const cveTabs = Tabs.filter(isCveTab);
  const prevCveIds = useRef<number[]>([]);
  const isBiosTab = (tab: Tab) => tab.program === App.ERROR && (tab.title === THREAT_TITLE || tab.title === ARCADE_TITLE);
  const threatTab = Tabs.find((tab) => tab.program === App.ERROR && tab.title === THREAT_TITLE);
  const arcadeTab = Tabs.find((tab) => tab.program === App.ERROR && tab.title === ARCADE_TITLE);
  // finestre del BIOS chiuse da noi (non dalla X), per non scambiarle per una scelta dell'utente
  const silentClose = useRef<Set<number>>(new Set());
  const prevBiosTabs = useRef<{ threat?: number; arcade?: number }>({});

  useEffect(() => {
    const checkMobile = () => setIsMobileView(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

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

  const biosTab = (title: string): Tab => ({
    id: Date.now() + Math.floor(Math.random() * 1000),
    title,
    message: "",
    Icon: errorIcon,
    isMinimized: false,
    zIndex: 0,
    program: App.ERROR,
    prompt: true,
    backBtnActive: false,
  });

  const closeBiosTabs = () => {
    store.getState().tab.tray.filter(isBiosTab).forEach((tab) => {
      silentClose.current.add(tab.id);
      store.dispatch(removeTab({ id: tab.id }));
    });
  };

  const openThreat = () => {
    closeBiosTabs();
    setGameOpen(null);
    store.dispatch(addTab(biosTab(THREAT_TITLE)));
  };

  const openArcade = (src: string) => {
    closeBiosTabs();
    setGameOpen(src);
    store.dispatch(addTab(biosTab(ARCADE_TITLE)));
  };

  // Back to desktop (o la X della finestra delle minacce)
  const handleDismissBios = () => {
    closeBiosTabs();
    setGameOpen(null);
    if (window.innerWidth <= 768 && !forceDesktop) {
      setStage("POCKET");
      return;
    }
    setStage("DESKTOP");
    spawnCveErrorTab();
  };

  // Dal Pocket PC: schermata che invita a ruotare il telefono, poi il desktop XP vero
  const handleRotateComplete = () => {
    setForceDesktop(true);
    setStage("DESKTOP");
    spawnCveErrorTab();
  };

  // Resolve threats sulla finestra CVE del desktop: si torna al BIOS e alla scelta dei minigiochi
  const handleRestartBios = () => {
    setStage("BIOS");
    store.getState().tab.tray.filter(isCveTab).forEach((tab) => store.dispatch(removeTab({ id: tab.id })));
  };

  // Link segreti: #aezakmi apre San Tufellos, #zeroday il duello, #arcade la sala giochi; saltano il boot
  useEffect(() => {
    const games: Record<string, string> = { "#aezakmi": "/santufellos/index.html", "#zeroday": "/zeroday/index.html", "#arcade": "/arcade/index.html" };
    const target = games[window.location.hash.toLowerCase()];
    if (target) {
      setStage("BIOS");
      openArcade(target);
    }
  }, []);

  // Qualche secondo dopo il BIOS compare la finestra delle minacce (se non è già aperta una delle due)
  useEffect(() => {
    if (stage !== "BIOS") return;
    const timer = setTimeout(() => {
      if (!store.getState().tab.tray.some(isBiosTab)) openThreat();
    }, 2600);
    return () => clearTimeout(timer);
  }, [stage]);

  // La X delle finestre del BIOS: minacce → desktop, sala giochi → di nuovo la scelta
  useEffect(() => {
    const prev = prevBiosTabs.current;
    const gone = (id?: number) => id !== undefined && !Tabs.some((tab) => tab.id === id) && !silentClose.current.delete(id);
    if (stage === "BIOS") {
      if (gone(prev.threat)) handleDismissBios();
      else if (gone(prev.arcade)) openThreat();
    }
    prevBiosTabs.current = { threat: threatTab?.id, arcade: arcadeTab?.id };
  }, [Tabs, stage]);

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

      {/* 3a. MINACCE RILEVATE: lo stesso WinForm della finestra di errore del desktop, con due scelte */}
      {stage === "BIOS" && <style>{cvePopupCss}</style>}
      {stage === "BIOS" && threatTab && (
        <div className="bios-win bios-threat" style={{ zIndex: 100000 }}>
          <WinForm
            id={threatTab.id}
            title={threatTab.title}
            message=""
            icon={threatTab.Icon}
            zIndex={threatTab.zIndex}
            programType={threatTab.program}
            prompt={true}
          >
            <div style={{ padding: "12px", fontSize: "12px", fontFamily: "Tahoma, sans-serif" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", marginBottom: "16px" }}>
                <img src={errorIcon.src} alt="Error" style={{ width: "32px", height: "32px" }} />
                <div>
                  <strong style={{ fontSize: "13px" }}>Multiple threats detected</strong>
                  <p style={{ margin: "8px 0 0 0", lineHeight: "1.4" }}>
                    Several active exploits were found on <code>vincenzoxp.com</code>, including CVE-AEZAKMI.
                  </p>
                  <p style={{ margin: "8px 0 0 0", lineHeight: "1.4", color: "#666" }}>
                    Go back to the desktop and ignore them, or resolve them now.
                  </p>
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "flex-end", gap: "8px", marginTop: "16px", flexWrap: "wrap" }}>
                <button className="xp-button" onClick={handleDismissBios} style={{ padding: "4px 10px" }}>
                  Back to desktop
                </button>
                <button
                  className="xp-button"
                  onClick={() => openArcade("/arcade/index.html")}
                  style={{ fontWeight: "bold", padding: "4px 12px" }}
                >
                  Resolve threats
                </button>
              </div>
            </div>
          </WinForm>
        </div>
      )}

      {/* 3b. SALA GIOCHI: WinForm sopra il BIOS, a tutto schermo sul telefono */}
      {stage === "BIOS" && arcadeTab && gameOpen && (
        <div className="bios-win bios-arcade dim" style={{ zIndex: 100000 }}>
          <WinForm
            id={arcadeTab.id}
            title={arcadeTab.title}
            message=""
            icon={arcadeTab.Icon}
            zIndex={arcadeTab.zIndex}
            programType={arcadeTab.program}
            prompt={true}
          >
            <iframe
              src={gameOpen}
              title="Arcade"
              onLoad={(e) => (e.target as HTMLIFrameElement).contentWindow?.focus()}
            />
          </WinForm>
        </div>
      )}

      {/* 3c. VERSIONE MOBILE: Pocket PC, e dal suo pulsante il passaggio al desktop vero */}
      {stage === "POCKET" && <PocketPC onSwitchToDesktop={() => setStage("ROTATE")} />}
      {stage === "ROTATE" && (
        <RotateScreen durationMs={10000} onComplete={handleRotateComplete} onBackToPocketPC={() => setStage("POCKET")} />
      )}

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
              if (tab.isMinimized || isCveTab(tab) || isBiosTab(tab)) return <React.Fragment key={tab.id}></React.Fragment>;
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
                    <CveError onClose={() => store.dispatch(removeTab({ id: tab.id }))} onResolve={handleRestartBios} />
                  </WinForm>
                </div>
              );
            })}
          </div>

          <StartBar disabled={isMobileView && forceDesktop} />
        </main>
      )}
    </>
  );
}
