import React, { useEffect, useState } from "react";
import Head from "next/head";
import StartBar from "components/StartBar/StartBar";
import BootScreen from "components/BootScreen/BootScreen";
import PocketPC from "components/PocketPC/PocketPC";
import "xp.css/dist/XP.css";
import styles from "../styles/Home.module.css";
import DesktopIcon from "components/DesktopIcon/DesktopIcon";
import mycomputer from "../../assets/mycomputer.png";
import bin from "../../assets/recycling_bin.png";
import pdf from "../../assets/pdf.png";
import cmd from "../../assets/cmd.png";
import solitare from "../../assets/solitaire.png";
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

export default function Home() {
  const [showBoot, setShowBoot] = useState(true);
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
    window.open("./Resume.pdf");
  };

  return (
    <>
      <Head>
        <title>Vincenzo Reina - Senior Brand & GTM Strategist</title>
        <meta name="description" content="My Personal Space" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>

      {/* ANIMAZIONE BOOT VINCENZO XP */}
      {showBoot && (
        <BootScreen durationMs={2800} onComplete={() => setShowBoot(false)} />
      )}

      {/* RENDER CONDIZIONALE: POCKET PC PER MOBILE O DESKTOP */}
      {isMobileView && !forceDesktop ? (
        <PocketPC onSwitchToDesktop={() => setForceDesktop(true)} />
      ) : (
        <main className={styles.main}>
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "100%",
            }}
          >
            {/* ICONA 1: CONTROL PANEL (APRE L'ATTUALE WELCOME) */}
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

            {/* ICONA 5: MY COMPUTER (EX MY GITHUB, CON L'ICONA MYCOMPUTER) */}
            <DesktopIcon
              appID={5}
              doubleClick={() => handleRunApp(0)}
              title="My Computer"
              img={mycomputer}
            />

            <DesktopIcon
              appID={6}
              doubleClick={() => handleRunApp(2)}
              title="My Work"
              img={cmd}
            />

            <DesktopIcon
              appID={7}
              doubleClick={() => void 0}
              title="My Hobbies"
              img={solitare}
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
          <StartBar />
        </main>
      )}
    </>
  );
}
