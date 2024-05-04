import PropTypes from "prop-types";

export default function XIcon({ lineFill }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={32}
      fill="none"
    >
      <path
        d="m13.393 8 3.903 5.887L22.179 8h1.392l-5.657 6.82L24 24h-4.607l-3.994-6.148-5.006 6.036H9l5.788-6.978L9 8h4.393Zm-.45.895h-2.326l9.23 14.21h2.517l-9.42-14.21Z"
        clipRule="evenodd"
      />
      <path
        fill={lineFill}
        fillRule="evenodd"
        d="M31 16c0 8.284-6.716 15-15 15-8.284 0-15-6.716-15-15C1 7.716 7.716 1 16 1c8.284 0 15 6.716 15 15Zm-1 0c0 7.732-6.268 14-14 14S2 23.732 2 16 8.268 2 16 2s14 6.268 14 14Z"
        clipRule="evenodd"
      />
      <path
        fill={lineFill}
        fillRule="evenodd"
        stroke={lineFill}
        strokeWidth={0.3}
        d="m13.393 8 3.903 5.887L22.179 8h1.392l-5.657 6.82L24 24h-4.607l-3.994-6.148-5.006 6.036H9l5.788-6.978L9 8h4.393Zm-.45.895h-2.326l9.23 14.21h2.517l-9.42-14.21Z"
        clipRule="evenodd"
      />
      <path
        d="M31 16c0 8.284-6.716 15-15 15-8.284 0-15-6.716-15-15C1 7.716 7.716 1 16 1c8.284 0 15 6.716 15 15Zm-1 0c0 7.732-6.268 14-14 14S2 23.732 2 16 8.268 2 16 2s14 6.268 14 14Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

XIcon.propTypes = {
  lineFill: PropTypes.string.isRequired,
};
