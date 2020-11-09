import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgFilter({ title, titleId, ...props }: SvgProps & SVGRProps) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <Path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z" />
    </Svg>
  );
}

const MemoSvgFilter = React.memo(SvgFilter);
export default MemoSvgFilter;
