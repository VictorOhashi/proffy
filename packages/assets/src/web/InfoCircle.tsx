import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgInfoCircle({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" />
      <path d="M11 11h2v6h-2zm0-4h2v2h-2z" />
    </svg>
  );
}

const MemoSvgInfoCircle = React.memo(SvgInfoCircle);
export default MemoSvgInfoCircle;
