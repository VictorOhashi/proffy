import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgStudy({ title, titleId, ...props }: SvgProps & SVGRProps) {
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
      <Path
        d="M5 6h9c1.591 0 3.117.656 4.243 1.822a6.34 6.34 0 011.757 4.4V34a4.756 4.756 0 00-1.318-3.3 4.42 4.42 0 00-3.182-1.367H5V6z"
        stroke="#fff"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M35 6h-9a5.893 5.893 0 00-4.243 1.822 6.34 6.34 0 00-1.757 4.4V34c0-1.238.474-2.425 1.318-3.3a4.42 4.42 0 013.182-1.367H35V6z"
        stroke="#fff"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const MemoSvgStudy = React.memo(SvgStudy);
export default MemoSvgStudy;
