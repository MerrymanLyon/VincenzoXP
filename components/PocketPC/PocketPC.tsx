import React, { useState, useEffect } from "react";
import styles from "./PocketPC.module.css";
import Image from "next/image";

// Import degli asset che hai già
import winLogo from "../../assets/winlogo.png"; // Controlla il percorso relativo corretto
import myComputer from "../../assets/desktop/mycomputer.png";
import myResume from "../../assets/desktop/myresume.png";
import outlookIcon from "../../assets/desktop/outlook.png";
import linkedinIcon from "../../assets/desktop/linkedin.png";

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
      {/* TOP BAR */}
      <div className={styles.topBar}>
        <div className={styles.topBarLeft}>
          {winLogo && <Image src={winLogo.src} alt="Start" width={16} height={16} />}
          <span className={styles.startTitle}>Start</span>
        </div>
        <div className={styles.topBarRight}>
          <span>🔊</span>
          <span>🔋</span>
          <span>{time || "12:00"}</span>
        </div>
      </div>

      {/* TODAY SCREEN CONTENT */}
      <div className={styles.content}>
        <div className={styles.headerSection}>
          <div className={styles.dateText}>
            {new Date().toLocaleDateString("en-US", {
              weekday: "long",
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </div>
          <div className={styles.ownerText}>Vincenzo Reina</div>
          <div className={styles.statusText}>Senior Brand & GTM</div>
        </div>

        <div className={styles.itemList}>
          {/* VOCE 1: RESUME */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.itemRow}
          >
            <div className={styles.itemLeft}>
              {myResume ? (
                <Image src={myResume.src} alt="Resume" width={20} height={20} />
              ) : (
                "📄"
              )}
              <span>My Resume (CV)</span>
            </div>
            <span className={styles.arrow}>➔</span>
          </a>

          {/* VOCE 2: OUTLOOK / MAILTO */}
          <a
            href="mailto:vincenzo.reina@outlook.it"
            className={styles.itemRow}
          >
            <div className={styles.itemLeft}>
              {outlookIcon ? (
                <Image src={outlookIcon.src} alt="Outlook" width={20} height={20} />
              ) : (
                "✉️"
              )}
              <span>Send Email (Mailto)</span>
            </div>
            <span className={styles.arrow}>➔</span>
          </a>

          {/* VOCE 3: CHIAMA */}
          <a href="tel:+393000000000" className={styles.itemRow}>
            <div className={styles.itemLeft}>
              <span>📞</span>
              <span>Call Me</span>
            </div>
            <span className={styles.arrow}>➔</span>
          </a>

          {/* VOCE 4: WORK EXPERIENCE & EDU */}
          <div
            className={styles.itemRow}
            onClick={() => setShowExpModal(true)}
          >
            <div className={styles.itemLeft}>
              <span>💼</span>
              <span>Work Experience & Education</span>
            </div>
            <span className={styles.arrow}>➔</span>
          </div>

          {/* VOCE 5: LINKEDIN */}
          <a
            href="https://www.linkedin.com/in/vincenzo-reina"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.itemRow}
          >
            <div className={styles.itemLeft}>
              {linkedinIcon ? (
                <Image src={linkedinIcon.src} alt="LinkedIn" width={20} height={20} />
              ) : (
                "🔗"
              )}
              <span>LinkedIn Profile</span>
            </div>
            <span className={styles.arrow}>➔</span>
          </a>
        </div>
      </div>

      {/* MODAL ESPERIENZE */}
      {showExpModal && (
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <span className={styles.modalTitle}>Experience & Edu</span>
            <button
              className={styles.closeBtn}
              onClick={() => setShowExpModal(false)}
            >
              Close ✕
            </button>
          </div>

          <div className={styles.card}>
            <div className={styles.cardTitle}>Senior Brand & GTM Manager</div>
            <div className={styles.cardSubtitle}>2022 - Present</div>
            <div className={styles.cardDesc}>
              Leading GTM strategies, brand positionings, and marketing campaigns.
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardTitle}>Marketing & Brand Specialist</div>
            <div className={styles.cardSubtitle}>2019 - 2022</div>
            <div className={styles.cardDesc}>
              Managed digital campaigns, communications, and product launches.
            </div>
          </div>

          <div className={styles.card}>
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
          {myComputer && (
            <Image src={myComputer.src} alt="Desktop" width={16} height={16} />
          )}
          <span>Full XP Desktop</span>
        </button>

        <button className={styles.bottomButton} onClick={handleShare}>
          <span>🔗</span>
          <span>Share</span>
        </button>
      </div>
    </div>
  );
};

export default PocketPC;
