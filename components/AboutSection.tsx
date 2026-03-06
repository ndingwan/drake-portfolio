import { G } from "./constants";

type AboutSectionProps = {
  sectionRef: (el: HTMLDivElement | null) => void;
};

const statCards = [["10+","Years Experience"],["182+","Projects Done"],["15","Countries"],["100%","Satisfaction"]] as const;

export default function AboutSection({ sectionRef }: AboutSectionProps) {
  return (
    <div ref={sectionRef} id="about" className="py-10 lg:pt-20 lg:pb-[60px]">
      <div className="fade-card" data-delay={0}>
        <div className="section-label text-[11px] font-mono tracking-[0.2em] uppercase mb-4" style={{ color: G }}>ABOUT</div>
        <h2 className="section-heading font-bold leading-tight tracking-tight mb-6 lg:mb-9">
          Every great design begin with<br />an even <span style={{ color: G }}>better story</span>
        </h2>
        <div className="flex flex-col gap-8 lg:grid lg:grid-cols-2 lg:gap-[52px]">
          <div>
            <p className="text-[#888] text-[15px] leading-[1.9] mb-4 lg:mb-[18px]">
              I&apos;m Drake, a passionate Webflow Designer and Developer based in Los Angeles, CA.
              With over 10 years of experience I&apos;ve crafted digital experiences for clients across
              15 countries — from sleek startups to established enterprises.
            </p>
            <p className="text-[#888] text-[15px] leading-[1.9]">
              Beautiful design is not just about aesthetics — it&apos;s about solving real problems
              with elegance and clarity.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:gap-3.5">
            {statCards.map(([n,l]) => (
              <div
                key={l}
                className="bg-[#222] border border-[#2e2e2e] rounded-xl py-4 px-3 sm:py-5 sm:px-4 flex flex-col items-center gap-2"
              >
                <span className="text-2xl sm:text-[30px] font-bold" style={{ color: G }}>{n}</span>
                <span className="text-[10px] text-[#666] uppercase tracking-wide text-center">{l}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
