import PropTypes from "prop-types";

export default function YtIcon({ lineFill }) {
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
