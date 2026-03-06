import { G } from "./constants";

type PricingSectionProps = {
  sectionRef: (el: HTMLDivElement | null) => void;
};

const BASIC_FEATURES = [
  "Need your wireframe",
  "Design with Figma, Framer",
  "Implement with Webflow, React, WordPress, Laravel/PHP",
  "Remote/Online",
  "Work in business days, no weekend.",
  "Support 6 months",
];

const PREMIUM_FEATURES = [
  "Don't need wireframe or anything",
  "Design with Figma, Framer from scratch",
  "Implement with Webflow, React, WordPress, Laravel/PHP",
  "Remote/Online",
  "Work with both weekend",
  "Support 12 months",
  "Your project alway be priority",
  "Customer care gifts",
];

export default function PricingSection({ sectionRef }: PricingSectionProps) {
  return (
    <div ref={sectionRef} id="pricing" className="py-10 lg:py-20 lg:pb-[60px] border-t border-[#252525]">
      <div className="fade-card" data-delay={0}>
        <h2 className="section-heading font-bold tracking-tight mb-8 lg:mb-12 leading-tight">
          My <span style={{ color: G }}>Pricing</span>
        </h2>

        <div className="flex flex-col sm:flex-row gap-6 lg:gap-8">
          {/* BASIC */}
          <div className="border border-[#c4c4c4] rounded-3xl p-5 sm:p-6 lg:py-9 lg:px-7 bg-[#1a1a1a] flex flex-col flex-1 min-w-0">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 mb-4 lg:mb-5">
              <div className="text-base lg:text-lg font-bold text-white tracking-wide uppercase">BASIC</div>
              <p className="text-xs lg:text-[13px] text-[#888] leading-snug sm:text-right sm:max-w-[200px]">Have design ready to build? or small budget</p>
            </div>
            <div className="flex items-baseline gap-2 mb-6 lg:mb-7">
              <span className="text-4xl lg:text-[48px] font-bold leading-none" style={{ color: G }}>$49</span>
              <span className="text-sm lg:text-[15px] text-white">/ hours</span>
            </div>
            <ul className="list-none p-0 m-0 mb-6 lg:mb-8 flex flex-col gap-3">
              {BASIC_FEATURES.map((item) => (
                <li key={item} className="text-sm text-[#ddd] leading-normal">{item}</li>
              ))}
            </ul>
            <button
              type="button"
              className="mt-auto rounded-xl py-4 px-5 font-bold text-xs tracking-wide uppercase cursor-pointer font-[inherit] border-0 w-full sm:w-auto"
              style={{ background: G, color: "#000" }}
            >
              PICK THIS PACKAGE
            </button>
          </div>

          {/* PREMIUM */}
          <div className="border border-[#c4c4c4] rounded-3xl p-5 sm:p-6 lg:py-9 lg:px-7 bg-[#1a1a1a] flex flex-col flex-1 min-w-0">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 mb-4 lg:mb-5">
              <div className="text-base lg:text-lg font-bold text-white tracking-wide uppercase">PREMIUM</div>
              <p className="text-xs lg:text-[13px] text-[#888] leading-snug sm:text-right sm:max-w-[200px]">Not have any design? Leave its for me</p>
            </div>
            <div className="flex items-baseline gap-2 mb-6 lg:mb-7">
              <span className="text-4xl lg:text-[48px] font-bold leading-none" style={{ color: G }}>$99</span>
              <span className="text-sm lg:text-[15px] text-white">/ hours</span>
            </div>
            <ul className="list-none p-0 m-0 mb-6 lg:mb-8 flex flex-col gap-3">
              {PREMIUM_FEATURES.map((item) => (
                <li key={item} className="text-sm text-[#ddd] leading-normal">{item}</li>
              ))}
            </ul>
            <button
              type="button"
              className="mt-auto rounded-xl py-4 px-5 font-bold text-xs tracking-wide uppercase cursor-pointer font-[inherit] border-0 w-full sm:w-auto"
              style={{ background: G, color: "#000" }}
            >
              PICK THIS PACKAGE
            </button>
          </div>
        </div>

        <div className="mt-8 lg:mt-12 pt-6 lg:pt-8 border-t border-[#252525]">
          <p className="text-[#888] text-sm lg:text-[15px] leading-relaxed mb-2">
            Don&apos;t find any package match with your plan!
          </p>
          <p className="text-[#888] text-sm lg:text-[15px] leading-relaxed">
            Want to setup a new tailor-made package for only you?.{" "}
            <a href="#contact" className="underline cursor-pointer font-[inherit]" style={{ color: G }}>
              Contact Us
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
