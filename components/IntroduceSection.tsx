import { G } from "./constants";

type IntroduceSectionProps = {
  sectionRef: (el: HTMLDivElement | null) => void;
  onGoToProjects: () => void;
};

export default function IntroduceSection({ sectionRef, onGoToProjects }: IntroduceSectionProps) {
  return (
    <div
      ref={sectionRef}
      id="introduce"
      className="flex flex-col pt-6 pb-12 lg:min-h-full lg:justify-center"
    >
      <div className="fade-card" data-delay={0}>
        <div className="inline-flex items-center gap-2 border border-[#444] rounded-full py-2 px-4 mb-6 lg:mb-8 text-xs font-medium text-[#aaa] tracking-wide uppercase">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-3.5 h-3.5">
            <path d="M3 12L12 3l9 9M5 10v9a1 1 0 001 1h4v-5h4v5h4a1 1 0 001-1v-9"/>
          </svg>
          INTRODUCE
        </div>
        <h1 className="intro-heading" style={{ lineHeight: 1.3, letterSpacing: -1.5, marginBottom: 44 }}>
          Say Hi from <span style={{ color: G }}>Drake</span>,<br />
          Webflow Designer<br />
          and Developer
        </h1>
        <p style={{ color: "#888", fontSize: 15, fontWeight: 500, lineHeight: 1.9, marginBottom: 0 }}>
          I design and code beautifully simple things and i love what i do.<br />
          Just simple like that!
        </p>
      </div>

      <div className="fade-card flex justify-end mt-4" data-delay={100}>
        <div
          onClick={onGoToProjects}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && onGoToProjects()}
          style={{
            width: 188, height: 188,
            borderRadius: "50%",
            display: "flex", alignItems: "center", justifyContent: "center",
            cursor: "pointer", position: "relative" as const, flexShrink: 0,
          }}
        >
          <svg width="188" height="188" viewBox="0 0 148 148" style={{ position: "absolute" }}>
            <circle cx="74" cy="74" r="68" fill="none" stroke="#555" strokeWidth="2.5"/>
            <circle cx="6" cy="74" r="4" fill="#777"/>
            <circle cx="142" cy="74" r="4" fill="#777"/>
            <line x1="74" y1="58" x2="74" y2="80" stroke="#ccc" strokeWidth="3" strokeLinecap="round"/>
            <polyline points="62,70 74,82 86,70" fill="none" stroke="#ccc" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            <line x1="62" y1="88" x2="86" y2="88" stroke="#ccc" strokeWidth="3" strokeLinecap="round"/>
          </svg>
          <svg
            width="188"
            height="188"
            viewBox="0 0 148 148"
            style={{ position: "absolute", animation: "rotateBadge 12s linear infinite" }}
          >
            <path id="topArc" d="M74,74 m-52,0 a52,52 0 1,1 104,0" fill="none"/>
            <text style={{ fontSize: 14, fill: "#ddd", letterSpacing: 4, fontWeight: 700, fontFamily: "Georgia, serif" }}>
              <textPath href="#topArc" startOffset="8%">My Projects •</textPath>
            </text>
            <path id="botArc" d="M74,74 m52,0 a52,52 0 1,1 -104,0" fill="none"/>
            <text style={{ fontSize: 14, fill: "#ddd", letterSpacing: 4, fontWeight: 700, fontFamily: "Georgia, serif" }}>
              <textPath href="#botArc" startOffset="8%">My Projects •</textPath>
            </text>
          </svg>
        </div>
      </div>

      <div className="fade-card flex gap-12 lg:gap-[60px] mt-5 lg:mt-6">
        <div>
          <div className="text-4xl lg:text-[52px] font-bold leading-none" style={{ color: G }}>10+</div>
          <div className="text-[10px] text-[#555] tracking-widest mt-2 uppercase leading-[1.8] whitespace-pre">YEARS OF\nEXPERIENCE</div>
        </div>
        <div>
          <div className="text-4xl lg:text-[52px] font-bold leading-none text-white">182+</div>
          <div className="text-[10px] text-[#555] tracking-widest mt-2 uppercase leading-[1.8] whitespace-pre">PROJECTS COMPLETED ON\n15 COUNTRIES</div>
        </div>
      </div>
    </div>
  );
}
