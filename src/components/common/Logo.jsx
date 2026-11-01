import { Link } from "react-router-dom";

function Logo({ to = "/", className = "" }) {
  return (
    <Link
      to={to}
      className={`inline-flex items-center gap-3 text-[var(--accent)] ${className}`}
      aria-label="بيت الطحين"
    >
      <svg
        width="52"
        height="52"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Outer emblem */}
        <path
          d="M32 4C16.536 4 4 16.536 4 32s12.536 28 28 28 28-12.536 28-28S47.464 4 32 4Z"
          stroke="currentColor"
          strokeWidth="1.8"
        />

        {/* Roof / house */}
        <path
          d="M19 31.5 32 20l13 11.5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* House body */}
        <path
          d="M22 30.5V44h20V30.5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Door */}
        <path
          d="M29 44V36h6v8"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* Left wheat stem */}
        <path
          d="M17.5 45c1.8-6.5 1.8-13.5 0-20"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />

        <path
          d="M17.5 29.5c-3-1.2-4.2-3.1-4.4-5.3 2.8.2 4.5 1.6 4.4 5.3Z"
          fill="currentColor"
        />

        <path
          d="M17.5 34c-3-1.2-4.2-3.1-4.4-5.3 2.8.2 4.5 1.6 4.4 5.3Z"
          fill="currentColor"
        />

        <path
          d="M17.5 38.5c-2.8-1.1-4-2.9-4.2-5 2.7.2 4.3 1.5 4.2 5Z"
          fill="currentColor"
        />

        {/* Right wheat stem */}
        <path
          d="M46.5 45c-1.8-6.5-1.8-13.5 0-20"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />

        <path
          d="M46.5 29.5c3-1.2 4.2-3.1 4.4-5.3-2.8.2-4.5 1.6-4.4 5.3Z"
          fill="currentColor"
        />

        <path
          d="M46.5 34c3-1.2 4.2-3.1 4.4-5.3-2.8.2-4.5 1.6-4.4 5.3Z"
          fill="currentColor"
        />

        <path
          d="M46.5 38.5c2.8-1.1 4-2.9 4.2-5-2.7.2-4.3 1.5-4.2 5Z"
          fill="currentColor"
        />

        {/* Flour line */}
        <path
          d="M18 48h28"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>

      <span className="font-['Amiri'] text-3xl font-bold text-[var(--accent)]">
        بيت الطحين
      </span>
    </Link>
  );
}

export default Logo;
