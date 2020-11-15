import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgRocket({ title, titleId, ...props }: SvgProps & SVGRProps) {
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
        d="M.025 15.543l7.309-6.4 14.617.914.914 14.629L16.47 32s0-5.485-5.482-10.971C5.505 15.542.025 15.543.025 15.543z"
        fill="#6842C2"
      />
      <Path
        d="M0 32s-.033-7.295 2.727-10.057c2.76-2.762 10.088-2.572 10.088-2.572s0 7.143-2.742 9.886C7.333 32 0 32 0 32z"
        fill="#FFAC33"
      />
      <Path
        d="M7.333 28.343a3.656 3.656 0 003.654-3.657 3.656 3.656 0 00-3.654-3.657 3.656 3.656 0 00-3.655 3.657 3.656 3.656 0 003.655 3.657z"
        fill="#FFCC4D"
      />
      <Path
        d="M32 0s-9.136 0-20.1 9.143c-5.48 4.571-5.48 12.8-3.654 14.628 1.828 1.829 10.05 1.829 14.618-3.657C32 9.143 32 0 32 0z"
        fill="#04D361"
      />
      <Path
        d="M23.778 4.571A3.65 3.65 0 0020.45 6.73c.459-.207.964-.329 1.5-.329a3.656 3.656 0 013.654 3.657c0 .536-.122 1.041-.328 1.5a3.65 3.65 0 002.155-3.328 3.656 3.656 0 00-3.654-3.658zM6.42 25.6s0-3.657.914-4.572c.913-.914 11.878-10.056 12.79-9.142.913.913-8.223 11.885-9.137 12.8-.913.914-4.567.914-4.567.914z"
        fill="#6842C2"
      />
    </Svg>
  );
}

const MemoSvgRocket = React.memo(SvgRocket);
export default MemoSvgRocket;
