type BrandsSectionProps = {
  sectionRef: (el: HTMLDivElement | null) => void;
};

const MUTED = "#a3a3a3";

export default function BrandsSection({ sectionRef }: BrandsSectionProps) {
  return (
    <div ref={sectionRef} id="brands" style={{ padding: "80px 0 60px", borderTop: "1px solid #252525" }}>
      <div className="fade-card" data-delay={0}>
        <div style={{ fontSize: 13, fontWeight: 500, textTransform: "uppercase", color: MUTED, marginBottom: 48, letterSpacing: 0.5 }}>
          WORK WITH 60+ BRANDS WORLDWIDE
        </div>

        <div className="section-grid-4" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "48px 56px", maxWidth: 1000, margin: "0 auto" }}>
          {/* Row 1 */}
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div style={{ width: 56, height: 56, borderRadius: "50%", background: "#333", border: "1px solid #444", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: "#fff", fontSize: 11, fontWeight: 600 }}>
              BLB
            </div>
            <div style={{ fontSize: 12, color: MUTED, lineHeight: 1.4 }}>
              BADISCHE LANDES-<br />BIBLIOTHEK
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
            <div style={{ fontSize: 22, fontWeight: 300, color: MUTED, fontFamily: "Georgia, serif", fontStyle: "italic" }}>cw</div>
            <div style={{ fontSize: 11, color: MUTED }}>christopher willis</div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
            <div style={{ fontSize: 28, fontWeight: 700, color: MUTED, letterSpacing: -0.5 }}>S</div>
            <div style={{ fontSize: 14, color: MUTED, fontWeight: 600 }}>SERENITY</div>
            <div style={{ fontSize: 11, color: MUTED }}>HOTEL</div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <div style={{ fontSize: 18, fontWeight: 600, color: MUTED, letterSpacing: 0.5 }}>ARTCHIVE</div>
            <div style={{ fontSize: 11, color: MUTED }}>CRAFTS GALLERY</div>
          </div>

          {/* Row 2 */}
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <span style={{ fontSize: 32, fontWeight: 200, color: MUTED, lineHeight: 1 }}>
              <span style={{ fontSize: 42, fontWeight: 700 }}>N</span>EUTON
            </span>
            <div style={{ fontSize: 11, color: MUTED }}>INTERACTIVE</div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <div style={{ fontSize: 22, color: MUTED, fontFamily: "Georgia, 'Times New Roman', serif", fontStyle: "italic" }}>Papillon</div>
            <div style={{ fontSize: 11, color: MUTED }}>MANUFAKTUR</div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <div style={{ fontSize: 18, fontWeight: 700, color: MUTED, letterSpacing: 0.2 }}>Good Habits</div>
          </div>

          <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
            <div style={{ width: 48, height: 48, flexShrink: 0, border: "1px solid #444", borderRadius: 6, background: "#2a2a2a", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={MUTED} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
            <div style={{ fontSize: 11, color: MUTED, lineHeight: 1.5 }}>
              1ST CREATIVE<br />SPACE FOR<br />TECHNICAL<br />INNOVATIONS
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
