import * as React from "react";
import { Dimensions, Platform } from "react-native";
import Svg, { Path, Defs, Pattern, Use, Image } from 'react-native-svg'

const OriginalWidth = 192
const OriginalHeight = 36
const aspectRatio = OriginalWidth / OriginalHeight;
const windowWidth = Dimensions.get("window").width;

const SvgClarifionLogo = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width= { Platform.OS === 'web' ? "20%" : "30%"}
    height= { Platform.OS === 'web' ? "20%" : "30%"}
    viewBox={`0 0 ${OriginalWidth} ${OriginalHeight}`}
    style={{ width: windowWidth, aspectRatio }}
    fill="none"
    {...props}
  >
    <Path fill="url(#clarifion_logo_svg__a)" d="M0 0h192v36H0z" />
    <Defs>
      <Pattern
        id="clarifion_logo_svg__a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use
          xlinkHref="#clarifion_logo_svg__b"
          transform="scale(.00083 .00444)"
        />
      </Pattern>
      <Image
        xlinkHref="data:image/png;base64,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"
        id="clarifion_logo_svg__b"
        width={1200}
        height={225}
      />
    </Defs>
  </Svg>
);
export default SvgClarifionLogo;
