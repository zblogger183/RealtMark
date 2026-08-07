type IconProps = {
  className?: string;
};

const base = {
  viewBox: "0 0 24 24",
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "square" as const,
  strokeLinejoin: "miter" as const,
  "aria-hidden": true,
};

export function IconSeo({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M9 3 L15 9 L9 15 L3 9 Z" />
      <path d="M12.5 12.5 L20 20" />
    </svg>
  );
}

export function IconWebsite({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="3" y="4" width="18" height="16" />
      <path d="M3 8.5 H21" />
      <path d="M6.5 13 H14" />
      <path d="M6.5 16.5 H11" />
    </svg>
  );
}

export function IconAds({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M12 4 L20 12 L12 20 L4 12 Z" />
      <rect x="9" y="9" width="6" height="6" />
      <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconBranding({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M12 3 L19 7.5 L19 16.5 L12 21 L5 16.5 L5 7.5 Z" />
      <path d="M7.5 12 H16.5" />
    </svg>
  );
}

export function IconContent({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="3" y="6" width="13" height="13" />
      <path d="M18 3 L21 6 L18 9 L15 6 Z" />
    </svg>
  );
}

export function IconCheck({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M4 12.5 L9.5 18 L20 6" />
    </svg>
  );
}

export function IconCrm({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="3" y="10" width="4" height="4" />
      <rect x="10" y="10" width="4" height="4" />
      <rect x="17" y="10" width="4" height="4" />
      <path d="M7 12 H10 M14 12 H17" />
    </svg>
  );
}
