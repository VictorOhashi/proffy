import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgWarning({ title, titleId, ...props }: SvgProps & SVGRProps) {
  return (
    <Svg
      width={32}
      height={32}
      viewBox="0 0 32 32"
      fill="none"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <Path
        d="M16 16v-6M16 21.333h0M4 19.174v-6.349A6.001 6.001 0 016.981 7.64l6-3.492a6.002 6.002 0 016.036 0l6 3.492A6 6 0 0128 12.825v6.35a6.001 6.001 0 01-2.981 5.185l-6 3.492a6.002 6.002 0 01-6.036 0l-6-3.492A6 6 0 014 19.174v0z"
        stroke="#8257E5"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const MemoSvgWarning = React.memo(SvgWarning);
export default MemoSvgWarning;
