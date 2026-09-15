import React, { useState } from "react";
import Image from "next/image";
import WinAccordion from "components/WinAccordion/WinAccordion";
import emptyfile from "../../assets/workaccordion/emptyfile.png";
import styles from "./WhyXP.module.css";

interface WhyXPProps {
  id?: number;
}

const WhyXP: React.FC<WhyXPProps> = () => {
  const [activeTab, setActiveTab] = useState<"overview" | "branded_short">(
    "overview"
  );

  return (
    <div className={styles.main}>
      {/* SIDEBAR COMPATTA */}
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
        </WinAccordion>
      </div>

      {/* PANNELLO DESTRO CON CONTENUTI */}
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

            <div style={{ marginBottom: "16px" }}>
              <h3 style={{ fontSize: "13px", color: "#000080", marginBottom: "6px" }}>
                Crafting the Omnichannel Narrative
              </h3>
              <p style={{ margin: 0 }}>
                To complete the Windows XP digital ecosystem, I created a high-concept video trailer that serves as a narrative bridge. Rather than a standard screen recording, this introductory artifact recontextualizes the portfolio launch as a clandestine, late-night operation, grounding the website&apos;s dev persona within a tangible, physical world through stop-motion aesthetics.
              </p>
            </div>

            <div style={{ marginBottom: "16px" }}>
              <h3 style={{ fontSize: "13px", color: "#000080", marginBottom: "6px" }}>
                Ideation &amp; Human-AI Production Pipeline
              </h3>
              <p style={{ margin: 0 }}>
                My creative process combined generative AI with traditional post-production into an agile pipeline. Starting from a storyboard refined with Gemini, I generated reference sets in Midjourney, synthesized the voiceover via ElevenLabs, and edited the final composite in DaVinci Resolve—moulding the visuals with a subtle nod to Wes Anderson&apos;s stop-motion style to contrast the high-tech OS with a warm, analogue feel.
              </p>
              
              {/* ANTEPRIMA 1 */}
              <div className={styles.imagePreviewContainer}>
                <img
                  src="/638cb718-1ba6-48bf-bf6a-69bc70eac9aa.jpeg"
                  alt="Production Pipeline Preview"
                  className={styles.previewImage}
                />
              </div>
            </div>

            <div>
              <h3 style={{ fontSize: "13px", color: "#000080", marginBottom: "6px" }}>
                The Social Amplifier: The LinkedIn Launch
              </h3>
              <p style={{ margin: 0 }}>
                Positioned as the centerpiece of my LinkedIn launch strategy, the video operates as a high-impact, thumb-stopping asset designed to hijack attention in professional feeds. By deploying the trailer alongside the interactive site, I executed a cohesive omnichannel experience where cinematic storytelling drives traffic directly to my interactive portfolio.
              </p>

              {/* ANTEPRIMA 2 */}
              <div className={styles.imagePreviewContainer}>
                <img
                  src="/IMG_0721.png"
                  alt="LinkedIn Launch Preview"
                  className={styles.previewImage}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WhyXP;
