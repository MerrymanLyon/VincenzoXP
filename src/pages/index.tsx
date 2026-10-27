import React, { useEffect, useState } from "react";
import Head from "next/head";
import BootScreen from "components/BootScreen/BootScreen";
import BiosScreen from "components/BiosScreen/BiosScreen";
import StartBar from "components/StartBar/StartBar";
import DesktopIcon from "components/DesktopIcon/DesktopIcon";
import "xp.css/dist/XP.css";
import styles from "../styles/Home.module.css";
import mycomputer from "../../assets/mycomputer.png";
import bin from "../../assets/recycling_bin.png";
import pdf from "../../assets/pdf.png";
import cmd from "../../assets/cmd.png";
import linkedin from "../../assets/linkedin.png";

type Stage = "BOOT" | "DESKTOP_FLASH" | "BIOS";

export default function Home() {
  const [stage, setStage] = useState<Stage>("BOOT");

  // Transizione dal Desktop al BIOS dopo 1 secondo di flash
  useEffect(() => {
    if (stage === "DESKTOP_FLASH") {
      const timer = setTimeout(() => {
        setStage("BIOS");
      }, 1000); // 1 secondo di esposizione desktop
      return () => clearTimeout(timer);
    }
  }, [stage]);

  const siteTitle = "Vincenzo Reina | System Halted - Next Chapter";
  const siteDescription =
    "VincenzoXP system has completed its execution. A new professional chapter is loading...";
  const siteUrl = "https://vincenzoxp.com";
  const ogImageUrl = `${siteUrl}/IMG_0760.jpeg`;

  return (
    <>
      <Head>
        {/* Metadati Standard */}
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Windows-logo.png" />

        {/* Open Graph / Social */}
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

      {/* FASE 1: BOOT SCREEN INIZIALE */}
      {stage === "BOOT" && (
        <BootScreen durationMs={2500} onComplete={() => setStage("DESKTOP_FLASH")} />
      )}

      {/* FASE 2: DESKTOP FLASH (PER UN SOLO SECONDO) */}
      {stage === "DESKTOP_FLASH" && (
        <main className={styles.main}>
          <div style={{ position: "relative", width: "100%", height: "100%" }}>
            <DesktopIcon
              appID={1}
              doubleClick={() => {}}
              title="Control Panel"
              img={{ src: "/IMG_0698.webp", height: 48, width: 48 }}
            />
            <DesktopIcon appID={2} doubleClick={() => {}} title="Recycling Bin" img={bin} />
            <DesktopIcon appID={3} doubleClick={() => {}} title="My Resume" img={pdf} />
            <DesktopIcon appID={4} doubleClick={() => {}} title="My LinkedIn" img={linkedin} />
            <DesktopIcon appID={5} doubleClick={() => {}} title="My Computer" img={mycomputer} />
            <DesktopIcon appID={6} doubleClick={() => {}} title="My Work" img={cmd} />
          </div>
          <StartBar disabled={true} />
        </main>
      )}

      {/* FASE 3: BIOS / SYSTEM HALTED PERMANENTE */}
      {stage === "BIOS" && <BiosScreen />}
    </>
  );
}
