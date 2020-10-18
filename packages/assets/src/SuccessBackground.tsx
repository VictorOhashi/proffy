import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgSuccessBackground({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      width={1120}
      height={565}
      viewBox="0 0 1120 565"
      fill="none"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M1020.77 183.235c0 5.642-4.56 10.217-10.2 10.217-5.63 0-10.2-4.575-10.2-10.217 0-5.643 4.57-10.217 10.2-10.217 5.62 0 10.2 4.574 10.2 10.217zM1017.95 190.283l7.2 7.226M276.847 153.154l10.735 10.749M287.582 153.154l-10.735 10.749M892.155 406.633l10.735 10.749M902.89 406.633l-10.735 10.749M305.657 501.133v15.2M313.266 508.732h-15.198M100.699 250.247c0 5.09-4.124 9.238-9.226 9.238-5.083 0-9.225-4.13-9.225-9.238 0-5.091 4.124-9.238 9.225-9.238 5.102.018 9.226 4.147 9.226 9.238zM643.628 11.056c0 5.09-4.124 9.238-9.225 9.238-5.084 0-9.226-4.13-9.226-9.238 0-5.09 4.124-9.238 9.226-9.238 5.101.018 9.225 4.148 9.225 9.238zM778.971 553.585c0 5.091-4.124 9.238-9.225 9.238-5.084 0-9.225-4.13-9.225-9.238 0-5.091 4.123-9.238 9.225-9.238 5.101.018 9.225 4.147 9.225 9.238z"
        stroke="#04D361"
        strokeWidth={3}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.146 377.691a3.343 3.343 0 003.341-3.345A3.344 3.344 0 004.146 371a3.344 3.344 0 00-3.341 3.346 3.343 3.343 0 003.34 3.345zM27.484 377.691a3.343 3.343 0 003.341-3.345A3.344 3.344 0 0027.484 371a3.344 3.344 0 00-3.341 3.346 3.343 3.343 0 003.341 3.345zM50.805 377.691a3.343 3.343 0 003.341-3.345A3.343 3.343 0 0050.805 371a3.343 3.343 0 00-3.341 3.346 3.343 3.343 0 003.341 3.345zM74.144 377.691a3.343 3.343 0 003.341-3.345 3.344 3.344 0 00-3.34-3.346 3.344 3.344 0 00-3.342 3.346 3.343 3.343 0 003.341 3.345zM97.465 377.691a3.343 3.343 0 003.341-3.345A3.343 3.343 0 0097.465 371a3.344 3.344 0 00-3.341 3.346 3.343 3.343 0 003.34 3.345zM120.803 377.691a3.342 3.342 0 003.341-3.345 3.343 3.343 0 00-3.341-3.346 3.344 3.344 0 00-3.341 3.346 3.343 3.343 0 003.341 3.345zM4.145 401.044a3.343 3.343 0 003.341-3.345 3.344 3.344 0 00-3.34-3.346 3.344 3.344 0 00-3.342 3.346 3.343 3.343 0 003.341 3.345zM27.484 401.044a3.343 3.343 0 003.341-3.345 3.344 3.344 0 00-3.341-3.346 3.344 3.344 0 00-3.341 3.346 3.343 3.343 0 003.341 3.345zM50.806 401.044a3.343 3.343 0 003.34-3.345 3.343 3.343 0 00-3.34-3.346 3.343 3.343 0 00-3.342 3.346 3.343 3.343 0 003.342 3.345zM74.144 401.044a3.343 3.343 0 003.341-3.345 3.344 3.344 0 00-3.34-3.346 3.344 3.344 0 00-3.342 3.346 3.343 3.343 0 003.341 3.345zM97.465 401.044a3.343 3.343 0 003.341-3.345 3.343 3.343 0 00-3.341-3.346 3.344 3.344 0 00-3.341 3.346 3.343 3.343 0 003.34 3.345zM120.803 401.044a3.343 3.343 0 003.341-3.345 3.343 3.343 0 00-3.341-3.346 3.344 3.344 0 00-3.341 3.346 3.343 3.343 0 003.341 3.345zM4.145 424.415a3.344 3.344 0 003.341-3.346 3.343 3.343 0 00-3.34-3.345 3.343 3.343 0 00-3.342 3.345 3.344 3.344 0 003.341 3.346zM27.484 424.415a3.344 3.344 0 003.341-3.346 3.343 3.343 0 00-3.341-3.345 3.343 3.343 0 00-3.341 3.345 3.344 3.344 0 003.341 3.346zM50.806 424.415a3.343 3.343 0 003.34-3.346 3.343 3.343 0 00-3.34-3.345 3.343 3.343 0 00-3.342 3.345 3.343 3.343 0 003.342 3.346zM74.144 424.415a3.344 3.344 0 003.341-3.346 3.343 3.343 0 00-3.34-3.345 3.343 3.343 0 00-3.342 3.345 3.344 3.344 0 003.341 3.346zM97.465 424.415a3.343 3.343 0 003.341-3.346 3.343 3.343 0 00-3.341-3.345 3.343 3.343 0 00-3.341 3.345 3.344 3.344 0 003.34 3.346zM120.803 424.415a3.343 3.343 0 003.341-3.346 3.342 3.342 0 10-6.682 0 3.344 3.344 0 003.341 3.346zM4.145 447.768a3.344 3.344 0 003.341-3.346 3.344 3.344 0 00-3.34-3.346 3.344 3.344 0 00-3.342 3.346 3.344 3.344 0 003.341 3.346zM27.484 447.768a3.344 3.344 0 003.341-3.346 3.344 3.344 0 00-3.341-3.346 3.344 3.344 0 00-3.341 3.346 3.344 3.344 0 003.341 3.346zM50.806 447.768a3.343 3.343 0 003.34-3.346 3.343 3.343 0 00-3.34-3.346 3.343 3.343 0 00-3.342 3.346 3.343 3.343 0 003.342 3.346zM74.144 447.768a3.344 3.344 0 003.341-3.346 3.344 3.344 0 00-3.34-3.346 3.344 3.344 0 00-3.342 3.346 3.344 3.344 0 003.341 3.346zM97.465 447.768a3.343 3.343 0 003.341-3.346 3.343 3.343 0 00-3.341-3.346 3.344 3.344 0 00-3.341 3.346 3.344 3.344 0 003.34 3.346zM120.803 447.768a3.343 3.343 0 003.341-3.346 3.343 3.343 0 00-3.341-3.346 3.344 3.344 0 00-3.341 3.346 3.344 3.344 0 003.341 3.346zM773.976 144.618a3.344 3.344 0 003.342-3.346 3.344 3.344 0 00-3.342-3.346 3.344 3.344 0 00-3.341 3.346 3.344 3.344 0 003.341 3.346zM797.297 144.618a3.344 3.344 0 003.341-3.346 3.344 3.344 0 00-3.341-3.346 3.344 3.344 0 00-3.341 3.346 3.344 3.344 0 003.341 3.346zM820.636 144.618a3.344 3.344 0 003.341-3.346 3.344 3.344 0 00-3.341-3.346 3.344 3.344 0 00-3.342 3.346 3.344 3.344 0 003.342 3.346zM773.976 167.988a3.344 3.344 0 003.341-3.346 3.343 3.343 0 00-3.341-3.345 3.343 3.343 0 00-3.341 3.345 3.344 3.344 0 003.341 3.346zM797.297 167.988a3.343 3.343 0 003.341-3.345 3.344 3.344 0 00-3.341-3.346 3.344 3.344 0 00-3.341 3.346 3.343 3.343 0 003.341 3.345zM820.636 167.988a3.343 3.343 0 003.341-3.345 3.344 3.344 0 00-3.341-3.346 3.344 3.344 0 00-3.342 3.346 3.344 3.344 0 003.342 3.345zM261.705 22.433a3.344 3.344 0 003.341-3.345 3.343 3.343 0 00-3.341-3.346 3.343 3.343 0 00-3.341 3.346 3.343 3.343 0 003.341 3.345zM285.025 22.433a3.344 3.344 0 003.341-3.346 3.344 3.344 0 00-3.341-3.345 3.344 3.344 0 00-3.341 3.345 3.344 3.344 0 003.341 3.346zM308.363 22.433a3.343 3.343 0 003.341-3.346 3.343 3.343 0 00-3.341-3.345 3.344 3.344 0 00-3.341 3.345 3.344 3.344 0 003.341 3.346zM261.704 45.804a3.343 3.343 0 003.341-3.346 3.343 3.343 0 00-3.341-3.346 3.343 3.343 0 00-3.341 3.346 3.343 3.343 0 003.341 3.346zM285.025 45.804a3.343 3.343 0 003.341-3.346 3.343 3.343 0 00-3.341-3.346 3.343 3.343 0 00-3.341 3.346 3.343 3.343 0 003.341 3.346zM308.365 45.804a3.343 3.343 0 003.341-3.346 3.343 3.343 0 00-3.341-3.346 3.344 3.344 0 00-3.342 3.346 3.344 3.344 0 003.342 3.346zM1116.66 377.691a3.345 3.345 0 000-6.691 3.34 3.34 0 00-3.34 3.346 3.339 3.339 0 003.34 3.345zM1116.66 401.062a3.346 3.346 0 000-6.691 3.34 3.34 0 00-3.34 3.345 3.34 3.34 0 003.34 3.346zM1116.66 424.415a3.346 3.346 0 000-6.692 3.34 3.34 0 00-3.34 3.346 3.34 3.34 0 003.34 3.346zM1116.66 447.786a3.346 3.346 0 000-6.692 3.34 3.34 0 00-3.34 3.346 3.34 3.34 0 003.34 3.346zM1116.66 471.138a3.346 3.346 0 000-6.691 3.34 3.34 0 00-3.34 3.346 3.34 3.34 0 003.34 3.345zM1116.66 494.509a3.346 3.346 0 000-6.692 3.34 3.34 0 00-3.34 3.346 3.34 3.34 0 003.34 3.346zM1116.66 517.862a3.346 3.346 0 000-6.692 3.34 3.34 0 00-3.34 3.346 3.34 3.34 0 003.34 3.346zM1093.32 377.691c1.85 0 3.34-1.497 3.34-3.345a3.34 3.34 0 10-6.68 0c0 1.848 1.5 3.345 3.34 3.345zM1093.32 401.062a3.34 3.34 0 003.34-3.346 3.34 3.34 0 10-6.68 0c0 1.848 1.5 3.346 3.34 3.346zM1093.32 424.415a3.34 3.34 0 003.34-3.346 3.34 3.34 0 10-6.68 0c0 1.848 1.5 3.346 3.34 3.346zM1093.32 447.786a3.34 3.34 0 003.34-3.346 3.34 3.34 0 10-6.68 0c0 1.848 1.5 3.346 3.34 3.346zM1093.32 471.138a3.34 3.34 0 003.34-3.345 3.34 3.34 0 10-6.68 0c0 1.847 1.5 3.345 3.34 3.345zM1093.32 494.509a3.34 3.34 0 003.34-3.346 3.34 3.34 0 10-6.68 0c0 1.848 1.5 3.346 3.34 3.346zM1093.32 517.862a3.34 3.34 0 003.34-3.346 3.34 3.34 0 10-6.68 0c0 1.848 1.5 3.346 3.34 3.346zM1070 377.691a3.345 3.345 0 000-6.691 3.34 3.34 0 00-3.34 3.346 3.339 3.339 0 003.34 3.345zM1070 401.062a3.346 3.346 0 000-6.691 3.34 3.34 0 00-3.34 3.345 3.34 3.34 0 003.34 3.346zM1070 424.415a3.346 3.346 0 000-6.692 3.34 3.34 0 00-3.34 3.346 3.34 3.34 0 003.34 3.346zM1070 447.786a3.346 3.346 0 000-6.692 3.34 3.34 0 00-3.34 3.346 3.34 3.34 0 003.34 3.346zM1070 471.138a3.346 3.346 0 000-6.691 3.34 3.34 0 00-3.34 3.346 3.34 3.34 0 003.34 3.345zM1070 494.509a3.346 3.346 0 000-6.692 3.34 3.34 0 00-3.34 3.346 3.34 3.34 0 003.34 3.346zM1070 517.862a3.346 3.346 0 000-6.692 3.34 3.34 0 00-3.34 3.346 3.34 3.34 0 003.34 3.346zM1046.66 377.691c1.85 0 3.34-1.497 3.34-3.345a3.34 3.34 0 10-6.68 0c0 1.848 1.5 3.345 3.34 3.345zM1046.66 401.062a3.34 3.34 0 003.34-3.346 3.34 3.34 0 10-6.68 0 3.34 3.34 0 003.34 3.346zM1046.66 424.415a3.34 3.34 0 003.34-3.346 3.339 3.339 0 00-3.34-3.345 3.339 3.339 0 00-3.34 3.345 3.34 3.34 0 003.34 3.346zM1046.66 447.786a3.34 3.34 0 003.34-3.346 3.34 3.34 0 10-6.68 0 3.34 3.34 0 003.34 3.346zM1046.66 471.138a3.34 3.34 0 003.34-3.345 3.34 3.34 0 10-6.68 0 3.34 3.34 0 003.34 3.345zM1046.66 494.509a3.34 3.34 0 003.34-3.346 3.34 3.34 0 10-6.68 0 3.34 3.34 0 003.34 3.346zM1046.66 517.862a3.34 3.34 0 003.34-3.346 3.34 3.34 0 10-6.68 0 3.34 3.34 0 003.34 3.346z"
        fill="#9871F5"
      />
    </svg>
  );
}

const MemoSvgSuccessBackground = React.memo(SvgSuccessBackground);
export default MemoSvgSuccessBackground;
