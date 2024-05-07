import PropTypes from "prop-types";

function FbIcon({ lineFill }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} fill="none">
      <path
        fill={lineFill}
        d="M30 15.03C30 6.74 23.267 0 15 0S0 6.739 0 15.03c0 7.665 5.754 13.993 13.153 14.908V18.93H9.6v-3.302h3.553V9.28c.01-.103.313-2.459 3.22-2.737h3.977v2.49h-2.2c-.061.02-1.404.226-1.706 1.564l-.01.061.04 4.97h3.089v3.302h-3.291V29.99C23.944 29.352 30 22.89 30 15.03ZM17.271 28.828V19.96h3.29v-5.36h-3.098l-.03-3.817c.171-.597.807-.71.777-.71h3.14V5.514h-5.028c-3.755.35-4.169 3.612-4.179 3.704v5.38H8.59v5.36h3.553v8.777C5.794 27.418 1.01 21.77 1.01 15.03 1.01 7.305 7.288 1.029 15 1.029S28.99 7.305 28.99 15.03c0 6.944-5.087 12.706-11.719 13.796Z"
      />
    </svg>
  );
}

FbIcon.propTypes = {
  lineFill: PropTypes.string.isRequired,
};

function XIcon({ lineFill }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} fill="none">
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

function YtIcon({ lineFill }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} fill="none">
      <path
        fill={lineFill}
        fillRule="evenodd"
        d="M12.778 12.589c0-.519.628-.838 1.122-.572l4.465 2.411c.48.26.48.885 0 1.144l-4.465 2.41c-.494.268-1.122-.052-1.122-.57v-4.823ZM17.984 15l-4.466-2.411v4.822L17.985 15Z"
        clipRule="evenodd"
      />
      <path
        fill={lineFill}
        fillRule="evenodd"
        d="M6.481 9C5.663 9 5 9.597 5 10.333v9.334C5 20.403 5.663 21 6.481 21h17.037c.819 0 1.482-.597 1.482-1.333v-9.334C25 9.597 24.337 9 23.518 9H6.482Zm17.778 1.333c0-.368-.331-.666-.74-.666H6.48c-.409 0-.74.298-.74.666v9.334c0 .368.331.666.74.666h17.037c.41 0 .741-.298.741-.666v-9.334Z"
        clipRule="evenodd"
      />
      <path
        fill={lineFill}
        fillRule="evenodd"
        d="M30 15c0 8.284-6.716 15-15 15-8.284 0-15-6.716-15-15C0 6.716 6.716 0 15 0c8.284 0 15 6.716 15 15Zm-1 0c0 7.732-6.268 14-14 14S1 22.732 1 15 7.268 1 15 1s14 6.268 14 14Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

YtIcon.propTypes = {
  lineFill: PropTypes.string.isRequired,
};

function LeftArrow({ lineFill }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={36} height={36} fill="none">
      <circle cx={18} cy={18} r={17} stroke={lineFill} strokeWidth={2} />
      <path
        fill={lineFill}
        d="M23.67 9.77 21.9 8 12 17.9l9.9 9.9 1.77-1.77-8.13-8.13 8.13-8.13Z"
      />
    </svg>
  );
}

LeftArrow.propTypes = {
  lineFill: PropTypes.string.isRequired,
};

function RightArrow({ lineFill }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={36} height={36} fill="none">
      <circle cx={18} cy={18} r={17} stroke={lineFill} strokeWidth={2} />
      <path
        fill={lineFill}
        d="M14 26.23 15.77 28l10-10-10-10L14 9.77 22.23 18 14 26.23Z"
      />
    </svg>
  );
}

RightArrow.propTypes = {
  lineFill: PropTypes.string.isRequired,
};

export { FbIcon, XIcon, YtIcon, LeftArrow, RightArrow };
