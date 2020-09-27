import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function SvgBack(props: React.SVGProps<SVGSVGElement>) {
  return (
    <Svg width={49} height={32} fill="none" {...props}>
      <G
        clipPath="url(#back_svg__clip0)"
        stroke="#BDA5F6"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M2 16h46M6.001 21.001L1 16l5.001-5.001" />
      </G>
      <Defs>
        <ClipPath id="back_svg__clip0">
          <Path
            fill="#fff"
            transform="rotate(90 24.5 24.5)"
            d="M0 0h32v49H0z"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

const MemoSvgBack = React.memo(SvgBack);
export default MemoSvgBack;
