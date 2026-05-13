const baseProps = {
  width: 18,
  height: 18,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
  focusable: false,
};

export function IconCoaching(props) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M12 14a4 4 0 1 0-4-4" />
      <path d="M10 10h.01" />
      <path d="M14 10h.01" />
      <path d="M9 14c0 2 1.5 3.5 3 3.5s3-1.5 3-3.5" />
      <path d="M12 17.5V20" />
      <path d="M9 20h6" />
    </svg>
  );
}

export function IconOrgChart(props) {
  return (
    <svg {...baseProps} {...props}>
      <rect x="9" y="3" width="6" height="4" rx="0.5" />
      <rect x="3" y="15" width="6" height="4" rx="0.5" />
      <rect x="15" y="15" width="6" height="4" rx="0.5" />
      <path d="M12 7v3" />
      <path d="M6 15v-2h12v2" />
    </svg>
  );
}

export function IconPeople(props) {
  return (
    <svg {...baseProps} {...props}>
      <circle cx="9" cy="9" r="2.5" />
      <circle cx="16" cy="10" r="1.75" />
      <path d="M4 18c0-2.5 2.2-4 5-4s5 1.5 5 4" />
      <path d="M14.5 18c0-1.8 1.4-3 3-3s3 1.2 3 3" />
    </svg>
  );
}

export function IconStrategy(props) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M3 17l5-5 3 3 5-6 5 4" />
      <circle cx="3" cy="17" r="1" fill="currentColor" stroke="none" />
      <circle cx="8" cy="12" r="1" fill="currentColor" stroke="none" />
      <circle cx="11" cy="15" r="1" fill="currentColor" stroke="none" />
      <circle cx="16" cy="9" r="1" fill="currentColor" stroke="none" />
      <circle cx="21" cy="13" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconSpeaking(props) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M3 11v2a1 1 0 0 0 1 1h2l5 4V6L6 10H4a1 1 0 0 0-1 1z" />
      <path d="M15 8.5a3.5 3.5 0 0 1 0 7" />
      <path d="M17.5 6a6 6 0 0 1 0 12" />
    </svg>
  );
}

export function IconDocument(props) {
  return (
    <svg {...baseProps} {...props}>
      <rect x="5" y="3" width="14" height="18" rx="1" />
      <path d="M9 3v3h6V3" />
      <path d="M8 11h4" />
      <path d="M8 14h6" />
      <path d="M8 17h3" />
      <circle cx="16" cy="11" r="1.5" />
    </svg>
  );
}

export function IconBadge(props) {
  return (
    <svg {...baseProps} {...props}>
      <circle cx="12" cy="12" r="9" strokeDasharray="2 1.5" />
      <path d="M8.5 12l2.5 2.5L16 9.5" />
    </svg>
  );
}

export function IconCheckCircle(props) {
  return (
    <svg {...baseProps} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M8 12l3 3 5-6" />
    </svg>
  );
}

export function IconBook(props) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M4 5a2 2 0 0 1 2-2h5v16H6a2 2 0 0 0-2 2V5z" />
      <path d="M20 5a2 2 0 0 0-2-2h-5v16h5a2 2 0 0 1 2 2V5z" />
      <path d="M12 3v16" />
    </svg>
  );
}
