import React from "react";

const CrossSvg = ({ className, color, width = 20, height = 20, ...rest }) => (
  <span {...rest}>
    <svg
      className={className}
      viewBox="0 0 14 14"
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      focusable="false"
      aria-hidden="true"
    >
      <path
        fill={color}
        fillRule="evenodd"
        d="M14 1.41L12.59 0 7 5.59 1.41 0 0 1.41 5.59 7 0 12.59 1.41 14 7 8.41 12.59 14 14 12.59 8.41 7z"
      />
    </svg>
  </span>
);

export default CrossSvg;
