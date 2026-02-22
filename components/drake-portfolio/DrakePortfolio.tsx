"use client";

import { useState, useEffect, useRef } from "react";
import { NAV_ITEMS } from "./constants";
import TopBar from "./TopBar";
import ProfileCard from "./ProfileCard";
import RightNav from "./RightNav";
import MobileSidebar from "./MobileSidebar";
import IntroduceSection from "./IntroduceSection";
import AboutSection from "./AboutSection";
import ExperienceSection from "./ExperienceSection";
import ServicesSection from "./ServicesSection";
import SkillsSection from "./SkillsSection";
import ProjectsSection from "./ProjectsSection";
import ClientsSection from "./ClientsSection";
import BrandsSection from "./BrandsSection";
import PricingSection from "./PricingSection";
import ContactSection from "./ContactSection";
import BeeEffect from "./BeeEffect";

// Use 1023 so at 1024px (Tailwind lg) we get desktop layout; otherwise mobile and lg would both apply at 1024px
const MOBILE_BREAK = 1023;

export default function DrakePortfolio() {
  const [active, setActive] = useState("introduce");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const centerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAK}px)`);
    const handler = () => setIsMobile(mql.matches);
    handler();
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    const root = centerRef.current;
    if (!root) return;
    const cleanups: (() => void)[] = [];
    NAV_ITEMS.forEach(({ id }) => {
      const el = sectionRefs.current[id];
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { root, threshold: 0.4 }
      );
      obs.observe(el);
      cleanups.push(() => obs.disconnect());
    });
    return () => cleanups.forEach((fn) => fn());
  }, []);

  useEffect(() => {
    const root = centerRef.current;
    if (!root) return;
    const cards = root.querySelectorAll(".fade-card");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = Number((entry.target as HTMLElement).dataset.delay) || 0;
            setTimeout(() => {
              entry.target.classList.add("visible");
            }, delay);
            obs.unobserve(entry.target);
          }
        });
      },
      { root, threshold: 0.15 }
    );
    cards.forEach((card) => obs.observe(card));
    return () => obs.disconnect();
  }, []);

  const goTo = (id: string) => {
    const el = sectionRefs.current[id];
    const container = centerRef.current;
    if (!el || !container) return;
    container.scrollTo({ top: el.offsetTop, behavior: "smooth" });
  };

  const handleMenuClick = () => setSidebarOpen(true);
  const handleSidebarClose = () => setSidebarOpen(false);
  const handleSidebarNav = (id: string) => {
    goTo(id);
    setSidebarOpen(false);
  };

  const setRef = (id: string) => (el: HTMLDivElement | null) => {
    sectionRefs.current[id] = el;
  };

  const activeLabel = NAV_ITEMS.find((n) => n.id === active)?.label ?? "Introduce";

  return (
    <div className="drake-portfolio-shell h-screen min-h-screen overflow-hidden bg-[#1a1a1a] text-white font-[Georgia,'Times_New_Roman',serif] relative">
      <BeeEffect />
      <TopBar activeLabel={activeLabel} onMenuClick={handleMenuClick} />

      <div className="absolute top-14 lg:top-[70px] left-0 right-0 bottom-0 flex flex-col lg:flex-row items-stretch gap-0 lg:gap-12 overflow-hidden">
        {/* Desktop: profile in left column, aligned to start like reference */}
        <div className="hidden lg:flex shrink-0 justify-start">
          <ProfileCard />
        </div>

        <div
          ref={centerRef}
          className="scroll-area flex-1 min-h-0 overflow-y-auto overflow-x-hidden px-4 sm:px-6 lg:px-[60px]"
        >
          {/* Mobile: profile scrolls with content; card has increased min height, no inner scroll */}
          {isMobile && (
            <div className="min-h-[68vh] shrink-0">
              <ProfileCard compact />
            </div>
          )}
          <IntroduceSection
            sectionRef={setRef("introduce")}
            onGoToProjects={() => goTo("projects")}
          />
          <AboutSection sectionRef={setRef("about")} />
          <ExperienceSection sectionRef={setRef("experience")} />
          <ServicesSection sectionRef={setRef("services")} />
          <SkillsSection sectionRef={setRef("skills")} />
          <ProjectsSection sectionRef={setRef("projects")} />
          <ClientsSection sectionRef={setRef("clients")} />
          <BrandsSection sectionRef={setRef("brands")} />
          <PricingSection sectionRef={setRef("pricing")} />
          <ContactSection sectionRef={setRef("contact")} />
        </div>

        <div className="hidden lg:flex">
          <RightNav active={active} onGoTo={goTo} />
        </div>

        <MobileSidebar
          isOpen={sidebarOpen}
          onClose={handleSidebarClose}
          active={active}
          onNavigate={handleSidebarNav}
        />
      </div>
    </div>
  );
}
