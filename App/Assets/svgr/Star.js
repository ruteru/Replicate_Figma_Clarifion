import * as React from "react";
const SvgStar = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={13}
    height={13}
    fill="none"
    {...props}
  >
    <path
      fill="#FBBC04"
      d="m2.826 12.298 1.388-4.54L.541 5.13h4.54L6.514.352 7.948 5.13h4.539L8.814 7.758l1.388 4.54L6.514 9.49z"
    />
  </svg>
);
export default SvgStar;
