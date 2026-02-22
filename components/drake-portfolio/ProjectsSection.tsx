import { G } from "./constants";

type ProjectsSectionProps = {
  sectionRef: (el: HTMLDivElement | null) => void;
};

function Tag({ label, dark }: { label: string; dark?: boolean }) {
  return (
    <span
      style={{
        fontSize: 12, fontWeight: 500,
        padding: "6px 16px", borderRadius: 999,
        border: `1px solid ${dark ? "#444" : "rgba(0,0,0,0.18)"}`,
        color: dark ? "#ddd" : "#222",
        background: dark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)",
        letterSpacing: 0.2,
      }}
    >
      {label}
    </span>
  );
}

function CardTitle({ children, light }: { children: React.ReactNode; light?: boolean }) {
  return (
    <div style={{ fontSize: 15, fontWeight: 500, color: light ? "#222" : "#ddd", marginTop: 14, letterSpacing: 0.1 }}>
      {children}
    </div>
  );
}

export default function ProjectsSection({ sectionRef }: ProjectsSectionProps) {
  return (
    <div ref={sectionRef} id="projects" style={{ padding: "80px 0 60px", borderTop: "1px solid #252525" }}>
      <div className="fade-card" data-delay={0}>
        <div style={{ fontSize: 11, fontFamily: "monospace", letterSpacing: 4, color: G, textTransform: "uppercase", marginBottom: 16 }}>PORTFOLIO</div>
        <h2 className="section-heading" style={{ fontSize: 42, fontWeight: 700, letterSpacing: -0.5, marginBottom: 36 }}>
          Featured <span style={{ color: G }}>Projects</span>
        </h2>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
        {/* ROW 1: Full-width — Bureau */}
        <div className="fade-card" data-delay="0">
          <div style={{ borderRadius: 20, overflow: "hidden", background: "#232323", aspectRatio: "16/7", position: "relative" as const, cursor: "pointer" }}>
            <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
              <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "42%", background: "linear-gradient(135deg,#1a1a1a,#2e2e2e)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontSize: 9, color: "#555", letterSpacing: 3, marginBottom: 8 }}>3D CGI</div>
                  <div style={{ fontSize: 16, fontWeight: 800, color: "#fff", lineHeight: 1.2, letterSpacing: -0.5 }}>ARCHITECTURAL<br/>&amp; INTERIOR</div>
                </div>
              </div>
              <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: "60%", background: "linear-gradient(135deg,#2a2a2a,#1a1a1a)" }}>
                <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <div style={{ width: "70%", height: "80%", background: "#333", borderRadius: 8, border: "1px solid #444", display: "flex", flexDirection: "column", padding: 12, gap: 6 }}>
                    <div style={{ height: 6, width: "60%", background: "#555", borderRadius: 3 }}/>
                    <div style={{ height: 4, width: "80%", background: "#444", borderRadius: 3 }}/>
                    <div style={{ height: 4, width: "50%", background: "#444", borderRadius: 3 }}/>
                    <div style={{ flex: 1, background: "#3a3a3a", borderRadius: 6, marginTop: 4 }}/>
                  </div>
                </div>
              </div>
              <div style={{ position: "absolute", bottom: -10, left: 20, fontSize: 90, fontWeight: 900, color: "rgba(255,255,255,0.04)", lineHeight: 1, letterSpacing: -4, userSelect: "none" }}>BL</div>
              <div style={{ position: "absolute", bottom: -10, right: 20, fontSize: 90, fontWeight: 900, color: "rgba(255,255,255,0.04)", lineHeight: 1, letterSpacing: -4, userSelect: "none" }}>AU</div>
            </div>
            <div style={{ position: "absolute", bottom: 16, left: 16, display: "flex", gap: 8 }}>
              {["Figma","Framer","Wordpress"].map((t) => <Tag key={t} label={t} dark />)}
            </div>
          </div>
          <CardTitle>Bureau - Architecture Studio Website</CardTitle>
        </div>

        {/* ROW 2: Two equal cards */}
        <div className="fade-card" data-delay="100" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
          <div>
            <div style={{ borderRadius: 20, overflow: "hidden", background: "#2a2a2a", aspectRatio: "1/1", position: "relative" as const, cursor: "pointer" }}>
              <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ width: "65%", height: "75%", background: "#1e1e1e", borderRadius: 12, border: "1px solid #333", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 8 }}>
                  <div style={{ width: 48, height: 48, borderRadius: "50%", border: "1px solid #444", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ fontSize: 18, color: "#888" }}>A</span>
                  </div>
                  <div style={{ fontSize: 8, color: "#555", letterSpacing: 2 }}>CREATIVE AGENCY</div>
                  <div style={{ height: 3, width: "60%", background: "#333", borderRadius: 2 }}/>
                </div>
              </div>
              <div style={{ position: "absolute", bottom: 14, left: 14, display: "flex", gap: 8 }}>
                {["WordPress","Larevel/PHP"].map((t) => <Tag key={t} label={t} dark />)}
              </div>
            </div>
            <CardTitle>Moonex WordPress Theme</CardTitle>
          </div>
          <div>
            <div style={{ borderRadius: 20, overflow: "hidden", background: "#f0c040", aspectRatio: "1/1", position: "relative" as const, cursor: "pointer" }}>
              <div style={{ position: "absolute", inset: 0, padding: 16, display: "flex", flexDirection: "column", gap: 8 }}>
                <div style={{ background: "#fff", borderRadius: 8, padding: "8px 10px", flex: 1, display: "flex", flexDirection: "column", gap: 5 }}>
                  <div style={{ fontSize: 8, fontWeight: 700, color: "#333" }}>Today&apos;s schedule</div>
                  <div style={{ fontSize: 7, color: "#f0a000", fontWeight: 600 }}>Thursday 11 →</div>
                  {[1,2,3,4].map((i) => (
                    <div key={i} style={{ display: "flex", gap: 6, alignItems: "center" }}>
                      <div style={{ width: 14, height: 14, borderRadius: 3, background: i===1?"#f0c040":i===2?"#333":"#eee", flexShrink: 0 }}/>
                      <div style={{ height: 4, background: "#eee", borderRadius: 2, flex: 1 }}/>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ position: "absolute", bottom: 14, left: 14, display: "flex", gap: 8 }}>
                {["WordPress","Larevel/PHP"].map((t) => <Tag key={t} label={t} dark={false} />)}
              </div>
            </div>
            <CardTitle light>Taskly Dashboard</CardTitle>
          </div>
        </div>

        {/* ROW 3: Full-width — Hinterland */}
        <div className="fade-card" data-delay="200">
          <div style={{ borderRadius: 20, overflow: "hidden", background: "#252525", aspectRatio: "16/8", position: "relative" as const, cursor: "pointer" }}>
            <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{ width: "55%", position: "relative" as const }}>
                <div style={{ background: "#1a1a1a", borderRadius: 10, border: "1px solid #333", overflow: "hidden", aspectRatio: "16/10" }}>
                  <div style={{ height: "55%", background: "linear-gradient(135deg,#2a3a2a,#1a2a1a)", display: "flex", alignItems: "center", padding: "0 12px" }}>
                    <div>
                      <div style={{ fontSize: 11, fontWeight: 800, color: "#fff", letterSpacing: 1 }}>HINTERLANDS</div>
                      <div style={{ fontSize: 8, color: "#aaa", letterSpacing: 2 }}>MODERN HOMES</div>
                    </div>
                  </div>
                  <div style={{ height: "45%", background: "#111", padding: "6px 10px", display: "flex", flexDirection: "column", gap: 3 }}>
                    <div style={{ height: 4, width: "70%", background: "#222", borderRadius: 2 }}/>
                    <div style={{ height: 4, width: "50%", background: "#222", borderRadius: 2 }}/>
                  </div>
                </div>
                <div style={{ width: 2, height: 16, background: "#333", margin: "0 auto" }}/>
                <div style={{ width: 40, height: 4, background: "#333", borderRadius: 2, margin: "0 auto" }}/>
              </div>
            </div>
            <div style={{ position: "absolute", bottom: 16, left: 16, display: "flex", gap: 8 }}>
              {["Figma","React"].map((t) => <Tag key={t} label={t} dark />)}
            </div>
          </div>
          <CardTitle>Hinterland - Real Estate Site Redesign</CardTitle>
        </div>

        {/* ROW 4: Full-width light — Lewis */}
        <div className="fade-card" data-delay="300">
          <div style={{ borderRadius: 20, overflow: "hidden", background: "#e8e4de", aspectRatio: "16/8", position: "relative" as const, cursor: "pointer" }}>
            <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 12 }}>
              <div style={{ fontSize: 22, fontWeight: 300, color: "#888", letterSpacing: 8, textTransform: "uppercase" }}>LEWIS</div>
              <div style={{ width: "50%", background: "#fff", borderRadius: 10, border: "1px solid #ddd", overflow: "hidden", padding: 12 }}>
                <div style={{ display: "flex", gap: 10, justifyContent: "center" }}>
                  {["LW","W","A"].map((l,i) => (
                    <div key={l} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
                      <div style={{ fontSize: 24, fontWeight: 800, color: i===0?"#222":i===1?"#8B4513":"#d4a800", lineHeight: 1 }}>{l}</div>
                      <div style={{ fontSize: 7, color: "#aaa" }}>{["Lewis Studio","Our Works","Articles"][i]}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div style={{ position: "absolute", bottom: 16, left: 16, display: "flex", gap: 8 }}>
              {["Figma","Framer"].map((t) => <Tag key={t} label={t} dark={false} />)}
            </div>
          </div>
          <CardTitle light>Lewis Portfolio Framer Template</CardTitle>
        </div>
      </div>
    </div>
  );
}
