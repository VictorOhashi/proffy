import * as React from "react";
import Svg, { Path } from "react-native-svg";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgSuccessCheckIcon({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <Svg
      width={120}
      height={120}
      viewBox="0 0 120 120"
      fill="none"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <Path
        d="M80 105H40c-13.805 0-25-11.195-25-25V40c0-13.805 11.195-25 25-25h40c13.805 0 25 11.195 25 25v40c0 13.805-11.195 25-25 25z"
        stroke="#04D361"
        strokeWidth={6}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M71.334 55L57.17 69.165l-8.5-8.5"
        stroke="#04D361"
        strokeWidth={6}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const MemoSvgSuccessCheckIcon = React.memo(SvgSuccessCheckIcon);
export default MemoSvgSuccessCheckIcon;
