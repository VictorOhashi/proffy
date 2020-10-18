import * as React from "react";
import Svg, { G, Path, Defs, ClipPath, Rect } from "react-native-svg";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgGiveClasses({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <Svg
      width={40}
      height={40}
      viewBox="0 0 40 40"
      fill="none"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <G clipPath="url(#give-classes_svg__clip0)">
        <Path
          d="M19.444 25.04v7.48m0-7.48H13.89m5.555 0H25m-11.111 0L7.222 34m6.667-8.96H9a4 4 0 01-4-4V10a4 4 0 014-4h22a4 4 0 014 4v11.04a4 4 0 01-4 4h-6m0 0L32.778 34"
          stroke="#fff"
          strokeWidth={3}
          strokeLinecap="round"
        />
      </G>
      <Defs>
        <ClipPath id="give-classes_svg__clip0">
          <Rect width={40} height={40} rx={8} fill="#fff" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

const MemoSvgGiveClasses = React.memo(SvgGiveClasses);
export default MemoSvgGiveClasses;
