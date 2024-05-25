import * as React from "react";
const SvgPercentage = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <circle cx={16} cy={16} r={16} fill="#2C7EF8" />
    <mask
      id="percentage_svg__a"
      width={20}
      height={20}
      x={6}
      y={6}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha",
      }}
    >
      <path fill="#D9D9D9" d="M6.4 6.4h19.2v19.2H6.4z" />
    </mask>
    <g mask="url(#percentage_svg__a)">
      <path
        fill="#fff"
        d="M12.4 15.2a2.7 2.7 0 0 1-1.98-.82 2.7 2.7 0 0 1-.82-1.98q0-1.16.82-1.98a2.7 2.7 0 0 1 1.98-.82q1.16 0 1.98.82t.82 1.98-.82 1.98a2.7 2.7 0 0 1-1.98.82m0-1.6q.5 0 .85-.35t.35-.85-.35-.85a1.16 1.16 0 0 0-.85-.35q-.5 0-.85.35t-.35.85.35.85.85.35m7.2 8.8a2.7 2.7 0 0 1-1.98-.82 2.7 2.7 0 0 1-.82-1.98q0-1.16.82-1.98a2.7 2.7 0 0 1 1.98-.82q1.16 0 1.98.82t.82 1.98-.82 1.98a2.7 2.7 0 0 1-1.98.82m0-1.6q.5 0 .85-.35t.35-.85-.35-.85a1.16 1.16 0 0 0-.85-.35q-.5 0-.85.35t-.35.85.35.85.85.35m-9.44 1.04a.76.76 0 0 1-.22-.56q0-.34.22-.56l10.56-10.56a.76.76 0 0 1 .56-.22q.34 0 .56.22t.22.56a.76.76 0 0 1-.22.56L11.28 21.84a.76.76 0 0 1-.56.22.76.76 0 0 1-.56-.22"
      />
    </g>
  </svg>
);
export default SvgPercentage;
