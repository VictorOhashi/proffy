import * as React from "react";

function SvgStudy(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={40} height={40} fill="none" {...props}>
      <path
        d="M5 6h9c1.591 0 3.117.656 4.243 1.822a6.34 6.34 0 011.757 4.4V34a4.756 4.756 0 00-1.318-3.3 4.42 4.42 0 00-3.182-1.367H5V6z"
        stroke="#fff"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M35 6h-9a5.893 5.893 0 00-4.243 1.822 6.34 6.34 0 00-1.757 4.4V34c0-1.238.474-2.425 1.318-3.3a4.42 4.42 0 013.182-1.367H35V6z"
        stroke="#fff"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const MemoSvgStudy = React.memo(SvgStudy);
export default MemoSvgStudy;
