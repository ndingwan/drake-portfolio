"use client";

import { useState } from "react";
import { G } from "./constants";

type ClientsSectionProps = {
  sectionRef: (el: HTMLDivElement | null) => void;
};

const TESTIMONIALS = [
  { name: "Phil Foden", role: "Director of", company: "Envato LLC", project: "PROJECT", text: "Extremely profressional and fast service!. Drake is a master of code and he also very creative. We done 3 projects with him and certain will continue.", initials: "PF" },
  { name: "Sarah Lane", role: "Founder of", company: "LWA Studio", project: "PROJECT", text: "Working with Drake was an absolute pleasure. His attention to detail and creative vision transformed our brand completely. Highly recommend!", initials: "SL" },
  { name: "James Reid", role: "CEO of", company: "TechCorp Inc.", project: "PROJECT", text: "Drake delivered beyond expectations. Our web presence improved dramatically and we saw real results within weeks of launching.", initials: "JR" },
];

export default function ClientsSection({ sectionRef }: ClientsSectionProps) {
  const [idx, setIdx] = useState(0);
  const total = TESTIMONIALS.length;
  const prev = () => setIdx((i) => (i - 1 + total) % total);
  const next = () => setIdx((i) => (i + 1) % total);

  return (
    <div ref={sectionRef} id="clients" style={{ padding: "80px 0 60px", borderTop: "1px solid #252525" }}>
      <div className="fade-card" data-delay={0}>
        <div style={{ fontSize: 11, fontFamily: "monospace", letterSpacing: 4, color: G, textTransform: "uppercase", marginBottom: 16 }}>TESTIMONIAL</div>
        <h2 className="section-heading" style={{ fontSize: 52, fontWeight: 700, letterSpacing: -1, marginBottom: 48, lineHeight: 1.1 }}>
          Trusted by <span style={{ color: G }}>Hundered Clients</span>
        </h2>
      </div>

      <div className="fade-card" data-delay={100} style={{ marginBottom: 32, overflow: "hidden" }}>
        <div
          style={{
            display: "flex",
            width: `${total * 100}%`,
            transform: `translateX(-${idx * (100 / total)}%)`,
            transition: "transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          }}
        >
          {TESTIMONIALS.map((t) => (
            <div
              key={t.initials}
              style={{
                flex: `0 0 ${100 / total}%`,
                border: "1px solid #2a2a2a",
                borderRadius: 24,
                padding: "36px 40px 32px",
                background: "#161616",
                minHeight: 280,
                boxSizing: "border-box",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 32 }}>
                <div style={{
                  width: 52, height: 52, borderRadius: "50%",
                  background: "#2e2e2e",
                  border: "1px solid #3a3a3a",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 16, fontWeight: 700, color: "#aaa", flexShrink: 0,
                }}>
                  {t.initials}
                </div>
                <div>
                  <div style={{ fontSize: 17, fontWeight: 600, color: "#fff", marginBottom: 3 }}>{t.name}</div>
                  <div style={{ fontSize: 13, color: "#666" }}>
                    {t.role} <span style={{ color: G }}>{t.company}</span>
                  </div>
                </div>
              </div>

              <p style={{ fontSize: 18, color: "#ccc", lineHeight: 1.75, marginBottom: 32, fontWeight: 400 }}>
                &quot;{t.text}&quot;
              </p>

              <div style={{ fontSize: 11, color: "#444", fontWeight: 700, letterSpacing: 2.5, textTransform: "uppercase" }}>{t.project}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <button
          type="button"
          onClick={prev}
          style={{
            width: 44, height: 44, borderRadius: "50%",
            border: "1px solid #333",
            background: "transparent",
            color: "#aaa",
            display: "flex", alignItems: "center", justifyContent: "center",
            cursor: "pointer", fontSize: 18,
          }}
        >
          ‹
        </button>

        <span style={{ fontSize: 15, color: "#555", fontFamily: "monospace", minWidth: 36, textAlign: "center" }}>
          {idx + 1} / {total}
        </span>

        <button
          type="button"
          onClick={next}
          style={{
            width: 44, height: 44, borderRadius: "50%",
            border: "1px solid #333",
            background: "transparent",
            color: "#aaa",
            display: "flex", alignItems: "center", justifyContent: "center",
            cursor: "pointer", fontSize: 18,
          }}
        >
          ›
        </button>
      </div>
    </div>
  );
}
