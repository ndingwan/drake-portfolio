"use client";

import { useState } from "react";
import { G } from "./constants";

const socialIcons = [
  <svg key="ig" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width={14} height={14}><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none"/></svg>,
  <svg key="tw" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width={14} height={14}><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/></svg>,
  <svg key="in" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width={14} height={14}><circle cx="12" cy="12" r="10"/><path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"/></svg>,
  <svg key="gh" viewBox="0 0 24 24" fill="currentColor" width={14} height={14}><path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 6.8c.85.004 1.71.115 2.51.337 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10.01 10.01 0 0022 12c0-5.52-4.48-10-10-10z"/></svg>,
];

const ProfileImagePlaceholder = () => (
  <svg width="100%" height="100%" viewBox="0 0 280 280" fill="none" style={{ display: "block" }}>
    <rect width="280" height="280" fill="#2a2a2a"/>
    <circle cx="140" cy="100" r="70" fill="#3a3a3a"/>
    <ellipse cx="140" cy="320" rx="120" ry="80" fill="#3a3a3a"/>
  </svg>
);

type ProfileCardProps = { compact?: boolean };

export default function ProfileCard({ compact }: ProfileCardProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="w-full max-w-[800px] lg:w-[480px] shrink-0 flex items-center justify-center p-3 sm:p-4 lg:py-7 lg:px-6 lg:ml-6 lg:mr-10 mx-auto lg:mx-0 h-full min-h-0">
      <div
        className={`w-full bg-[#222] border border-[#c4c4c4] rounded-3xl p-6 sm:p-7 lg:py-8 lg:px-[30px] flex flex-col items-center ${
          compact
            ? "min-h-[68vh] overflow-visible"
            : "min-h-0 lg:min-h-[720px] overflow-y-auto"
        }`}
      >
        <div className="w-full flex justify-between items-start mb-6">
          <div className="text-2xl font-extrabold lg:text-xl lg:font-bold text-white tracking-wide">Drake<sup className="text-xs lg:text-[10px] align-super font-normal">®</sup></div>
          <div className="text-right text-sm font-medium lg:text-xs lg:font-normal text-[#aaa] leading-snug">
            <div>Framer Designer</div>
            <div>&amp; Developer</div>
          </div>
        </div>

        <div className="w-full max-w-[75%] lg:max-w-full mx-auto rounded-xl overflow-hidden mb-6 relative aspect-square min-h-0 max-h-[200px] lg:max-h-none lg:aspect-square lg:min-h-0 bg-[#2a2a2a]">
          {imageError ? (
            <ProfileImagePlaceholder />
          ) : (
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop"
              alt="Drake"
              className="w-full h-full object-cover grayscale block"
              onError={() => setImageError(true)}
            />
          )}
        </div>

        <p className="text-base font-semibold lg:text-[15px] lg:font-normal text-[#eee] text-center mb-1 tracking-wide">hello@drake.design</p>
        <p className="text-base font-semibold lg:text-[15px] lg:font-normal text-[#eee] text-center mb-5">Based in Los Angeles, CA</p>

        <p className="text-xs font-medium lg:text-[11px] lg:font-normal text-[#555] text-center mb-4">© 2022 Drake. All Rights Reserved</p>

        <div className="flex gap-3 mb-6 justify-center">
          {socialIcons.map((icon, i) => (
            <button
              key={i}
              type="button"
              className="w-[42px] h-[42px] border border-[#555] rounded-full bg-transparent text-[#aaa] flex items-center justify-center cursor-pointer"
            >
              {icon}
            </button>
          ))}
        </div>

        <button
          type="button"
          className="w-full rounded-[36px] py-4 font-extrabold text-xl lg:text-lg cursor-pointer font-[inherit] tracking-wide flex items-center justify-center gap-2.5 border-0"
          style={{ background: G, color: "#000" }}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={20} height={20}>
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
            <polyline points="22,6 12,13 2,6"/>
          </svg>
          HIRE ME!
        </button>
      </div>
    </div>
  );
}
