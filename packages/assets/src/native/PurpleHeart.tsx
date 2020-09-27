import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgPurpleHeart(props: React.SVGProps<SVGSVGElement>) {
  return (
    <Svg width={14} height={12} fill="none" {...props}>
      <Path
        d="M14 3.693C14 1.653 12.27 0 10.138 0A3.911 3.911 0 007 1.545 3.91 3.91 0 003.862 0C1.73 0 0 1.653 0 3.693c0 .288.038.568.104.838C.64 7.717 4.344 11.077 7 12c2.655-.923 6.36-4.283 6.895-7.469.067-.27.105-.55.105-.838z"
        fill="#9871F5"
      />
    </Svg>
  );
}

const MemoSvgPurpleHeart = React.memo(SvgPurpleHeart);
export default MemoSvgPurpleHeart;
