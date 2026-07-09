import React from 'react';

/**
 * Original LinguDeep logo — a globe inside a speech bubble.
 * Hand-crafted SVG, no external dependencies.
 */
const LinguDeepLogo: React.FC<{ size?: number; className?: string }> = ({ size = 32, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Speech bubble outline */}
    <path
      d="M50 8C27.4 8 9 24.2 9 44.2C9 55.4 15.2 65.2 25 71.4L20 90L38.6 78.6C42.2 79.4 46 79.8 50 79.8C72.6 79.8 91 63.6 91 43.6C91 23.6 72.6 8 50 8Z"
      fill="currentColor"
    />
    {/* Globe circle */}
    <circle cx="50" cy="43" r="22" fill="none" stroke="white" strokeWidth="3.5" />
    {/* Globe horizontal line */}
    <line x1="28" y1="43" x2="72" y2="43" stroke="white" strokeWidth="3" />
    {/* Globe vertical meridian */}
    <ellipse cx="50" cy="43" rx="10" ry="22" fill="none" stroke="white" strokeWidth="3" />
    {/* Globe top latitude */}
    <path d="M33 33 Q50 28 67 33" fill="none" stroke="white" strokeWidth="2.5" />
    {/* Globe bottom latitude */}
    <path d="M33 53 Q50 58 67 53" fill="none" stroke="white" strokeWidth="2.5" />
  </svg>
);

export default LinguDeepLogo;
