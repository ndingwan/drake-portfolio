import { G } from "./constants";

type ContactSectionProps = {
  sectionRef: (el: HTMLDivElement | null) => void;
};

const contactItems: [string, string][] = [["✉","hello@drake.design"],["◎","Los Angeles, CA"],["↗","Available for freelance"]];
const formPlaceholders = ["Your Name","Your Email","Subject"];

export default function ContactSection({ sectionRef }: ContactSectionProps) {
  return (
    <div ref={sectionRef} id="contact" className="py-10 lg:py-20 lg:pb-[120px] border-t border-[#252525]">
      <div className="fade-card" data-delay={0}>
        <div className="text-[11px] font-mono tracking-[0.2em] uppercase mb-4" style={{ color: G }}>GET IN TOUCH</div>
        <h2 className="section-heading font-bold tracking-tight mb-6 lg:mb-11 leading-tight">
          Let&apos;s Work <span style={{ color: G }}>Together</span>
        </h2>
        <div className="flex flex-col gap-8 lg:grid lg:grid-cols-[1fr_1.2fr] lg:gap-14">
          <div>
            <p className="text-[#888] text-sm lg:text-[15px] leading-[1.9] mb-6 lg:mb-8">
              Have a project in mind? I&apos;d love to hear about it. Let&apos;s create something amazing together.
            </p>
            {contactItems.map(([ic, txt]) => (
              <div key={txt} className="flex items-center gap-3.5 text-[#777] text-sm mb-4">
                <span className="text-base w-6 shrink-0" style={{ color: G }}>{ic}</span>
                {txt}
              </div>
            ))}
          </div>
          <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
            {formPlaceholders.map((ph) => (
              <input
                key={ph}
                placeholder={ph}
                className="bg-[#1e1e1e] border border-[#2a2a2a] rounded-[10px] py-3 px-4 text-white text-sm font-[inherit] outline-none w-full"
              />
            ))}
            <textarea
              placeholder="Your Message"
              className="bg-[#1e1e1e] border border-[#2a2a2a] rounded-[10px] py-3 px-4 text-white text-sm font-[inherit] outline-none w-full h-28 resize-none"
            />
            <button
              type="submit"
              className="self-start rounded-[10px] py-3 px-6 font-extrabold text-sm cursor-pointer font-[inherit] border-0"
              style={{ background: G, color: "#000" }}
            >
              Send Message →
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
