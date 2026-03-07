// Logo component for BazaarPrice BD
const Logo = () => {
  return (
    <div className="flex items-center gap-3">
      <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="45" height="45" rx="10" fill="url(#gradient)"/>
        <path d="M9 14h27v4.5H9V14zm0 7.5h27v4.5H9v-4.5zm0 7.5h18v4.5H9v-4.5z" fill="white"/>
        <circle cx="31.5" cy="29.25" r="3.75" fill="#fbbf24"/>
        <path d="M27.75 29.25l3.75 3.75 7.5-7.5" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{stopColor:'#16a34a'}} />
            <stop offset="100%" style={{stopColor:'#15803d'}} />
          </linearGradient>
        </defs>
      </svg>
      <div className="flex flex-col">
        <span className="text-2xl font-bold text-white drop-shadow-sm">BazaarPrice</span>
        <span className="text-sm text-green-100 font-medium">BD</span>
      </div>
    </div>
  );
};

export default Logo;