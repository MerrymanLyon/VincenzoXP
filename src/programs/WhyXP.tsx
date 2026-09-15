import React, { useState } from "react";
import Image from "next/image";
import emptyfile from "../../assets/workaccordion/emptyfile.png";

interface WhyXPProps {
  id?: number;
}

const WhyXP: React.FC<WhyXPProps> = () => {
  // Stato per gestire il cambio scheda tra la prima e la seconda sezione
  const [activeTab, setActiveTab] = useState<"overview" | "branded_short">(
    "overview"
  );

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        backgroundColor: "#ffffff",
      }}
    >
      {/* SIDEBAR SINISTRA IN STILE WINDOWS EXPLORER / MY WORK */}
      <div
        style={{
          width: "220px",
          backgroundColor: "#6b8ec6",
          background: "linear-gradient(180deg, #749be8 0%, #4a75c3 100%)",
          padding: "12px 8px",
          color: "#ffffff",
          fontFamily: "Tahoma, sans-serif",
          fontSize: "11px",
          boxSizing: "border-box",
          flexShrink: 0,
          overflowY: "auto",
        }}
      >
        {/* SEZIONE: PERSONAL BRANDING */}
        <div
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "3px 3px 0 0",
            padding: "4px 8px",
            color: "#0c327d",
            fontWeight: "bold",
            fontSize: "11px",
            marginBottom: "6px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            boxShadow: "1px 1px 2px rgba(0,0,0,0.2)",
          }}
        >
          <span>Personal Branding</span>
        </div>

        <div
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.4)",
            borderRadius: "0 0 3px 3px",
            padding: "6px 8px",
            marginBottom: "12px",
          }}
        >
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "flex",
              flexDirection: "column",
              gap: "6px",
            }}
          >
            {/* ITEM 1: SYSTEM & BRAND ACTIVATION */}
            <li
              onClick={() => setActiveTab("overview")}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                cursor: "pointer",
                padding: "2px 4px",
                borderRadius: "2px",
                backgroundColor:
                  activeTab === "overview"
                    ? "rgba(10, 36, 106, 0.3)"
                    : "transparent",
              }}
            >
              <Image
                src={emptyfile}
                alt="file"
                width={14}
                height={14}
                style={{ objectFit: "contain" }}
              />
              <span
                style={{
                  color: "#000000",
                  fontWeight: activeTab === "overview" ? "bold" : "normal",
                  fontSize: "11px",
                  lineHeight: "1.2",
                }}
              >
                System & Brand activation
              </span>
            </li>

            {/* ITEM 2: BRANDED SHORT */}
            <li
              onClick={() => setActiveTab("branded_short")}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                cursor: "pointer",
                padding: "2px 4px",
                borderRadius: "2px",
                backgroundColor:
                  activeTab === "branded_short"
                    ? "rgba(10, 36, 106, 0.3)"
                    : "transparent",
              }}
            >
              <Image
                src={emptyfile}
                alt="file"
                width={14}
                height={14}
                style={{ objectFit: "contain" }}
              />
              <span
                style={{
                  color: "#000000",
                  fontWeight: activeTab === "branded_short" ? "bold" : "normal",
                  fontSize: "11px",
                  lineHeight: "1.2",
                }}
              >
                Branded short
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* AREA CONTENUTO PRINCIPALE */}
      <div
        style={{
          flex: 1,
          padding: "20px 24px",
          overflowY: "auto",
          fontFamily: "Tahoma, sans-serif",
          color: "#000000",
          fontSize: "12px",
          lineHeight: "1.55",
        }}
      >
        {/* TAB 1: SYSTEM & BRAND ACTIVATION (WHY XP OVERVIEW) */}
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
              Why XP? System & Brand Architecture
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

        {/* TAB 2: BRANDED SHORT */}
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

            {/* SEZIONE 1: CRAFTING THE OMNICHANNEL NARRATIVE */}
            <div style={{ marginBottom: "20px" }}>
              <h3 style={{ fontSize: "13px", color: "#000080", marginBottom: "6px" }}>
                Crafting the Omnichannel Narrative
              </h3>
              <p style={{ margin: 0 }}>
                To complete the Windows XP digital ecosystem, we needed an introductory artifact that wasn’t just a screen recording, but a narrative bridge. The goal was to contextualize the &quot;hacker-dev&quot; persona presented in the website within a tangible, physical world. The solution was a high-concept video trailer that recontextualizes the portfolio launch as a clandestine, late-night operation, utilizing the power of cinematic stop-motion aesthetics.
              </p>
            </div>

            {/* SEZIONE 2: IDEATION & HUMAN-AI PRODUCTION PIPELINE */}
            <div style={{ marginBottom: "20px" }}>
              <h3 style={{ fontSize: "13px", color: "#000080", marginBottom: "6px" }}>
                Ideation &amp; Human-AI Production Pipeline
              </h3>
              <p style={{ margin: "0 0 8px 0" }}>
                The creative process began with an intensive ideation phase, defining the storyboard and the specific &quot;Wes Anderson-meets-Cyberpunk&quot; mood. Once the visual language was locked, we executed a complex, rapid-production pipeline leveraging generative AI and traditional post-production:
              </p>
              <ul style={{ margin: 0, paddingLeft: "18px", lineHeight: "1.6" }}>
                <li style={{ marginBottom: "4px" }}>
                  <strong>Concept &amp; Scripting:</strong> Outlining the narrative arc, from the initial &quot;boot sequence&quot; to the final product reveal. Gemini (Google) assisted in refining the script to ensure it was punchy and aligned with the overall brand voice.
                </li>
                <li style={{ marginBottom: "4px" }}>
                  <strong>Visuals:</strong> We used Midjourney to generate precise reference frames for the sets and lighting, capturing the distinct handcrafted, miniature-model look.
                </li>
                <li style={{ marginBottom: "4px" }}>
                  <strong>Audio:</strong> The voiceover was synthesized using ElevenLabs, employing a specific voice model to match the desired detached-yet-intense protagonist persona.
                </li>
                <li>
                  <strong>Post-Production:</strong> All visual assets were composited and edited in DaVinci Resolve, where the stop-motion effect was meticulously dialed in to create the signature jerky, physical-object micro-movements.
                </li>
              </ul>
            </div>

            {/* SEZIONE 3: THE CINEMATIC SIGNATURE */}
            <div style={{ marginBottom: "20px" }}>
              <h3 style={{ fontSize: "13px", color: "#000080", marginBottom: "6px" }}>
                The Cinematic Signature: A Wes Anderson Homage
              </h3>
              <p style={{ margin: 0 }}>
                The audiovisual identity of the video is a direct stylistic citation to Wes Anderson’s <em>Fantastic Mr. Fox</em>. The musical score mirrors the whimsical, rustic, and slightly rebellious tone of the film, while the meticulous framing, color grading, and &quot;miniature set&quot; look pay homage to Anderson’s iconic stop-motion craftsmanship. This choice serves a strategic purpose: it contrasts the high-tech nature of the OS with a warm, analogue feel, making the technical project accessible and deeply memorable.
              </p>
            </div>

            {/* SEZIONE 4: THE SOCIAL AMPLIFIER */}
            <div>
              <h3 style={{ fontSize: "13px", color: "#000080", marginBottom: "6px" }}>
                The Social Amplifier: The LinkedIn Launch
              </h3>
              <p style={{ margin: 0 }}>
                The video is not just an asset, but the centerpiece of the launch strategy on LinkedIn. Designed as a &quot;thumb-stopping&quot; piece of content, it leverages the high production value and nostalgic pull to hijack attention in a professional feed. By releasing the video alongside the interactive website, we execute a true omnichannel experience: the video provides the story, and the link provides the interaction. This synergy is engineered to maximize viral impact, encouraging shares and turning a personal portfolio launch into a cultural event.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WhyXP;
