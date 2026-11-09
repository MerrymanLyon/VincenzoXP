import React, { useState } from "react";
import Image from "next/image";
import WinAccordion from "components/WinAccordion/WinAccordion";
import emptyfile from "../../assets/workaccordion/emptyfile.png";
import styles from "./WhyXP.module.css";

interface WhyXPProps {
  id?: number;
}

const WhyXP: React.FC<WhyXPProps> = () => {
  const [activeTab, setActiveTab] = useState<"overview" | "branded_short" | "arcade">(
    "overview"
  );

  return (
    <div className={styles.main}>
      {/* SIDEBAR LARGHEZZA 220PX */}
      <div className={styles.leftpanel}>
        <WinAccordion title="Personal Branding">
          <div
            className={styles.accordion_content_item}
            onClick={() => setActiveTab("overview")}
          >
            <div className={styles.accordion_content_text}>
              <Image
                alt="file"
                src={emptyfile.src}
                height={15}
                width={15}
              />
              <p
                style={{
                  fontWeight: activeTab === "overview" ? "bold" : "normal",
                  margin: 0,
                }}
              >
                System &amp; Brand activation
              </p>
            </div>
          </div>

          <div
            className={styles.accordion_content_item}
            onClick={() => setActiveTab("branded_short")}
          >
            <div className={styles.accordion_content_text}>
              <Image
                alt="file"
                src={emptyfile.src}
                height={15}
                width={15}
              />
              <p
                style={{
                  fontWeight: activeTab === "branded_short" ? "bold" : "normal",
                  margin: 0,
                }}
              >
                Branded short
              </p>
            </div>
          </div>

          <div
            className={styles.accordion_content_item}
            onClick={() => setActiveTab("arcade")}
          >
            <div className={styles.accordion_content_text}>
              <Image
                alt="file"
                src={emptyfile.src}
                height={15}
                width={15}
              />
              <p
                style={{
                  fontWeight: activeTab === "arcade" ? "bold" : "normal",
                  margin: 0,
                }}
              >
                Arcade games
              </p>
            </div>
          </div>
        </WinAccordion>
      </div>

      {/* PANNELLO DESTRO CONTENUTI */}
      <div className={styles.rightpanel}>
        {activeTab === "overview" && (
          <div>
            <h2
              style={{
                fontSize: "17px",
                color: "#000080",
                marginTop: 0,
                borderBottom: "2px solid #000080",
                paddingBottom: "4px",
              }}
            >
              Why XP? System &amp; Brand Architecture
            </h2>

            <div style={{ marginBottom: "20px" }}>
              <h3 style={{ fontSize: "13px", color: "#000080", marginBottom: "6px" }}>
                Why an OS website?
              </h3>
              <p style={{ margin: 0 }}>
                I’ve always approached personal branding through unconventional, high-concept narratives—from designing my CV as a{" "}
                <a
                  href="https://vincenzoreina-flix.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#000080", textDecoration: "underline" }}
                >
                  Netflix-style streaming platform
                </a>{" "}
                to structuring it as a{" "}
                <a
                  href="https://vincenzoreinastorytellingmenu.my.canva.site/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#000080", textDecoration: "underline" }}
                >
                  fine-dining restaurant menu
                </a>
                . Choosing an interactive Windows XP OS interface is a deliberate extension of this philosophy: it bridges the gap between underground hacker/dev culture and high-level enterprise positioning, perfectly aligning with my dev-centric approach to marketing.
              </p>
            </div>

            <div style={{ marginBottom: "20px" }}>
              <h3 style={{ fontSize: "13px", color: "#000080", marginBottom: "6px" }}>
                Why an XP design?
              </h3>
              <p style={{ margin: "0 0 8px 0" }}>
                Windows XP was my very first computer—a nostalgic gateway that shaped my digital mindset. Access to such an intuitive interface during my childhood introduced me to the web early on, sparking an early passion for HTML coding, video editing, and graphic design throughout my teenage years. In the early 2000s, Windows XP represented a pivotal milestone, granting an entire generation its first meaningful access to personal computing and digital tools.
              </p>
              <p style={{ margin: 0 }}>
                Recreating this operating system as a web application served as a hands-on technical experiment. Engineered through human-AI pair programming with Gemini, this project allowed me to master modern frontend architectures—leveraging React, Next.js, and Redux logic to build dynamic window managers, custom responsive viewports (like the mobile Pocket PC interface), and REST API integrations.
              </p>
            </div>

            <div>
              <h3 style={{ fontSize: "13px", color: "#000080", marginBottom: "6px" }}>
                Why a digital portfolio?
              </h3>
              <p style={{ margin: 0 }}>
                In modern brand management, an omnichannel strategy is the single most effective way to convey any message. When a brand identity is strong and its core positioning flows cohesively across every digital touchpoint, communication becomes unmistakable. In an overcrowded market dominated by static, standardized PDF resumes, this interactive web portfolio captures recruiter attention, maximizes time-on-page, and turns professional credentials into an immersive brand experience.
              </p>
            </div>
          </div>
        )}

        {activeTab === "branded_short" && (
          <div>
            <h2
              style={{
                fontSize: "17px",
                color: "#000080",
                marginTop: 0,
                borderBottom: "2px solid #000080",
                paddingBottom: "4px",
              }}
            >
              Behind the Pixels: The Stop-Motion Story
            </h2>

            {/* SEZIONE 1 */}
            <div style={{ marginBottom: "16px" }}>
              <h3 style={{ fontSize: "13px", color: "#000080", marginBottom: "6px" }}>
                Crafting the Omnichannel Narrative
              </h3>
              <p style={{ margin: 0 }}>
                To complete the Windows XP digital ecosystem, I created a high-concept video trailer that serves as a narrative bridge. Rather than a standard screen recording, this introductory artifact recontextualizes the portfolio launch as a clandestine, late-night operation, grounding the website&apos;s dev persona within a tangible, physical world through stop-motion aesthetics.
              </p>

              {/* IMMAGINE 1 DOPO "...aesthetics." */}
              <div className={styles.imagePreviewContainer}>
                <img
                  src="/638cb718-1ba6-48bf-bf6a-69bc70eac9aa.jpeg"
                  alt="Production Pipeline Preview"
                  className={styles.previewImage}
                />
              </div>
            </div>

            {/* SEZIONE 2 */}
            <div style={{ marginBottom: "16px" }}>
              <h3 style={{ fontSize: "13px", color: "#000080", marginBottom: "6px" }}>
                Ideation &amp; Human-AI Production Pipeline
              </h3>
              <p style={{ margin: 0 }}>
                My creative process combined generative AI with traditional post-production into an agile pipeline. Starting from a storyboard refined with Gemini, I generated reference sets in Midjourney, synthesized the voiceover via ElevenLabs, and edited the final composite in DaVinci Resolve—moulding the visuals with a subtle nod to Wes Anderson&apos;s stop-motion style to contrast the high-tech OS with a warm, analogue feel.
              </p>

              {/* IMMAGINE 2 DOPO "...feel." */}
              <div className={styles.imagePreviewContainer}>
                <img
                  src="/IMG_0721.png"
                  alt="LinkedIn Launch Preview"
                  className={styles.previewImage}
                />
              </div>
            </div>

            {/* SEZIONE 3 */}
            <div>
              <h3 style={{ fontSize: "13px", color: "#000080", marginBottom: "6px" }}>
                The Social Amplifier: The LinkedIn Launch
              </h3>
              <p style={{ margin: 0 }}>
                Positioned as the centerpiece of my LinkedIn launch strategy, the video operates as a high-impact, thumb-stopping asset designed to hijack attention in professional feeds. By deploying the trailer alongside the interactive site, I executed a cohesive omnichannel experience where cinematic storytelling drives traffic directly to my interactive portfolio.
              </p>
            </div>

            {/* SEZIONE 4: DAL CORTO ALLA STRATEGIA EDITORIALE */}
            <div style={{ marginTop: "16px" }}>
              <h3 style={{ fontSize: "13px", color: "#000080", marginBottom: "6px" }}>
                From One Film to an Editorial Series
              </h3>
              <p style={{ margin: 0 }}>
                The launch film became the pilot of a recurring LinkedIn editorial strategy built on AI-generated video content. Its protagonist is my avatar, reimagined as a handmade rag puppet animated in a stop-motion style: a recognisable recurring character that gives every episode the same warm, tactile signature and makes technical topics approachable. Instead of one-off posts, the puppet turns my feed into a series with a cast, a tone of voice and a visual identity that audiences learn to recognise at a glance.
              </p>
            </div>
          </div>
        )}

        {activeTab === "arcade" && (
          <div>
            <h2
              style={{
                fontSize: "17px",
                color: "#000080",
                marginTop: 0,
                borderBottom: "2px solid #000080",
                paddingBottom: "4px",
              }}
            >
              Threat Resolver: Two Games Built with Claude Code
            </h2>

            <div style={{ marginBottom: "16px" }}>
              <h3 style={{ fontSize: "13px", color: "#000080", marginBottom: "6px" }}>
                The Concept: When the Hack Becomes a Game
              </h3>
              <p style={{ margin: 0 }}>
                The site boots, then gets &ldquo;hacked&rdquo;: the BIOS reports a breach and a system error offers a choice. Ignore the threats and go back to the desktop, or resolve them and open an arcade. The hacker narrative stops being decoration and becomes the way in to two original minigames: <strong>San Tufellos</strong>, a top-down car chase through a pixel-art version of Rome&apos;s Tufello neighbourhood where you carry a CVE patch to HQ with the police on your tail, and <strong>The Good, the Bad &amp; the Zero-Day</strong>, a three-way spaghetti-western standoff where a red crow is the signal to draw and every decoy punishes the trigger-happy.
              </p>
              <div className={styles.imagePreviewContainer}>
                <img src="/whyxp/zeroday.png" alt="The Good, the Bad & the Zero-Day" className={styles.previewImage} />
              </div>
            </div>

            <div style={{ marginBottom: "16px" }}>
              <h3 style={{ fontSize: "13px", color: "#000080", marginBottom: "6px" }}>
                Creative Direction: Hacker Culture &times; Games &times; Cinema
              </h3>
              <p style={{ margin: 0 }}>
                Every detail mixes the same four ingredients. Hacker culture gives the story: CVEs, zero-days and a cheat code (AEZAKMI) used as plot devices. Gamification gives the hooks: high-score tables with three-letter initials, CRT screens, INSERT COIN, honour stars and wanted levels. Videogames give the grammar: GTA-style mission banners, drifts and turbo boosts. Cinema gives the tension: Sergio Leone&apos;s extreme close-ups on the eyes before the duel, the long wait, the single shot.
              </p>
              <div className={styles.imagePreviewContainer}>
                <img src="/whyxp/santufellos.png" alt="San Tufellos" className={styles.previewImage} />
              </div>
            </div>

            <div style={{ marginBottom: "16px" }}>
              <h3 style={{ fontSize: "13px", color: "#000080", marginBottom: "6px" }}>
                Human-AI Collaboration: Direction and Execution
              </h3>
              <p style={{ margin: 0 }}>
                I worked as creative director and product owner; Claude Code was the engineering partner. I set the concept, the references, the art direction and the game feel, and made the call on every iteration. Claude Code wrote the code, generated pixel art and sound procedurally, and tested each build on desktop and phone screens. The process ran like a studio pipeline: moodboards first, then playable builds reviewed round after round, with feedback as concrete as &ldquo;the gunslinger keeps his arms under the cape&rdquo; or &ldquo;the DRAW sign is too big&rdquo;. Taste and decisions stayed human; speed and execution scaled with AI.
              </p>
            </div>

            <div>
              <h3 style={{ fontSize: "13px", color: "#000080", marginBottom: "6px" }}>
                Under the Hood
              </h3>
              <p style={{ margin: 0 }}>
                Both games are standalone HTML5 canvas apps with no game engine and no image or audio files: every sprite is drawn in code and every sound is synthesised live with the Web Audio API. They run at a fixed 60 fps with pixel-perfect scaling, support keyboard and multi-touch controls in both phone orientations, and open inside a real Windows XP window of this site.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WhyXP;
