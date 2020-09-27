import * as React from "react";

function SvgSuccessCheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={120} height={120} fill="none" {...props}>
      <path
        d="M80 105H40c-13.805 0-25-11.195-25-25V40c0-13.805 11.195-25 25-25h40c13.805 0 25 11.195 25 25v40c0 13.805-11.195 25-25 25z"
        stroke="#04D361"
        strokeWidth={6}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M71.334 55L57.17 69.165l-8.5-8.5"
        stroke="#04D361"
        strokeWidth={6}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const MemoSvgSuccessCheckIcon = React.memo(SvgSuccessCheckIcon);
export default MemoSvgSuccessCheckIcon;
