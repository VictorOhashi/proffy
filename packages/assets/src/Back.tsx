import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgBack({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      width={49}
      height={32}
      viewBox="0 0 49 32"
      fill="none"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
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
