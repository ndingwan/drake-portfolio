type TopBarProps = { activeLabel: string; onMenuClick?: () => void };

export default function TopBar({ activeLabel, onMenuClick }: TopBarProps) {
  return (
    <div className="absolute top-0 left-0 right-0 h-14 lg:h-[70px] flex items-center justify-between px-4 pr-5 lg:px-9 lg:pr-12 z-50">
      <div className="topbar-settings-spin w-[38px] h-[38px] border border-[#333] rounded-full flex items-center justify-center cursor-pointer">
        <svg viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="1.6" width={18} height={18}>
          <circle cx="12" cy="12" r="3"/>
          <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/>
        </svg>
      </div>

      <div className="flex items-center gap-2 border border-[#3a3a3a] rounded-[28px] py-2 px-5 text-sm text-[#ddd] bg-[rgba(30,30,30,0.6)] backdrop-blur-md">
        <svg viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="1.8" width={15} height={15}>
          <path d="M3 12L12 3l9 9M5 10v9a1 1 0 001 1h4v-5h4v5h4a1 1 0 001-1v-9"/>
        </svg>
        {activeLabel}
      </div>

      <button
        type="button"
        aria-label="Open menu"
        onClick={onMenuClick}
        className="w-[42px] h-[42px] mr-4 lg:mr-[18px] border border-[#333] rounded-full flex flex-col items-center justify-center gap-1 cursor-pointer bg-transparent"
      >
        <span className="block w-4 h-[3px] bg-[#aaa] rounded-sm" />
        <span className="block w-4 h-[3px] bg-[#aaa] rounded-sm" />
        <span className="block w-4 h-[3px] bg-[#aaa] rounded-sm" />
      </button>
    </div>
  );
}
