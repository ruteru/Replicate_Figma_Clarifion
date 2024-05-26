import * as React from "react";
import Svg, { Rect, Defs, Pattern, Path, Use, Image, Circle } from 'react-native-svg';

const SvgStar2 = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    fill="none"
    {...props}
  >
    <Path
      fill="#FFC000"
      d="m15.961 6.207-4.463-.649-1.995-4.045a.565.565 0 0 0-1.009 0L6.499 5.558l-4.463.649a.561.561 0 0 0-.311.96l3.229 3.148-.763 4.445a.562.562 0 0 0 .815.592l3.992-2.098 3.992 2.098a.562.562 0 0 0 .816-.592l-.763-4.445 3.23-3.149a.562.562 0 0 0-.312-.96"
    />
  </Svg>
);
export default SvgStar2;
