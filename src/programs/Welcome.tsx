import React from "react";

export default function Welcome() {
  return (
    <div style={{ padding: "16px", color: "#000", fontFamily: "Tahoma, sans-serif" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px" }}>
        <div>
          <h1 style={{ fontSize: "22px", margin: "0 0 4px 0", color: "#0A246A" }}>VINCENZO REINA</h1>
          <h3 style={{ fontSize: "14px", margin: 0, color: "#4A5568", fontWeight: "bold" }}>
            Senior Brand &amp; GTM Strategist
          </h3>
        </div>
      </div>

      <p style={{ fontStyle: "italic", background: "#F1F5F9", padding: "10px", borderLeft: "4px solid #0A246A", margin: "0 0 20px 0" }}>
        &quot;I build high-impact GTM strategies for Deeptech startups. No corporate fluff, just dev-centric growth.&quot;
      </p>

      <h4 style={{ borderBottom: "1px solid #CBD5E1", paddingBottom: "4px", color: "#0A246A" }}>
        KEY IMPACT METRICS
      </h4>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "10px", marginBottom: "20px" }}>
        <div style={{ background: "#E2E8F0", padding: "10px", borderRadius: "4px", textAlign: "center" }}>
          <strong style={{ display: "block", fontSize: "16px", color: "#000" }}>$370M ➔ $1.7B+</strong>
          <span style={{ fontSize: "11px" }}>Valuation Growth (Exein)</span>
        </div>
        <div style={{ background: "#E2E8F0", padding: "10px", borderRadius: "4px", textAlign: "center" }}>
          <strong style={{ display: "block", fontSize: "16px", color: "#000" }}>RSAC 2026</strong>
          <span style={{ fontSize: "11px" }}>Global Photon Launch (SF)</span>
        </div>
        <div style={{ background: "#E2E8F0", padding: "10px", borderRadius: "4px", textAlign: "center" }}>
          <strong style={{ display: "block", fontSize: "16px", color: "#000" }}>APAC Office</strong>
          <span style={{ fontSize: "11px" }}>Taipei Regional Opening</span>
        </div>
      </div>

      <h4 style={{ borderBottom: "1px solid #CBD5E1", paddingBottom: "4px", color: "#0A246A" }}>
        EXECUTIVE SUMMARY
      </h4>
      <p style={{ fontSize: "12px", lineHeight: "1.5" }}>
        Senior Brand &amp; GTM Strategist with experience steering Go-To-Market strategies, international product launches, and corporate communications for high-growth tech companies and enterprise clients. Proven track record in translating complex B2B deeptech products into high-impact market narratives.
      </p>
    </div>
  );
}
