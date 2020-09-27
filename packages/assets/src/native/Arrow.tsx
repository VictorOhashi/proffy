import * as React from "react";
import Svg, { Defs, ClipPath, Path, G } from "react-native-svg";

function SvgArrow(props: React.SVGProps<SVGSVGElement>) {
  return (
    <Svg
      width={50}
      height={50}
      style={{
        width: "100%",
        height: "100%",
      }}
      {...props}
    >
      <Defs>
        <ClipPath id="arrow_svg__a">
          <Path d="M0 0h50v50H0z" />
        </ClipPath>
      </Defs>
      <G clipPath="url(#arrow_svg__a)">
        <Path
          strokeLinecap="round"
          strokeLinejoin="round"
          stroke="#000"
          strokeWidth={2}
          d="M5 15l20 20 20-20"
          fill="none"
          display="block"
        />
      </G>
    </Svg>
  );
}

const MemoSvgArrow = React.memo(SvgArrow);
export default MemoSvgArrow;
