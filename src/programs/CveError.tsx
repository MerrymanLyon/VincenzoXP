import React from "react";
import errorIcon from "../../assets/dialog/error.png";

interface CveErrorProps {
  onClose?: () => void;
}

export default function CveError({ onClose }: CveErrorProps) {
  const handleOpenLinkedin = () => {
    window.open("https://www.linkedin.com/in/vincenzo-reina/", "_blank", "noreferrer");
  };

  return (
    <div style={{ padding: "12px", fontSize: "12px", fontFamily: "Tahoma, sans-serif" }}>
      <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", marginBottom: "16px" }}>
        <img
          src={errorIcon.src}
          alt="Error"
          style={{ width: "32px", height: "32px" }}
          onError={(e) => {
            (e.target as HTMLElement).style.display = "none";
          }}
        />
        <div>
          <strong style={{ fontSize: "13px" }}>Critical Security Breach (CVE-2026-45102)</strong>
          <p style={{ margin: "8px 0 0 0", lineHeight: "1.4" }}>
            A critical vulnerability has compromised <code>vincenzoxp.com</code>. The legacy personal branding runtime has been halted.
          </p>
          <p style={{ margin: "8px 0 0 0", lineHeight: "1.4", color: "#666" }}>
            Patching required: Transition to the new professional brand is currently underway.
          </p>
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "flex-end", gap: "8px", marginTop: "16px" }}>
        <button
          className="xp-button"
          onClick={onClose}
          style={{ padding: "4px 10px" }}
        >
          Cancel
        </button>
        <button
          className="xp-button"
          onClick={handleOpenLinkedin}
          style={{ fontWeight: "bold", padding: "4px 12px" }}
        >
          Resolve via LinkedIn
        </button>
      </div>
    </div>
  );
}
