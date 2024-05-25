import * as React from "react";
import Svg, { Path, Circle } from 'react-native-svg'

const SvgDone = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={41}
    height={40}
    fill="none"
    {...props}
  >
    <Circle
      cx={20.667}
      cy={20}
      r={19}
      fill="#85BF55"
      stroke="#85BF55"
      strokeWidth={2}
    />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.5}
      d="m10.666 20 6.66 7 13.34-14"
    />
  </Svg>
);
export default SvgDone;
