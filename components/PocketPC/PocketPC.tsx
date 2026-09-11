import React, { useState, useEffect } from "react";
import styles from "./PocketPC.module.css";
import Image from "next/image";

// Import degli asset principali del progetto
import mycomputer from "../../assets/mycomputer.png";
import pdf from "../../assets/pdf.png";
import linkedin from "../../assets/linkedin.png";
import cmdIcon from "../../assets/cmd.png";
import docIcon from "../../assets/doc.png";

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
      alert("Link copied to clipboard!");
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
            width={16}
            height={16}
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

        {/* STATUS BAR */}
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
              width={18}
              height={18}
            />
            <span>Experiences</span>
          </div>
        </div>

        {/* EDUCATION (DOC.PNG) */}
        <div
          className={styles.todayRow}
          onClick={() => setActiveModal("education")}
        >
          <div className={styles.todayLeft}>
            <Image
              src={docIcon.src}
              alt="Education"
              className={styles.todayIcon}
              width={18}
              height={18}
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
              width={18}
              height={18}
            />
            <span>My Resume (CV.pdf)</span>
          </div>
        </a>

        {/* CALL ME NOW (PHONE-15.PNG) */}
        <a href="tel:+393391929162" className={styles.todayRow}>
          <div className={styles.todayLeft}>
            <Image
              src="/Phone-15.png"
              alt="Phone"
              className={styles.todayIcon}
              width={18}
              height={18}
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
              width={18}
              height={18}
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
              width={18}
              height={18}
            />
            <span>Why a Windows XP resume website?</span>
          </div>
        </div>
      </div>

      {/* INGRANDITO LOGO WINDOWS XP WATERMARK IN BASSO A DESTRA */}
      <div className={styles.winLogoWatermark}>
        <Image
          src="/Windows-logo.png"
          alt="Windows Logo"
          width={120}
          height={95}
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
              Jan 2025 - Present | Rome, Latium, Italy (Hybrid)[span_1](start_span)[span_1](end_span)
            </div>
            <div className={styles.cardDesc}>
              Driving global brand and product marketing strategies for Exein, a pioneer in runtime security for embedded and Physical AI systems[span_2](start_span)[span_2](end_span).
              <div className={styles.cardBullet}>
                Go-To-Market & Product Launches: Developed the narrative framework and GTM strategy for Photon (eBPF-based runtime security) at RSA Conference 2026 in San Francisco[span_3](start_span)[span_3](end_span).
              </div>
              <div className={styles.cardBullet}>
                Field Marketing & Global Events: Led end-to-end marketing operations for Embedded World 2026 in Nuremberg, managing field activations, live coverage, and partnership marketing[span_4](start_span)[span_4](end_span).
              </div>
              <div className={styles.cardBullet}>
                Analyst Relations & Executive Positioning: Managed ongoing engagement with Gartner and research firms; directed executive thought leadership initiatives globally[span_5](start_span)[span_5](end_span).
              </div>
              <div className={styles.cardBullet}>
                CRM & Automation: Implemented HubSpot CRM infrastructure, lead nurturing workflows, and agency coordination[span_6](start_span)[span_6](end_span).
              </div>
              <div className={styles.cardBullet}>
                Budget & Performance: Managed €700k+ marketing budget and delivered 30+ multimedia assets driving demand generation[span_7](start_span)[span_7](end_span).
              </div>
            </div>
          </div>

          <div className={styles.modalRow}>
            <div className={styles.cardTitle}>
              Marketing Communications Brand Manager @ Mashfrog Group
            </div>
            <div className={styles.cardSubtitle}>
              Mar 2022 - Dec 2024 | Greater Rome Area (Hybrid)[span_8](start_span)[span_8](end_span)
            </div>
            <div className={styles.cardDesc}>
              Strategic brand and communication consulting for key energy, telecommunications, and public utility leaders (Enel X Way, Enel X, Free To X, Alia Servizi Ambientali, Tiscali)[span_9](start_span)[span_9](end_span).
              <div className={styles.cardBullet}>
                Integrated Campaigns: Designed and executed B2B, B2C, and B2G campaigns and brand awareness initiatives[span_10](start_span)[span_10](end_span).
              </div>
              <div className={styles.cardBullet}>
                Environmental Campaign: Spearheaded the nationwide environmental campaign for Alia Servizi Ambientali with ANCI and CONAI[span_11](start_span)[span_11](end_span).
              </div>
              <div className={styles.cardBullet}>
                Content & CRM: Managed content marketing, Salesforce Marketing Cloud CRM automation, and motorsport partnerships for Enel X Way[span_12](start_span)[span_12](end_span).
              </div>
            </div>
          </div>

          <div className={styles.modalRow}>
            <div className={styles.cardTitle}>
              Marketing Communications Brand Specialist @ B2X S.r.l.
            </div>
            <div className={styles.cardSubtitle}>
              Nov 2017 - Mar 2022 | Rome, Italy (Hybrid)[span_13](start_span)[span_13](end_span)
            </div>
            <div className={styles.cardDesc}>
              Managed omnichannel marketing and content governance for premium international luxury and consumer goods brands (Bvlgari Hotels & Resorts, Chicco, Goovi)[span_14](start_span)[span_14](end_span).
              <div className={styles.cardBullet}>
                Brand Alignment: Coordinated brand identity and content strategies across e-commerce, blogs, and social platforms[span_15](start_span)[span_15](end_span).
              </div>
              <div className={styles.cardBullet}>
                Digital Operations: Overseen CMS publishing, microcopy refinement, lead generation, and performance metrics reporting[span_16](start_span)[span_16](end_span).
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 2: EDUCATION */}
      {activeModal === "education" && (
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <span className={styles.modalTitle}>Education & Academic Path</span>
            <button
              className={styles.closeBtn}
              onClick={() => setActiveModal(null)}
            >
              Close ✕
            </button>
          </div>

          <div className={styles.modalRow}>
            <div className={styles.cardTitle}>
              Master, Storytelling and Creative Writing
            </div>
            <div className={styles.cardSubtitle}>
              Scuola di Comunicazione IULM | Nov 2016 – Jun 2017[span_17](start_span)[span_17](end_span)
            </div>
            <div className={styles.cardDesc}>
              Advanced specialization in narrative structures, creative writing, and story design applied to corporate communications and modern media[span_18](start_span)[span_18](end_span).
              <div className={styles.cardBullet}>
                Core Focus: Transmedia storytelling, content architecture, brand narrative development, and editorial strategy across digital platforms[span_19](start_span)[span_19](end_span).
              </div>
              <div className={styles.cardBullet}>
                Professional Impact: Strategic foundation used to translate complex technical concepts (Deep Tech, Physical AI, B2B) into compelling brand narratives[span_20](start_span)[span_20](end_span).
              </div>
            </div>
          </div>

          <div className={styles.modalRow}>
            <div className={styles.cardTitle}>
              1° ciclo - Laurea L, Communication and Media Studies
            </div>
            <div className={styles.cardSubtitle}>
              IULM University | Sep 2013 – Nov 2016[span_21](start_span)[span_21](end_span)
            </div>
            <div className={styles.cardDesc}>
              Comprehensive degree covering mass media dynamics, consumer behavior, advertising strategy, and digital marketing[span_22](start_span)[span_22](end_span).
              <div className={styles.cardBullet}>
                Key Areas: Market analysis, media planning, advertising campaign design, visual communication, and public relations[span_23](start_span)[span_23](end_span).
              </div>
              <div className={styles.cardBullet}>
                Strategic Value: Fundamental groundwork in media management and brand communication strategies[span_24](start_span)[span_24](end_span).
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 3: WHY A WINDOWS XP RESUME WEBSITE */}
      {activeModal === "whyXP" && (
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <span className={styles.modalTitle}>
              Case Study: The Windows XP Portfolio
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
              Strategic Positioning & Concept
            </div>
            <div className={styles.cardDesc}>
              In an overcrowded market dominated by standardized PDF resumes, this project applies core Brand Management principles to personal positioning. By turning career credentials into an interactive, nostalgic Windows XP operating system, the portfolio captures recruiter attention, increases time-on-page, and bridges technical developer culture with strategic enterprise marketing.
            </div>
          </div>

          <div className={styles.modalRow}>
            <div className={styles.cardTitle}>
              Human-AI Collaboration & Tech Stack
            </div>
            <div className={styles.cardDesc}>
              Built as a hands-on technical experiment, this Web App demonstrates modern product execution through human-AI pair programming.
              <div className={styles.cardBullet}>
                Role Division: As Brand Manager, I defined the product vision, UI/UX architecture, copy, and visual assets, leveraging Gemini as an AI technical partner to engineer Next.js, React, and Redux logic.
              </div>
              <div className={styles.cardBullet}>
                Implementation Steps: Built custom windowing managers, integrated EmailJS REST endpoints, implemented adaptive viewports, and created a Pocket PC (Windows Mobile 2003) interface specifically engineered for mobile devices.
              </div>
            </div>
          </div>

          <button className={styles.modalCtaBtn} onClick={onSwitchToDesktop}>
            🖥️ Experience Full Desktop XP Version
          </button>
        </div>
      )}

      {/* BOTTOM BAR */}
      <div className={styles.bottomBar}>
        <button className={styles.bottomButton} onClick={onSwitchToDesktop}>
          <Image
            src={mycomputer.src}
            alt="Desktop"
            width={16}
            height={16}
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
