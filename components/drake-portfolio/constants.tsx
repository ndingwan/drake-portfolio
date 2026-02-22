import React from "react";

export const G = "#39FF7E";

export const NAV_ITEMS = [
  { id: "introduce",  label: "Introduce",  Icon: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width={18} height={18}><path d="M3 12L12 3l9 9M5 10v9a1 1 0 001 1h4v-5h4v5h4a1 1 0 001-1v-9"/></svg> },
  { id: "about",      label: "About",      Icon: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width={18} height={18}><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg> },
  { id: "experience", label: "Experience", Icon: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width={18} height={18}><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2"/><line x1="3" y1="12" x2="21" y2="12"/></svg> },
  { id: "services",   label: "Services",   Icon: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width={18} height={18}><rect x="3" y="3" width="8" height="8" rx="1"/><rect x="13" y="3" width="8" height="8" rx="1"/><rect x="3" y="13" width="8" height="8" rx="1"/><rect x="13" y="13" width="8" height="8" rx="1"/></svg> },
  { id: "skills",     label: "Skills",     Icon: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width={18} height={18}><circle cx="12" cy="12" r="9"/><path d="M12 3v9l5 3"/></svg> },
  { id: "projects",   label: "Projects",   Icon: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width={18} height={18}><path d="M12 17V7M12 17l-4-4M12 17l4-4"/></svg> },
  { id: "clients",    label: "Clients",    Icon: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width={18} height={18}><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg> },
  { id: "brands",     label: "Brands",     Icon: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width={18} height={18}><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg> },
  { id: "pricing",    label: "Pricing",    Icon: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width={18} height={18}><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg> },
  { id: "contact",    label: "Contact",    Icon: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width={18} height={18}><circle cx="11" cy="11" r="7"/><path d="M21 21l-4-4"/></svg> },
];

export const PROJECTS = [
  { title: "Buena – Architecture Studio Website", tags: ["Webflow","Design"],   bg: "#1a1a2e" },
  { title: "Kaizen WordPress Theme",              tags: ["WordPress","Theme"],  bg: "#16213e" },
  { title: "Dodily Dashboard",                   tags: ["React","Dashboard"],  bg: "#c8820a", light: true },
  { title: "Fontaine – Real Estate Redesign",    tags: ["Webflow","UX"],       bg: "#0f3460" },
  { title: "LWA – Lyra Portfolio Template",      tags: ["Framer","Template"],  bg: "#e8e8e8", light: true },
  { title: "NovaSpark – SaaS Landing",           tags: ["React","Design"],     bg: "#1a2e1a" },
];

export const SKILLS = [
  { name: "Figma",     pct: 92, color: "#F24E1E" },
  { name: "Framer",    pct: 85, color: "#4488FF" },
  { name: "Webflow",   pct: 80, color: "#4353FF" },
  { name: "React",     pct: 90, color: "#61DAFB" },
  { name: "WordPress", pct: 86, color: "#4db8e8" },
  { name: "Low-Code",  pct: 70, color: "#34D399" },
];
