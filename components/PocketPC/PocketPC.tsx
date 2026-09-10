import React, { useState, useEffect } from "react";
import styles from "./PocketPC.module.css";
import Image from "next/image";

// Import degli asset principali del progetto
import mycomputer from "../../assets/mycomputer.png";
import pdf from "../../assets/pdf.png";
import linkedin from "../../assets/linkedin.png";
import cmdIcon from "../../assets/cmd.png";

interface PocketPCProps {
  onSwitchToDesktop: () => void;
}

type ModalType = "experiences" | "education" | "whyXP" | null;

const PocketPC: React.FC<PocketPCProps> = ({ onSwitchToDesktop }) => {
  const [time, setTime] = useState("");
  const [activeModal, setActiveModal] = useState<ModalType>(null);

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
          <Image
            src="/Windows-logo.png"
            alt="Start"
            width={14}
            height={14}
            className={styles.todayIcon}
          />
          <span className={styles.startTitle}>Start</span>
        </div>
        <div className={styles.topBarRight}>
          <span>{time || "12:00"}</span>
        </div>
      </div>

      {/* TODAY SCREEN MENU */}
      <div className={styles.content}>
        {/* HEADER UTENTE */}
        <div className={`${styles.todayRow} ${styles.headerRow}`}>
          <div className={styles.todayLeft}>
            <div>
              <div className={styles.ownerTitle}>Vincenzo Reina</div>
              <div className={styles.subText}>
                Brand Manager & Strategic Storyteller
              </div>
            </div>
          </div>
        </div>

        {/* STATUS BAR CON PALLINO VERDE */}
        <div className={styles.statusRow}>
          <span className={styles.greenDot}></span>
          <span>Status: Open to new opportunities</span>
        </div>

        {/* EXPERIENCES (TERMINALE CMD) */}
        <div
          className={styles.todayRow}
          onClick={() => setActiveModal("experiences")}
        >
          <div className={styles.todayLeft}>
            <Image
              src={cmdIcon.src}
              alt="Experiences"
              className={styles.todayIcon}
              width={16}
              height={16}
            />
            <span>Experiences</span>
          </div>
        </div>

        {/* EDUCATION (ICON DOCUMENTO EDUCATION) */}
        <div
          className={styles.todayRow}
          onClick={() => setActiveModal("education")}
        >
          <div className={styles.todayLeft}>
            <Image
              src={pdf.src}
              alt="Education"
              className={styles.todayIcon}
              width={16}
              height={16}
            />
            <span>Education</span>
          </div>
        </div>

        {/* RESUME PDF */}
        <a
          href="./Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.todayRow}
        >
          <div className={styles.todayLeft}>
            <Image
              src={pdf.src}
              alt="Resume"
              className={styles.todayIcon}
              width={16}
              height={16}
            />
            <span>My Resume (CV.pdf)</span>
          </div>
        </a>

        {/* CALL ME NOW (IMG_0691.png) */}
        <a href="tel:+393391929162" className={styles.todayRow}>
          <div className={styles.todayLeft}>
            <Image
              src="/IMG_0691.png"
              alt="Phone"
              className={styles.todayIcon}
              width={16}
              height={16}
            />
            <span>Call me now (+39 339 1929162)</span>
          </div>
        </a>

        {/* LINKEDIN PROFILE */}
        <a
          href="https://www.linkedin.com/in/vincenzo-reina/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.todayRow}
        >
          <div className={styles.todayLeft}>
            <Image
              src={linkedin.src}
              alt="LinkedIn"
              className={styles.todayIcon}
              width={16}
              height={16}
            />
            <span>LinkedIn Profile</span>
          </div>
        </a>

        {/* WHY A WINDOWS XP RESUME WEBSITE */}
        <div
          className={styles.todayRow}
          onClick={() => setActiveModal("whyXP")}
        >
          <div className={styles.todayLeft}>
            <Image
              src={mycomputer.src}
              alt="Why XP"
              className={styles.todayIcon}
              width={16}
              height={16}
            />
            <span>Why a Windows XP resume website?</span>
          </div>
        </div>
      </div>

      {/* LOGO WINDOWS WATERMARK IN BASSO A DESTRA */}
      <div className={styles.winLogoWatermark}>
        <Image
          src="/Windows-logo.png"
          alt="Windows Logo"
          width={80}
          height={65}
          className={styles.winLogoImage}
        />
      </div>

      {/* MODAL 1: EXPERIENCES */}
      {activeModal === "experiences" && (
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <span className={styles.modalTitle}>Work Experiences</span>
            <button
              className={styles.closeBtn}
              onClick={() => setActiveModal(null)}
            >
              Close ✕
            </button>
          </div>

          <div className={styles.modalRow}>
            <div className={styles.cardTitle}>Brand Manager @ Exein</div>
            <div className={styles.cardSubtitle}>
              Jan 2025 - Present | Rome (Hybrid)[span_0](start_span)[span_0](end_span)
            </div>
            <div className={styles.cardDesc}>
              Guido la strategia globale di brand e product marketing per la sicurezza IoT e Physical AI[span_1](start_span)[span_1](end_span).
              <div className={styles.cardBullet}>
                GTM & Launch: Sviluppato narrative e strategia per il lancio di Photon a RSA Conference San Francisco[span_2](start_span)[span_2](end_span).
              </div>
              <div className={styles.cardBullet}>
                Field Marketing: Gestito operazioni e live coverage ad Embedded World Norimberga[span_3](start_span)[span_3](end_span).
              </div>
              <div className={styles.cardBullet}>
                Growth & Budget: Gestito budget marketing di €700k+ coordinando 30+ asset multimediali[span_4](start_span)[span_4](end_span).
              </div>
            </div>
          </div>

          <div className={styles.modalRow}>
            <div className={styles.cardTitle}>
              Marketing Communications Brand Manager @ Mashfrog Group[span_5](start_span)[span_5](end_span)
            </div>
            <div className={styles.cardSubtitle}>
              Mar 2022 - Dec 2024 | Rome[span_6](start_span)[span_6](end_span)
            </div>
            <div className={styles.cardDesc}>
              Consulenza strategica di brand per big player nei settori energia, telco e utility (Enel X Way, Enel X, Alia)[span_7](start_span)[span_7](end_span).
              <div className={styles.cardBullet}>
                Campaigns: Progettato e diretto campagne integrate B2B, B2C e B2G[span_8](start_span)[span_8](end_span).
              </div>
              <div className={styles.cardBullet}>
                CRM & Content: Gestito automazione CRM (Salesforce) e partnership motorsport[span_9](start_span)[span_9](end_span).
              </div>
            </div>
          </div>

          <div className={styles.modalRow}>
            <div className={styles.cardTitle}>
              Marketing Communications Brand Specialist @ B2X S.r.l.[span_10](start_span)[span_10](end_span)
            </div>
            <div className={styles.cardSubtitle}>
              Nov 2017 - Mar 2022 | Rome[span_11](start_span)[span_11](end_span)
            </div>
            <div className={styles.cardDesc}>
              Coordinamento della strategia di brand omnichannel per brand di lusso e consumer goods (Bvlgari Hotels, Chicco, Goovi)[span_12](start_span)[span_12](end_span).
            </div>
          </div>
        </div>
      )}

      {/* MODAL 2: EDUCATION */}
      {activeModal === "education" && (
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <span className={styles.modalTitle}>Education & Qualifications</span>
            <button
              className={styles.closeBtn}
              onClick={() => setActiveModal(null)}
            >
              Close ✕
            </button>
          </div>

          <div className={styles.modalRow}>
            <div className={styles.cardTitle}>
              Master, Storytelling and Creative Writing[span_13](start_span)[span_13](end_span)
            </div>
            <div className={styles.cardSubtitle}>
              Scuola di Comunicazione IULM (2016 - 2017)[span_14](start_span)[span_14](end_span)
            </div>
            <div className={styles.cardDesc}>
              Specializzazione avanzata in strutture narrative, transmedia storytelling e content architecture[span_15](start_span)[span_15](end_span).
              Fondamentale per tradurre concetti tecnologici complessi (Deep Tech, Physical AI) in narrazioni di brand efficaci[span_16](start_span)[span_16](end_span).
            </div>
          </div>

          <div className={styles.modalRow}>
            <div className={styles.cardTitle}>
              Laurea Triennale in Comunicazione e Media Studies[span_17](start_span)[span_17](end_span)
            </div>
            <div className={styles.cardSubtitle}>
              IULM University (2013 - 2016)[span_18](start_span)[span_18](end_span)
            </div>
            <div className={styles.cardDesc}>
              Percorso focalizzato su dinamiche dei mass media, psicologia dei consumi, strategie pubblicitarie e digital marketing[span_19](start_span)[span_19](end_span).
            </div>
          </div>
        </div>
      )}

      {/* MODAL 3: WHY A WINDOWS XP RESUME WEBSITE */}
      {activeModal === "whyXP" && (
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <span className={styles.modalTitle}>
              Why a Windows XP Resume?
            </span>
            <button
              className={styles.closeBtn}
              onClick={() => setActiveModal(null)}
            >
              Close ✕
            </button>
          </div>

          <div className={styles.modalRow}>
            <div className={styles.cardTitle}>
              Strategia di Posizionamento & Storytelling
            </div>
            <div className={styles.cardDesc}>
              In un mercato saturo di CV piatti in PDF, questo sito nasce per applicare direttamente il mio background di Brand Manager: catturare l&apos;attenzione trasformando le informazioni professionali in un&apos;esperienza interattiva e memorabile.
            </div>
          </div>

          <div className={styles.modalRow}>
            <div className={styles.cardTitle}>
              Uso Creativo dell&apos;AI: Vincenzo & Gemini
            </div>
            <div className={styles.cardDesc}>
              Questo progetto dimostra come la collaborazione uomo-AI possa abbattere le barriere tecniche. Con pochissime conoscenze di codice React/Next.js, ho guidato l&apos;architettura visiva, la logica di prodotto e il copy, utilizzando Gemini come pair-programmer per sviluppare, debuggare e rendere totalmente responsive una Web App complessa.
            </div>
          </div>
        </div>
      )}

      {/* BOTTOM BAR */}
      <div className={styles.bottomBar}>
        <button className={styles.bottomButton} onClick={onSwitchToDesktop}>
          <Image
            src={mycomputer.src}
            alt="Desktop"
            width={14}
            height={14}
            className={styles.todayIcon}
          />
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
