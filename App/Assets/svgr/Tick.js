import * as React from "react";
const SvgTick = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={22}
    fill="none"
    {...props}
  >
    <path
      stroke="#2C7EF8"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.5}
      d="m2 11 6.659 7 13.34-14"
    />
  </svg>
);
export default SvgTick;
