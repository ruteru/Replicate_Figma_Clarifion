import * as React from "react";
import Svg, { Rect, Defs, Pattern, Use, Image, Circle } from 'react-native-svg';

const SvgDotblue = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <Circle cx={8} cy={8} r={8} fill="#E3EEFF" />
    <Circle cx={8.059} cy={8.059} r={4.267} fill="#2C7EF8" />
  </Svg>
);
export default SvgDotblue;
