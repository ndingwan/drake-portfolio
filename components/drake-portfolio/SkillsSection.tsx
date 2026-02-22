import { G } from "./constants";

type SkillsSectionProps = {
  sectionRef: (el: HTMLDivElement | null) => void;
};

const skillsWithLogos = [
  { name: "Figma", pct: 92, anim: "left", logo: <svg viewBox="0 0 38 57" width={42} height={42}><rect x="0" y="0" width="19" height="19" rx="9.5" fill="#F24E1E"/><rect x="19" y="0" width="19" height="19" rx="9.5" fill="#FF7262"/><rect x="0" y="19" width="19" height="19" rx="9.5" fill="#A259FF"/><rect x="0" y="38" width="19" height="19" rx="9.5" fill="#0ACF83"/><circle cx="28.5" cy="28.5" r="9.5" fill="#1ABCFE"/></svg> },
  { name: "Framer", pct: 85, anim: "behind", logo: <svg viewBox="0 0 24 36" width={34} height={44} fill="white"><path d="M0 0h24v12H12L0 0zM0 12h12l12 12H0V12zM0 24h12v12L0 24z"/></svg> },
  { name: "Webflow", pct: 80, anim: "right", logo: <svg viewBox="0 0 64 40" width={54} height={34} fill="white"><path d="M47.5 0S36.3 17.1 35.4 17.8C34.9 9 28.1 0 28.1 0H16s6.5 10.5 7.4 22.2C21.3 34.1 16 40 16 40h12.1s4.5-5 6.4-13.8c1.2 4.8 5.3 13.8 5.3 13.8H52s-6.8-11.3-7.1-22.2C45.5 10.3 59 0 59 0H47.5z"/></svg> },
  { name: "React", pct: 90, anim: "left", logo: <svg viewBox="0 0 40 40" width={48} height={48} fill="none"><circle cx="20" cy="20" r="4" fill="#61DAFB"/><ellipse cx="20" cy="20" rx="18" ry="7" stroke="#61DAFB" strokeWidth="1.8"/><ellipse cx="20" cy="20" rx="18" ry="7" stroke="#61DAFB" strokeWidth="1.8" transform="rotate(60 20 20)"/><ellipse cx="20" cy="20" rx="18" ry="7" stroke="#61DAFB" strokeWidth="1.8" transform="rotate(120 20 20)"/></svg> },
  { name: "WordPress", pct: 86, anim: "behind", logo: <svg viewBox="0 0 40 40" width={48} height={48} fill="none"><circle cx="20" cy="20" r="18" stroke="white" strokeWidth="1.8" fill="none"/><path d="M20 4C11.2 4 4 11.2 4 20s7.2 16 16 16 16-7.2 16-16S28.8 4 20 4z" fill="none" stroke="white" strokeWidth="1.2" opacity="0.3"/><line x1="4" y1="20" x2="36" y2="20" stroke="white" strokeWidth="1" opacity="0.25"/><line x1="13" y1="5" x2="13" y2="35" stroke="white" strokeWidth="1" opacity="0.15"/><line x1="27" y1="5" x2="27" y2="35" stroke="white" strokeWidth="1" opacity="0.15"/><text x="20" y="27" textAnchor="middle" fill="white" fontSize="20" fontWeight="800" fontFamily="Arial,sans-serif">W</text></svg> },
  { name: "Laravel/PHP", pct: 70, anim: "right", logo: <svg viewBox="0 0 50 50" width={48} height={48} fill="none"><polygon points="25,4 46,16 46,34 25,46 4,34 4,16" stroke="white" strokeWidth="1.5" fill="none" opacity="0.35"/><polygon points="25,12 38,19.5 38,30.5 25,38 12,30.5 12,19.5" stroke="white" strokeWidth="1.5" fill="none" opacity="0.6"/><line x1="25" y1="19" x2="25" y2="31" stroke="white" strokeWidth="2" strokeLinecap="round"/><line x1="19" y1="22" x2="25" y2="19" stroke="white" strokeWidth="2" strokeLinecap="round"/><line x1="31" y1="22" x2="25" y2="19" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg> },
];

export default function SkillsSection({ sectionRef }: SkillsSectionProps) {
  return (
    <div ref={sectionRef} id="skills" className="py-10 lg:py-20 lg:pb-[60px] border-t border-[#252525]">
      <div className="fade-card" data-delay={0}>
        <div className="text-[11px] font-mono tracking-[0.2em] uppercase mb-4" style={{ color: G }}>SKILLS</div>
        <h2 className="section-heading font-bold tracking-tight mb-8 lg:mb-12 leading-tight">
          My <span style={{ color: G }}>Advantages</span>
        </h2>
      </div>
      <div className="grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8 justify-items-center">
        {skillsWithLogos.map((sk) => (
          <div
            key={sk.name}
            className="fade-card flex flex-col items-center gap-3 lg:gap-[18px]"
            data-anim={sk.anim}
          >
            <div className="w-[140px] h-[140px] sm:w-[160px] sm:h-[160px] lg:w-[200px] lg:h-[200px] rounded-full border border-[#3a3a3a] flex flex-col items-center justify-center gap-2 lg:gap-3.5">
              <div className="flex items-center justify-center h-9 lg:h-[52px] [&>svg]:max-w-[32px] [&>svg]:max-h-[32px] lg:[&>svg]:max-w-none lg:[&>svg]:max-h-none">
                {sk.logo}
              </div>
              <div className="text-[28px] sm:text-[32px] lg:text-[44px] font-bold leading-none" style={{ color: G }}>{sk.pct}%</div>
            </div>
            <span className="text-sm lg:text-base text-[#ccc]">{sk.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
