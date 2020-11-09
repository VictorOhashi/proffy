import * as React from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgArrow({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      viewBox="0 0 50 50"
      width={50}
      height={50}
      style={{
        width: '100%',
        height: '100%',
      }}
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <defs>
        <clipPath id="arrow_svg__a">
          <path d="M0 0h50v50H0z" />
        </clipPath>
      </defs>
      <g clipPath="url(#arrow_svg__a)">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          stroke="currentColor"
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
