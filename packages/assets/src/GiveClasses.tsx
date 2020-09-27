import * as React from "react";

function SvgGiveClasses(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={40} height={40} fill="none" {...props}>
      <g clipPath="url(#give-classes_svg__clip0)">
        <path
          d="M19.444 25.04v7.48m0-7.48H13.89m5.555 0H25m-11.111 0L7.222 34m6.667-8.96H9a4 4 0 01-4-4V10a4 4 0 014-4h22a4 4 0 014 4v11.04a4 4 0 01-4 4h-6m0 0L32.778 34"
          stroke="#fff"
          strokeWidth={3}
          strokeLinecap="round"
        />
      </g>
      <defs>
        <clipPath id="give-classes_svg__clip0">
          <rect width={40} height={40} rx={8} fill="#fff" />
        </clipPath>
      </defs>
    </svg>
  );
}

const MemoSvgGiveClasses = React.memo(SvgGiveClasses);
export default MemoSvgGiveClasses;
