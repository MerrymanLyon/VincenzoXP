import React, { useState, useEffect } from "react";
import styles from "./PocketPC.module.css";
import Image from "next/image";

// Import degli asset del progetto
import mycomputer from "../../assets/mycomputer.png";
import pdf from "../../assets/pdf.png";
import linkedin from "../../assets/linkedin.png";
import cmdIcon from "../../assets/cmd.png";
import docIcon from "../../assets/doc.png";
import butterflyIcon from "../../assets/butterfly.png";
import sendmailIcon from "../../assets/toolbar/sendmail.png";

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
            style={{ imageRendering: "pixelated" }}
          />
          <span className={styles.startTitle}>Start</span>
        </div>
        <div className={styles.topBarRight}>
          <div className={styles.topStatus}>
            <span className={styles.greenDot}></span>
            <span>Open to opportunities</span>
          </div>
          <span>|</span>
          <span>{time || "12:00"}</span>
        </div>
      </div>

      {/* CONTENT AREA CON GRIGLIA DI ICONE */}
      <div className={styles.content}>
        {/* HEADER USER INFO */}
        <div className={styles.headerRow}>
          <div className={styles.ownerTitle}>Vincenzo Reina</div>
          <div className={styles.subText}>
            Brand Manager, Strategic Storyteller & GTM
          </div>
        </div>

        {/* GRIGLIA ICONE STILE DESKTOP */}
        <div className={styles.gridContainer}>
          {/* ICONA 1: EXPERIENCES */}
          <div
            className={styles.iconTile}
            onClick={() => setActiveModal("experiences")}
          >
            <Image
              src={cmdIcon.src}
              alt="Experiences"
              width={48}
              height={48}
              className={styles.iconImage}
            />
            <span className={styles.iconLabel}>Experiences</span>
          </div>

          {/* ICONA 2: EDUCATION */}
          <div
            className={styles.iconTile}
            onClick={() => setActiveModal("education")}
          >
            <Image
              src={docIcon.src}
              alt="Education"
              width={48}
              height={48}
              className={styles.iconImage}
            />
            <span className={styles.iconLabel}>Education</span>
          </div>

          {/* ICONA 3: MY RESUME */}
          <a
            href={encodeURI("./Copia di CV-Reina-2025_ENG_noport.pdf")}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.iconTile}
          >
            <Image
              src={pdf.src}
              alt="Resume"
              width={48}
              height={48}
              className={styles.iconImage}
            />
            <span className={styles.iconLabel}>My Resume</span>
          </a>

          {/* ICONA 4: CALL ME NOW */}
          <a href="tel:+393391929162" className={styles.iconTile}>
            <Image
              src="/Phone-15.png"
              alt="Phone"
              width={48}
              height={48}
              className={styles.iconImage}
            />
            <span className={styles.iconLabel}>Call Me</span>
          </a>

          {/* ICONA 5: SEND EMAIL */}
          <a
            href="mailto:Vincenzo.reina@outlook.it"
            className={styles.iconTile}
          >
            <Image
              src={sendmailIcon.src}
              alt="Email"
              width={48}
              height={48}
              className={styles.iconImage}
            />
            <span className={styles.iconLabel}>Send Email</span>
          </a>

          {/* ICONA 6: LINKEDIN */}
          <a
            href="https://www.linkedin.com/in/vincenzo-reina/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.iconTile}
          >
            <Image
              src={linkedin.src}
              alt="LinkedIn"
              width={48}
              height={48}
              className={styles.iconImage}
            />
            <span className={styles.iconLabel}>LinkedIn</span>
          </a>

          {/* ICONA 7: WHY XP RESUME */}
          <div
            className={styles.iconTile}
            onClick={() => setActiveModal("whyXP")}
          >
            <Image
              src={butterflyIcon.src}
              alt="Why XP"
              width={48}
              height={48}
              className={styles.iconImage}
            />
            <span className={styles.iconLabel}>Why XP?</span>
          </div>
        </div>
      </div>

      {/* WATERMARK WINDOWS LOGO */}
      <div className={styles.winLogoWatermark}>
        <Image
          src="/Windows-logo.png"
          alt="Windows Logo"
          width={110}
          height={88}
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
            <div className={styles.cardTitle}>
              Brand & Product Marketing Manager @{" "}
              <a
                href="https://www.exein.io"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#000080", textDecoration: "underline" }}
              >
                Exein
              </a>
            </div>
            <div className={styles.cardSubtitle}>
              Jan 2025 - Present | Rome, Latium, Italy (Hybrid)
            </div>
            <div className={styles.cardDesc}>
              Driving global brand equity, positioning, and end-to-end product marketing strategies for Exein, a pioneer in runtime security for embedded devices and Physical AI systems.
              <div className={styles.cardBullet}>
                Go-To-Market & Product Launch (Photon): Engineered narrative frameworks, positioning, and global launch collateral for Photon (eBPF-based runtime security solution) presented at RSA Conference in San Francisco.
              </div>
              <div className={styles.cardBullet}>
                Field Marketing & Global Events (Embedded World): Led marketing execution for Embedded World in Nuremberg, orchestrating live booth activations, keynote storytelling, and partner co-marketing.
              </div>
              <div className={styles.cardBullet}>
                Open Source & Developer Marketing (Pulsar): Architected community growth campaigns for Pulsar, bridging technical developer advocacy with executive positioning.
              </div>
              <div className={styles.cardBullet}>
                Analyst Relations & Executive Positioning: Managed strategic engagements with Gartner and key research firms, securing market recognition for Physical AI security.
              </div>
              <div className={styles.cardBullet}>
                Demand Gen & Infrastructure: Deployed HubSpot CRM automation and lead-nurturing workflows, managing a €700k+ budget and delivering 30+ complex multimedia assets.
              </div>
            </div>
          </div>

          <div className={styles.modalRow}>
            <div className={styles.cardTitle}>
              Marketing Communications Brand Manager @{" "}
              <a
                href="https://www.mashfrog.com/en"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#000080", textDecoration: "underline" }}
              >
                Mashfrog Group
              </a>
            </div>
            <div className={styles.cardSubtitle}>
              Mar 2022 - Dec 2024 | Greater Rome Area (Hybrid)
            </div>
            <div className={styles.cardDesc}>
              Strategic brand and communication consulting for key energy, telecommunications, and public utility leaders (Enel X Way, Enel X, Free To X, Alia Servizi Ambientali, Tiscali).
              <div className={styles.cardBullet}>
                Integrated Campaigns: Designed and executed integrated B2B, B2C, and B2G campaigns and brand awareness initiatives.
              </div>
              <div className={styles.cardBullet}>
                Environmental Campaign: Spearheaded the nationwide environmental campaign for Alia Servizi Ambientali in partnership with ANCI and CONAI.
              </div>
              <div className={styles.cardBullet}>
                Content & CRM: Managed content marketing, Salesforce Marketing Cloud CRM automation, and motorsport sponsorship content strategies for Enel X Way.
              </div>
            </div>
          </div>

          <div className={styles.modalRow}>
            <div className={styles.cardTitle}>
              Marketing Communications Brand Specialist @{" "}
              <a
                href="https://www.b2x.it"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#000080", textDecoration: "underline" }}
              >
                B2X S.r.l.
              </a>
            </div>
            <div className={styles.cardSubtitle}>
              Nov 2017 - Mar 2022 | Rome, Italy (Hybrid)
            </div>
            <div className={styles.cardDesc}>
              Managed omnichannel marketing and content governance for premium international luxury and consumer goods brands (Bvlgari Hotels & Resorts, Chicco, Goovi).
              <div className={styles.cardBullet}>
                Brand Alignment: Coordinated brand identity and content strategies across e-commerce platforms, blogs, websites, and social channels.
              </div>
              <div className={styles.cardBullet}>
                Digital Operations: Overseen CMS publishing, microcopy refinement, lead generation campaigns, and cross-functional international team alignment.
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
              <a
                href="https://www.iulm.it/en/iulm/ateneo/iulm-communication-school"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#000080", textDecoration: "underline" }}
              >
                IULM Communication School
              </a>{" "}
              | Nov 2016 – Jun 2017
            </div>
            <div className={styles.cardDesc}>
              Advanced specialization in narrative structures, creative writing, and story design applied to corporate communications and modern media.
              <div className={styles.cardBullet}>
                Core Focus: Transmedia storytelling, content architecture, brand narrative development, and editorial strategy across digital platforms.
              </div>
              <div className={styles.cardBullet}>
                Professional Impact: Strategic foundation used to translate complex technical concepts (Deep Tech, Physical AI, B2B) into compelling brand narratives.
              </div>
            </div>
          </div>

          <div className={styles.modalRow}>
            <div className={styles.cardTitle}>
              1° ciclo - Laurea L, Communication and Media Studies
            </div>
            <div className={styles.cardSubtitle}>
              <a
                href="https://www.iulm.it/en/home"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#000080", textDecoration: "underline" }}
              >
                IULM University
              </a>{" "}
              | Sep 2013 – Nov 2016
            </div>
            <div className={styles.cardDesc}>
              Comprehensive degree covering mass media dynamics, consumer behavior, advertising strategy, and digital marketing.
              <div className={styles.cardBullet}>
                Key Areas: Market analysis, media planning, advertising campaign design, visual communication, and public relations.
              </div>
              <div className={styles.cardBullet}>
                Strategic Value: Fundamental groundwork in media management and brand communication strategies.
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

          {/* CAPITOLO BRANDED VIDEO SHORT CON IMMAGINE CENTRATA */}
          <div className={styles.modalRow}>
            <div className={styles.cardTitle}>
              Deeptech Storytelling: Branded Short Film
            </div>
            <div className={styles.cardDesc}>
              To launch vincenzoxp.com beyond a standard portfolio reveal, I authored and directed a cinematic branded video short. By merging retro XP aesthetics with high-stakes narrative storytelling, the short film translated a personal brand strategy into an engaging visual experience that drove record engagement across executive stakeholders and digital communities.
            </div>
            <div style={{ display: "flex", justifyContent: "center", marginTop: "12px", marginBottom: "8px" }}>
              <img
                src="/638cb718-1ba6-48bf-bf6a-69bc70eac9aa.jpeg"
                alt="Branded Video Short Preview"
                style={{ width: "100%", maxWidth: "300px", height: "auto", borderRadius: "4px", border: "1px solid #7f9db9" }}
              />
            </div>
          </div>

          <div className={styles.modalRow}>
            <div className={styles.cardTitle}>
              From One Film to an Editorial Series
            </div>
            <div className={styles.cardDesc}>
              The launch film became the pilot of a recurring LinkedIn editorial strategy built on AI-generated video content. Its protagonist is my avatar, reimagined as a handmade rag puppet animated in a stop-motion style: a recognisable recurring character that gives every episode the same warm, tactile signature and makes technical topics approachable. Instead of one-off posts, the puppet turns my feed into a series with a cast, a tone of voice and a visual identity that audiences learn to recognise at a glance.
            </div>
            <div style={{ display: "flex", justifyContent: "center", marginTop: "12px", marginBottom: "8px" }}>
              <img
                src="/IMG_0721.png"
                alt="LinkedIn Launch Preview"
                style={{ width: "100%", maxWidth: "300px", height: "auto", borderRadius: "4px", border: "1px solid #7f9db9" }}
              />
            </div>
          </div>

          <div className={styles.modalRow}>
            <div className={styles.cardTitle}>
              Arcade Games: Built with Claude Code
            </div>
            <div style={{ display: "flex", justifyContent: "center", marginTop: "8px", marginBottom: "10px" }}>
              <img
                src="/whyxp/hack-fiction.jpg"
                alt="Hack Fiction"
                style={{ width: "100%", maxWidth: "300px", height: "auto", borderRadius: "4px", border: "1px solid #7f9db9" }}
              />
            </div>
            <div className={styles.cardDesc}>
              The site boots, then gets &ldquo;hacked&rdquo;: the BIOS reports a breach, and resolving the threats opens an arcade with two original minigames. <strong>San Tufellos</strong> is a top-down car chase through a pixel-art version of Rome&apos;s Tufello neighbourhood; <strong>The Good, the Bad &amp; the Zero-Day</strong> is a three-way spaghetti-western standoff where a red crow is the signal to draw.
              <div className={styles.cardBullet}>
                Creative Direction: hacker culture (CVEs, zero-days, the AEZAKMI cheat code) meets gamification (high scores with initials, CRT screens, INSERT COIN), videogame grammar (GTA-style missions and wanted stars) and cinema (Sergio Leone&apos;s close-ups on the eyes before the duel).
              </div>
              <div className={styles.cardBullet}>
                Human-AI Collaboration: I led as creative director and product owner, setting concept, references, art direction and game feel; Claude Code engineered the games, generating pixel art and sound procedurally and testing every build on desktop and phone. Moodboards first, then playable builds reviewed round after round.
              </div>
              <div className={styles.cardBullet}>
                Under the Hood: standalone HTML5 canvas, no engine and no asset files, synthesised Web Audio sound, 60 fps, keyboard and multi-touch controls in both orientations.
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center", marginTop: "12px", marginBottom: "8px" }}>
              <img
                src="/whyxp/zeroday.png"
                alt="The Good, the Bad & the Zero-Day"
                style={{ width: "100%", maxWidth: "300px", height: "auto", borderRadius: "4px", border: "1px solid #7f9db9" }}
              />
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
            style={{ imageRendering: "pixelated" }}
          />
          <span>Full XP Desktop</span>
        </button>

        <button className={styles.bottomButton} onClick={handleShare}>
          <Image
            src="/IMG_0695 2.png"
            alt="Share"
            width={16}
            height={16}
            style={{ imageRendering: "pixelated" }}
          />
          <span>Share</span>
        </button>
      </div>
    </div>
  );
};

export default PocketPC;
