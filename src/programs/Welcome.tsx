import React from 'react'

interface WelcomeProps {
    id?: number;
}

export default function Welcome({ id }: WelcomeProps) {
    return (
        <div style={{
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
            flexDirection: "column",
            height: "100%",
            width: "100%",
            overflowY: "auto",
            gap: "20px",
            padding: "20px"
        }}>
            <h1 style={{ fontSize: "24px", color: "#0A246A", margin: 0 }}>VINCENZO REINA</h1>
            <h2 style={{ fontSize: "16px", color: "#4A5568", margin: 0 }}>Senior Brand &amp; GTM Strategist</h2>

            <p style={{
                fontStyle: "italic",
                background: "#F1F5F9",
                padding: "12px",
                borderLeft: "4px solid #0A246A",
                textAlign: "center"
            }}>
                &quot;I build high-impact GTM strategies for Deeptech startups. No corporate fluff, just dev-centric growth.&quot;
            </p>

            <div style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                width: "100%",
                maxWidth: "500px"
            }}>
                <h3 style={{ borderBottom: "1px solid #CBD5E1", paddingBottom: "4px", color: "#0A246A" }}>
                    KEY IMPACT METRICS
                </h3>
                <ul>
                    <li><strong>$370M ➔ $1.7B+</strong> Valuation Growth (Exein)</li>
                    <li><strong>RSAC 2026</strong> Global Photon Launch (San Francisco)</li>
                    <li><strong>APAC Expansion</strong> Taipei Regional Office Opening</li>
                </ul>

                <h3 style={{ borderBottom: "1px solid #CBD5E1", paddingBottom: "4px", color: "#0A246A" }}>
                    EXECUTIVE SUMMARY
                </h3>
                <p style={{ lineHeight: "1.5", fontSize: "14px" }}>
                    Senior Brand &amp; GTM Strategist with experience steering Go-To-Market strategies, international product launches, and corporate communications for high-growth tech companies and enterprise clients. Proven track record in translating complex B2B deeptech products into high-impact market narratives.
                </p>
            </div>
        </div>
    )
}
