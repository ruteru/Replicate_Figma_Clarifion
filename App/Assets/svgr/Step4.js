import * as React from "react";
import Svg, { Path, Circle } from 'react-native-svg'

const SvgStep4 = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <Circle cx={20} cy={20} r={19} stroke="#2C7EF8" strokeWidth={2} />
    <Path
      fill="#2C7EF8"
      d="M21.74 27v-2.79H15v-1.4l4.82-10.21h1.65l-4.82 10.21h5.09v-4.2h1.48v4.2h1.57v1.4h-1.57V27z"
    />
  </Svg>
);
export default SvgStep4;
