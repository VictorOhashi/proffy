import * as React from "react";

function SvgBack(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={49} height={32} fill="none" {...props}>
      <g
        clipPath="url(#back_svg__clip0)"
        stroke="#BDA5F6"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 16h46M6.001 21.001L1 16l5.001-5.001" />
      </g>
      <defs>
        <clipPath id="back_svg__clip0">
          <path
            fill="#fff"
            transform="rotate(90 24.5 24.5)"
            d="M0 0h32v49H0z"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

const MemoSvgBack = React.memo(SvgBack);
export default MemoSvgBack;
