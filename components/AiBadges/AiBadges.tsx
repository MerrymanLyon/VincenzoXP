import React from "react";

// Piccole icone di Claude e Gemini, inline per non dipendere da file esterni
const iconStyle: React.CSSProperties = { width: "1em", height: "1em", verticalAlign: "-0.15em", margin: "0 2px 0 3px" };

const ClaudeIcon = () => (
  <svg viewBox="0 0 24 24" style={iconStyle} aria-hidden="true">
    {Array.from({ length: 12 }).map((_, i) => (
      <rect key={i} x="11" y="1.5" width="2" height="10.5" rx="1" fill="#D97757" transform={`rotate(${i * 30} 12 12)`} />
    ))}
  </svg>
);

const GeminiIcon = () => (
  <svg viewBox="0 0 24 24" style={iconStyle} aria-hidden="true">
    <defs>
      <linearGradient id="gemini-grad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#4285F4" />
        <stop offset="0.55" stopColor="#9B72CB" />
        <stop offset="1" stopColor="#D96570" />
      </linearGradient>
    </defs>
    <path d="M12 0C12 6.6 17.4 12 24 12C17.4 12 12 17.4 12 24C12 17.4 6.6 12 0 12C6.6 12 12 6.6 12 0Z" fill="url(#gemini-grad)" />
  </svg>
);

const AiBadges = () => (
  <span style={{ whiteSpace: "nowrap" }}>
    <ClaudeIcon />Claude &amp;
    <GeminiIcon />Gemini
  </span>
);

export default AiBadges;
