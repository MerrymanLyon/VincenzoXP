import React from "react";

interface WhyXPProps {
  id?: number;
}

const WhyXP: React.FC<WhyXPProps> = () => {
  return (
    <div style={{ display: "flex", width: "100%", height: "100%", backgroundColor: "#ffffff" }}>
      {/* SIDEBAR SINISTRA ESPLORATORE WINDOWS XP */}
      <div
        style={{
          width: "200px",
          backgroundColor: "#6b8ec6",
          background: "linear-gradient(180deg, #749be8 0%, #4a75c3 100%)",
          padding: "12px",
          color: "#ffffff",
          fontFamily: "Tahoma, sans-serif",
          fontSize: "11px",
          boxSizing: "border-box",
          flexShrink: 0,
        }}
      >
        <div
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "3px 3px 0 0",
            padding: "3px 6px",
            color: "#0c327d",
            fontWeight: "bold",
            fontSize: "12px",
            marginBottom: "8px",
          }}
        >
          System Tasks
        </div>
        <ul style={{ listStyle: "none", padding: 0, margin: "0 0 16px 0", lineHeight: "1.8" }}>
          <li style={{ cursor: "pointer", textDecoration: "underline" }}>View system information</li>
          <li style={{ cursor: "pointer", textDecoration: "underline" }}>Add or remove programs</li>
        </ul>

        <div
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "3px 3px 0 0",
            padding: "3px 6px",
            color: "#0c327d",
            fontWeight: "bold",
            fontSize: "12px",
            marginBottom: "8px",
          }}
        >
          Other Places
        </div>
        <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: "1.8" }}>
          <li style={{ cursor: "pointer", textDecoration: "underline" }}>My Work</li>
          <li style={{ cursor: "pointer", textDecoration: "underline" }}>My Resume</li>
        </ul>
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
        <h2 style={{ fontSize: "17px", color: "#000080", marginTop: 0, borderBottom: "2px solid #000080", paddingBottom: "4px" }}>
          Why XP? System & Brand Architecture
        </h2>

        {/* PARAGRAFO 1: WHY AN OS WEBSITE */}
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

        {/* PARAGRAFO 2: WHY AN XP DESIGN */}
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

        {/* PARAGRAFO 3: WHY A DIGITAL PORTFOLIO */}
        <div>
          <h3 style={{ fontSize: "13px", color: "#000080", marginBottom: "6px" }}>
            Why a digital portfolio?
          </h3>
          <p style={{ margin: 0 }}>
            In modern brand management, an omnichannel strategy is the single most effective way to convey any message. When a brand identity is strong and its core positioning flows cohesively across every digital touchpoint, communication becomes unmistakable. In an overcrowded market dominated by static, standardized PDF resumes, this interactive web portfolio captures recruiter attention, maximizes time-on-page, and turns professional credentials into an immersive brand experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyXP;
