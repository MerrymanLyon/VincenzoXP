import React, { useState, useEffect } from "react";
import styles from "./PocketPC.module.css";
import Image from "next/image";

// Import degli asset
import mycomputer from "../../assets/mycomputer.png";
import pdf from "../../assets/pdf.png";
import linkedin from "../../assets/linkedin.png";
import winLogo from "../../assets/winlogo.png";

interface PocketPCProps {
  onSwitchToDesktop: () => void;
}

const PocketPC: React.FC<PocketPCProps> = ({ onSwitchToDesktop }) => {
  const [time, setTime] = useState("");
  const [showExpModal, setShowExpModal] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 10000);
    return () => clearInterval(interval);
  }, []);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Vincenzo Reina - Portfolio",
          url: window.location.href,
        });
      } catch (err) {
        console.log("Share cancelled");
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copiato negli appunti!");
    }
  };

  return (
    <div className={styles.container}>
      {/* TOP BAR WINDOWS MOBILE */}
      <div className={styles.topBar}>
        <div className={styles.topBarLeft}>
          {winLogo && (
            <Image
              src={winLogo.src}
              alt="Start"
              width={14}
              height={14}
              className={styles.todayIcon}
            />
          )}
          <span className={styles.startTitle}>Start</span>
        </div>
        <div className={styles.topBarRight}>
          <span>{time || "12:00"}</span>
        </div>
      </div>

      {/* TODAY SCREEN (MENU A RIGHE DIVISE) */}
      <div className={styles.content}>
        {/* RIGA DATA & UTENTE */}
        <div className={`${styles.todayRow} ${styles.headerRow}`}>
          <div className={styles.todayLeft}>
            <div>
              <div>Vincenzo Reina</div>
              <div className={styles.subText}>Senior Brand & GTM Strategist</div>
            </div>
          </div>
        </div>

        {/* RIGA STATUS */}
        <div className={styles.todayRow}>
          <span>Status: Open to new opportunities</span>
        </div>

        {/* VOCE 1: RESUME (PDF) */}
        <a
          href="./Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.todayRow}
        >
          <div className={styles.todayLeft}>
            {pdf && (
              <Image
                src={pdf.src}
                alt="Resume"
                className={styles.todayIcon}
                width={16}
                height={16}
              />
            )}
            <span>My Resume (CV.pdf)</span>
          </div>
        </a>

        {/* VOCE 2: OUTLOOK / MAILTO */}
        <a href="mailto:vincenzo.reina@outlook.it" className={styles.todayRow}>
          <div className={styles.todayLeft}>
            <span>✉</span>
            <span>Send Email</span>
          </div>
        </a>

        {/* VOCE 3: CALL ME */}
        <a href="tel:+390000000000" className={styles.todayRow}>
          <div className={styles.todayLeft}>
            <span>✆</span>
            <span>Call Me</span>
          </div>
        </a>

        {/* VOCE 4: WORK EXPERIENCE & EDUCATION */}
        <div className={styles.todayRow} onClick={() => setShowExpModal(true)}>
          <div className={styles.todayLeft}>
            {mycomputer && (
              <Image
                src={mycomputer.src}
                alt="Work"
                className={styles.todayIcon}
                width={16}
                height={16}
              />
            )}
            <span>Work Experience & Education</span>
          </div>
        </div>

        {/* VOCE 5: LINKEDIN */}
        <a
          href="https://www.linkedin.com/in/vincenzo-reina/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.todayRow}
        >
          <div className={styles.todayLeft}>
            {linkedin && (
              <Image
                src={linkedin.src}
                alt="LinkedIn"
                className={styles.todayIcon}
                width={16}
                height={16}
              />
            )}
            <span>LinkedIn Profile</span>
          </div>
        </a>
      </div>

      {/* LOGO WINDOWS XP WATERMARK IN BASSO A DESTRA (IMG_0689.webp) */}
      <div className={styles.winLogoWatermark}>
        <Image
          src="/IMG_0689.webp"
          alt="Windows Logo"
          width={85}
          height={70}
          className={styles.winLogoImage}
        />
      </div>

      {/* MODAL WORK EXPERIENCE */}
      {showExpModal && (
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <span className={styles.modalTitle}>Experience & Education</span>
            <button
              className={styles.closeBtn}
              onClick={() => setShowExpModal(false)}
            >
              Close ✕
            </button>
          </div>

          <div className={styles.modalRow}>
            <div className={styles.cardTitle}>Senior Brand & GTM Strategist</div>
            <div className={styles.cardSubtitle}>2022 - Present</div>
            <div className={styles.cardDesc}>
              Leading GTM strategies, brand positioning, and marketing campaigns.
            </div>
          </div>

          <div className={styles.modalRow}>
            <div className={styles.cardTitle}>Marketing & Brand Specialist</div>
            <div className={styles.cardSubtitle}>2019 - 2022</div>
            <div className={styles.cardDesc}>
              Managed digital campaigns, communications, and product launches.
            </div>
          </div>

          <div className={styles.modalRow}>
            <div className={styles.cardTitle}>Education & Degree</div>
            <div className={styles.cardSubtitle}>University</div>
            <div className={styles.cardDesc}>
              Bachelor / Master Degree in Marketing & Communication.
            </div>
          </div>
        </div>
      )}

      {/* BOTTOM BAR */}
      <div className={styles.bottomBar}>
        <button className={styles.bottomButton} onClick={onSwitchToDesktop}>
          {mycomputer && (
            <Image
              src={mycomputer.src}
              alt="Desktop"
              width={14}
              height={14}
              className={styles.todayIcon}
            />
          )}
          <span>Full XP Desktop</span>
        </button>

        <button className={styles.bottomButton} onClick={handleShare}>
          <span>Share</span>
        </button>
      </div>
    </div>
  );
};

export default PocketPC;
