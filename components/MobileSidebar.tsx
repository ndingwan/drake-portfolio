"use client";

import { NAV_ITEMS, G } from "./constants";

const SIDEBAR_LABELS: Record<string, string> = {
  introduce: "Home",
  about: "About",
  experience: "Resume",
  services: "Services",
  skills: "Skills",
  projects: "Portfolio",
  clients: "Testimonial",
  brands: "Brands",
  pricing: "Pricing",
  contact: "Contact",
};

const socialIcons = [
  <svg key="ig" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width={18} height={18}><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none"/></svg>,
  <svg key="tw" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width={18} height={18}><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/></svg>,
  <svg key="dr" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width={18} height={18}><circle cx="12" cy="12" r="10"/><path d="M12 6v12M6 12h12"/><path d="M6 8.5c2 2 4 2 6 0M6 15.5c2-2 4-2 6 0"/></svg>,
];

type MobileSidebarProps = {
  isOpen: boolean;
  onClose: () => void;
  active: string;
  onNavigate: (id: string) => void;
};

export default function MobileSidebar({ isOpen, onClose, active, onNavigate }: MobileSidebarProps) {
  const handleNav = (id: string) => {
    onNavigate(id);
    onClose();
  };

  return (
    <>
      {/* Backdrop */}
      <div
        aria-hidden
        onClick={onClose}
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.4)",
          zIndex: 49,
          opacity: isOpen ? 1 : 0,
          visibility: isOpen ? "visible" : "hidden",
          transition: "opacity 0.25s, visibility 0.25s",
        }}
      />

      {/* Sidebar panel */}
      <div
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          width: 280,
          maxWidth: "85vw",
          background: "#0d0d0d",
          zIndex: 50,
          transform: isOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.3s ease-out",
          display: "flex",
          flexDirection: "column",
          boxShadow: "-4px 0 24px rgba(0,0,0,0.5)",
        }}
      >
        {/* Header */}
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "20px 20px 24px",
          borderBottom: "1px solid #222",
        }}>
          <span style={{ fontSize: 16, fontWeight: 600, color: "#fff" }}>Menu</span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            style={{
              width: 40,
              height: 40,
              border: "1px solid #333",
              borderRadius: "50%",
              background: "transparent",
              color: "#aaa",
              fontSize: 20,
              lineHeight: 1,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            ×
          </button>
        </div>

        {/* Nav links */}
        <nav style={{ flex: 1, padding: "24px 0", overflowY: "auto" }}>
          {NAV_ITEMS.map(({ id, label, Icon }) => {
            const isActiveItem = active === id;
            const displayLabel = SIDEBAR_LABELS[id] ?? label;
            return (
              <button
                key={id}
                type="button"
                onClick={() => handleNav(id)}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  padding: "14px 20px",
                  border: "none",
                  background: "transparent",
                  color: isActiveItem ? G : "#fff",
                  fontSize: 15,
                  fontWeight: 500,
                  cursor: "pointer",
                  textAlign: "left",
                  fontFamily: "inherit",
                }}
              >
                <span style={{ color: isActiveItem ? G : "#888", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Icon />
                </span>
                {displayLabel}
              </button>
            );
          })}
        </nav>

        {/* Social */}
        <div style={{ padding: "20px 20px 28px", borderTop: "1px solid #222" }}>
          <div style={{ fontSize: 11, color: "#666", fontWeight: 600, letterSpacing: 1, marginBottom: 14, textTransform: "uppercase" }}>Social</div>
          <div style={{ display: "flex", gap: 12 }}>
            {socialIcons.map((icon, i) => (
              <button
                key={i}
                type="button"
                style={{
                  width: 40,
                  height: 40,
                  border: "1px solid #333",
                  borderRadius: "50%",
                  background: "transparent",
                  color: "#888",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
              >
                {icon}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
