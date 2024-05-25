import * as React from "react";
import Svg, { Path, Circle } from 'react-native-svg'

const SvgStep3 = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={41}
    height={40}
    fill="none"
    {...props}
  >
    <Circle
      cx={20.333}
      cy={20}
      r={19}
      fill="#2C7EF8"
      stroke="#2C7EF8"
      strokeWidth={2}
    />
    <Path
      fill="#fff"
      d="M19.603 27.29q-1.07 0-1.97-.38a4.45 4.45 0 0 1-1.55-1.08 4.35 4.35 0 0 1-.95-1.69l1.4-.42q.36 1.07 1.18 1.62a3.2 3.2 0 0 0 1.87.53q.96-.02 1.65-.43a2.7 2.7 0 0 0 1.07-1.14q.37-.73.37-1.69 0-1.47-.86-2.36-.849-.9-2.25-.9-.39 0-.82.11a3.5 3.5 0 0 0-.8.29l-.74-1.17 5.6-5.17.24.6h-7.34V12.6h8.32v1.43l-4.88 4.66-.02-.58q1.5-.19 2.64.34t1.78 1.62q.65 1.08.65 2.54 0 1.38-.6 2.44-.59 1.05-1.63 1.65-1.04.59-2.36.59"
    />
  </Svg>
);
export default SvgStep3;
