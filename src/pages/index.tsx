import React, { useEffect, useState } from "react";
import Head from "next/head";
import StartBar from "components/StartBar/StartBar";
import BootScreen from "components/BootScreen/BootScreen";
import BiosScreen from "components/BiosScreen/BiosScreen";
import PocketPC from "components/PocketPC/PocketPC";
import "xp.css/dist/XP.css";
import styles from "../styles/Home.module.css";
import DesktopIcon from "components/DesktopIcon/DesktopIcon";
import mycomputer from "../../assets/mycomputer.png";
import bin from "../../assets/recycling_bin.png";
import pdf from "../../assets/pdf.png";
import cmd from "../../assets/cmd.png";
import linkedin from "../../assets/linkedin.png";
import WinForm from "components/WinForm/WinForm";
import store from "@/redux/store";
import { AppDirectory } from "@/appData";
import { App, RootState, Tab } from "@/types";
import { addTab } from "@/redux/tabSlice";
import { useSelector } from "react-redux";
import Outlook from "@/programs/Outlook";
import MyWork from "@/programs/MyWork";
import MsgBox from "components/MsgBox/MsgBox";
import Welcome from "@/programs/Welcome";
import MyGallery from "@/programs/MyGallery";
import InternetExplorer from "@/programs/InternetExplorer";
import Education from "@/programs/Education";
import RecyclingBin from "@/programs/RecyclingBin";
import WhyXP from "@/programs/WhyXP";

export default function Home() {
  const [showBoot, setShowBoot] = useState(true);
  const [showBios, setShowBios] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const [forceDesktop, setForceDesktop] = useState(false);

  const Tabs = useSelector((state: RootState) => state.tab.tray);
  const currTabID = useSelector((state: RootState) => state.tab.id);

  useEffect(() => {
    const checkMobile = () => {
      if (window.innerWidth <= 768) {
        setIsMobileView(true);
      } else {
        setIsMobileView(false);
      }
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleSwitchToDesktop = () => {
    setShowBios(true);
  };

  const handleBiosComplete = () => {
    setShowBios(false);
    setForceDesktop(true);
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

  const siteTitle = "Vincenzo Reina | Senior Brand & GTM Strategist";
  const siteDescription =
    "Interactive Windows XP Portfolio & GTM Hub. Translating complex B2B deeptech products into high-impact market narratives without the corporate fluff.";
  const siteUrl = "https://vincenzoxp.com";
  const ogImageUrl = `${siteUrl}/og-image.jpeg.jpeg`;

  return (
    <>
      <Head>
        {/* Metadati Standard */}
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Windows-logo.png" />

        {/* Open Graph / Facebook / WhatsApp / LinkedIn */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:title" content={siteTitle} />
        <meta property="og:description" content={siteDescription} />
        <meta property="og:image" content={ogImageUrl} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={siteUrl} />
        <meta name="twitter:title" content={siteTitle} />
        <meta name="twitter:description" content={siteDescription} />
        <meta name="twitter:image" content={ogImageUrl} />
      </Head>

      {/* 1. ANIMAZIONE BOOT INIZIALE */}
      {showBoot && (
        <BootScreen durationMs={2800} onComplete={() => setShowBoot(false)} />
      )}

      {/* 2. TRANSIZIONE SCHERMATA BIOS/BSOD (10 SECONDI) */}
      {showBios && (
        <BiosScreen durationMs={10000} onComplete={handleBiosComplete} />
      )}

      {/* 3. RENDER CONDIZIONALE: POCKET PC MOBILE O DESKTOP */}
      {isMobileView && !forceDesktop ? (
        <PocketPC onSwitchToDesktop={handleSwitchToDesktop} />
      ) : (
        <main className={styles.main}>
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "100%",
            }}
          >
            <DesktopIcon
              appID={1}
              doubleClick={() => handleRunApp(0)}
              title="Control Panel"
              img={{ src: "/IMG_0698.webp", height: 48, width: 48 }}
            />

            <DesktopIcon
              appID={2}
              doubleClick={() => handleRunApp(3)}
              title="Recycling Bin"
              img={bin}
            />
            <DesktopIcon
              appID={3}
              doubleClick={handleOpenResume}
              title="My Resume"
              img={pdf}
            />
            <DesktopIcon
              appID={4}
              doubleClick={handleOpenLinkedin}
              title="My LinkedIn"
              img={linkedin}
            />

            <DesktopIcon
              appID={5}
              doubleClick={() => handleRunApp(11)}
              title="My Computer"
              img={mycomputer}
            />

            <DesktopIcon
              appID={6}
              doubleClick={() => handleRunApp(2)}
              title="My Work"
              img={cmd}
            />

            {Tabs.map((tab) => {
              return tab.isMinimized ? (
                <React.Fragment key={tab.id}></React.Fragment>
              ) : (
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
          </div>

          <StartBar disabled={isMobileView && forceDesktop} />
        </main>
      )}
    </>
  );
}
