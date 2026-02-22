import { G } from "./constants";

type ServicesSectionProps = {
  sectionRef: (el: HTMLDivElement | null) => void;
};

const services = [
  {
    title: "Website Design",
    desc: "I created digital products with unique ideas use Figma & Framer",
    projects: "24 PROJECTS",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke={G} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={32} height={32}>
        <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
      </svg>
    ),
  },
  {
    title: "Development",
    desc: "I build website go live with Framer, Webflow or WordPress",
    projects: "126 PROJECTS",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke={G} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={32} height={32}>
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
  },
  {
    title: "SEO/Marketing",
    desc: "Increase the traffic for your website with SEO optimized",
    projects: "8 PROJECTS",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke={G} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={32} height={32}>
        <path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><circle cx="12" cy="20" r="1" fill={G} stroke="none"/>
      </svg>
    ),
  },
];

export default function ServicesSection({ sectionRef }: ServicesSectionProps) {
  return (
    <div ref={sectionRef} id="services" style={{ padding: "80px 0 60px", borderTop: "1px solid #252525" }}>
      <div className="fade-card" data-delay={0}>
        <div style={{ fontSize: 11, fontFamily: "monospace", letterSpacing: 4, color: G, textTransform: "uppercase", marginBottom: 16 }}>SERVICES</div>
        <h2 className="section-heading" style={{ fontSize: 52, fontWeight: 700, letterSpacing: -1, marginBottom: 48, lineHeight: 1.1 }}>
          My <span style={{ color: G }}>Specializations</span>
        </h2>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {services.map((sp, idx) => (
          <div
            key={sp.title}
            className="fade-card"
            data-delay={idx * 150}
            style={{
              border: "1px solid #2a2a2a",
              borderRadius: 18,
              padding: "28px 32px",
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
              gap: 24,
              background: "#161616",
            }}
          >
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 26, fontWeight: 600, color: "#fff", marginBottom: 10, lineHeight: 1.2 }}>{sp.title}</div>
              <div style={{ fontSize: 14, color: "#777", lineHeight: 1.6, marginBottom: 24 }}>{sp.desc}</div>
              <div style={{ fontSize: 11, fontWeight: 700, color: "#555", letterSpacing: 2, textTransform: "uppercase" }}>{sp.projects}</div>
            </div>
            <div style={{ flexShrink: 0, marginTop: 4 }}>{sp.icon}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
