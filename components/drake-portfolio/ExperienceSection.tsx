import { G } from "./constants";

type ExperienceSectionProps = {
  sectionRef: (el: HTMLDivElement | null) => void;
};

const timelineData = [
  {
    period: "2020 - Present",
    items: [
      { role: "Framer Desinger & Developer", company: "Brunodee Agency" },
      { role: "Front-End WordPress Developer", company: "Front-End WordPress Developer" },
    ],
  },
  {
    period: "2013 - 2019",
    items: [
      { role: "Webflow Developer & Co-Founder", company: "Designflow Studio" },
      { role: "Web Designer", company: "Freelance" },
      { role: "Leader Team of Marketing", company: "AHA Marketing Agency" },
    ],
  },
];

export default function ExperienceSection({ sectionRef }: ExperienceSectionProps) {
  return (
    <div ref={sectionRef} id="experience" style={{ padding: "80px 0 60px", borderTop: "1px solid #252525" }}>
      <div className="fade-card" data-delay={0}>
        <div style={{ fontSize: 11, fontFamily: "monospace", letterSpacing: 4, color: G, textTransform: "uppercase", marginBottom: 16 }}>RESUME</div>
        <h2 className="section-heading" style={{ fontSize: 52, fontWeight: 700, letterSpacing: -1, marginBottom: 48, lineHeight: 1.1 }}>
          Education &amp; <span style={{ color: G }}>Experience</span>
        </h2>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
        {timelineData.map((group, gi) => (
          <div key={group.period} className="fade-card" data-delay={gi * 150} style={{ display: "flex", gap: 0 }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginRight: 28, paddingTop: 4 }}>
              <div style={{ width: 14, height: 14, borderRadius: "50%", background: "#555", flexShrink: 0 }} />
              <div style={{ width: 1, flex: 1, background: "#2e2e2e", marginTop: 6 }} />
            </div>
            <div style={{ flex: 1, paddingBottom: gi === 0 ? 40 : 0 }}>
              <div style={{ fontSize: 14, color: "#666", marginBottom: 24, marginTop: 0 }}>{group.period}</div>
              {group.items.map((item, ii) => (
                <div
                  key={item.role}
                  className="fade-card"
                  data-delay={(gi * 150) + (ii * 120) + 80}
                  style={{ marginBottom: ii < group.items.length - 1 ? 32 : 0 }}
                >
                  <div style={{ fontSize: 26, fontWeight: 500, color: "#fff", marginBottom: 6, lineHeight: 1.2 }}>{item.role}</div>
                  <div style={{ fontSize: 13, color: "#666", fontWeight: 400 }}>{item.company}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
