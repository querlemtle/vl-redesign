import PropTypes from "prop-types";

function FbIcon({ size, lineFill }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 74 74"
    >
      <g clipPath="url(#a)">
        <path
          fill={lineFill}
          d="M73.315 36.919C73.315 16.654 56.861.186 36.658.186 16.453.186 0 16.654 0 36.919c0 18.73 14.061 34.193 32.143 36.43V46.448H23.46v-8.07h8.683V22.864c.025-.252.765-6.01 7.87-6.688h9.719v6.085h-5.378c-.148.05-3.429.553-4.169 3.821l-.025.151.1 12.144h7.548v8.07h-8.042v27.028c18.748-1.558 33.549-17.348 33.549-36.556ZM42.208 70.633V48.962h8.042v-13.1h-7.573l-.074-9.327c.419-1.459 1.973-1.735 1.9-1.735h7.671V13.662H39.89c-9.177.855-10.188 8.825-10.213 9.051v13.15h-8.683v13.099h8.683v21.446C14.16 67.19 2.466 53.387 2.466 36.918 2.467 18.038 17.812 2.7 36.659 2.7c18.846 0 34.19 15.337 34.19 34.218 0 16.972-12.433 31.051-28.64 33.716Z"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 .186h73.315V73.5H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

function XIcon({ size, lineFill }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 74 74"
    >
      <circle
        cx={36.657}
        cy={36.657}
        r={35.436}
        stroke={lineFill}
        strokeWidth={2.444}
      />
      <path
        fill={lineFill}
        fillRule="evenodd"
        stroke={lineFill}
        strokeWidth={0.733}
        d="m39.824 31.493-9.538-14.387H19.551l14.144 21.775-14.144 17.053h3.404L35.19 41.183l9.76 15.024h11.258L41.336 33.773 55.16 17.106h-3.404L39.824 31.493Zm-16.321-12.2h5.686L52.21 54.02h-6.15L23.503 19.293Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function YtIcon({ size, lineFill }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 56 56"
    >
      <path
        fill={lineFill}
        fillRule="evenodd"
        d="M25.946 22.432c-.922-.498-2.094.1-2.094 1.067V32.5c0 .967 1.172 1.565 2.094 1.067l8.335-4.501c.895-.483.895-1.651 0-2.134l-8.335-4.501Zm-.712 1.067 8.336 4.5-8.335 4.502v-9.002Z"
        clipRule="evenodd"
      />
      <path
        fill={lineFill}
        fillRule="evenodd"
        d="M9.333 19.289c0-1.375 1.238-2.49 2.766-2.49H43.9c1.527 0 2.766 1.115 2.766 2.49V36.71c0 1.375-1.239 2.489-2.766 2.489H12.1c-1.528 0-2.766-1.114-2.766-2.49V19.29Zm2.766-1.245H43.9c.764 0 1.383.557 1.383 1.245V36.71c0 .687-.62 1.244-1.383 1.244H12.1c-.764 0-1.383-.557-1.383-1.244V19.289c0-.688.619-1.245 1.383-1.245Z"
        clipRule="evenodd"
      />
      <circle
        cx={28}
        cy={28}
        r={27.067}
        stroke={lineFill}
        strokeWidth={1.867}
      />
    </svg>
  );
}

function EmailIcon({ size, lineFill }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 30 30"
      fill="none"
    >
      <circle cx={15} cy={15} r={14.5} stroke={lineFill} />
      <path
        fill={lineFill}
        d="M23.98 9H7.02A1.02 1.02 0 0 0 6 10.02v11.193c0 .564.457 1.02 1.02 1.02h16.96a1.02 1.02 0 0 0 1.02-1.02V10.02A1.02 1.02 0 0 0 23.98 9Zm-8.478.972H23.3c-1.22 1.18-2.444 2.36-3.663 3.536l-3.017 2.915c-.175.17-.87.744-1.118 1.069-.247-.33-.942-.904-1.117-1.069l-3.017-2.915c-1.224-1.175-2.443-2.356-3.668-3.536h7.802Zm-8.53 10.687V10.278c1.778 1.715 3.556 3.434 5.334 5.15l-5.334 5.231Zm8.53.603H7.4l5.432-5.33c.806.778 1.607 1.555 2.414 2.332a.376.376 0 0 0 .515 0c.806-.777 1.608-1.554 2.414-2.332l5.432 5.33h-8.104Zm8.526-.603L18.7 15.427c1.778-1.715 3.556-3.434 5.334-5.15V20.66h-.005Z"
      />
    </svg>
  );
}

function LeftArrow({ size, lineFill }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 36 36"
    >
      <circle cx={18} cy={18} r={17} stroke={lineFill} strokeWidth={2} />
      <path
        fill={lineFill}
        d="M23.67 9.77 21.9 8 12 17.9l9.9 9.9 1.77-1.77-8.13-8.13 8.13-8.13Z"
      />
    </svg>
  );
}

function RightArrow({ size, lineFill }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 36 36"
    >
      <circle cx={18} cy={18} r={17} stroke={lineFill} strokeWidth={2} />
      <path
        fill={lineFill}
        d="M14 26.23 15.77 28l10-10-10-10L14 9.77 22.23 18 14 26.23Z"
      />
    </svg>
  );
}

const propTypes = {
  size: PropTypes.number.isRequired,
  lineFill: PropTypes.string.isRequired,
};

FbIcon.propTypes = propTypes;
XIcon.propTypes = propTypes;
YtIcon.propTypes = propTypes;
EmailIcon.propTypes = propTypes;
LeftArrow.propTypes = propTypes;
RightArrow.propTypes = propTypes;

export { FbIcon, XIcon, YtIcon, EmailIcon, LeftArrow, RightArrow };
