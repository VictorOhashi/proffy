import * as React from "react";

function SvgArrow(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={50}
      height={50}
      style={{
        width: "100%",
        height: "100%",
      }}
      {...props}
    >
      <defs>
        <clipPath id="arrow_svg__a">
          <path d="M0 0h50v50H0z" />
        </clipPath>
      </defs>
      <g clipPath="url(#arrow_svg__a)">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          stroke="#000"
          strokeWidth={2}
          d="M5 15l20 20 20-20"
          fill="none"
          display="block"
        />
      </g>
    </svg>
  );
}

const MemoSvgArrow = React.memo(SvgArrow);
export default MemoSvgArrow;
