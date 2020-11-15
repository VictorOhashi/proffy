import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgWhatsapp({ title, titleId, ...props }: SvgProps & SVGRProps) {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <Path
        d="M10.002 0h-.005C4.485 0 0 4.485 0 10c0 2.188.705 4.215 1.904 5.861L.658 19.576 4.5 18.347A9.913 9.913 0 0010.002 20C15.517 20 20 15.514 20 10S15.516 0 10.002 0z"
        fill="#4CAF50"
      />
      <Path
        d="M15.821 14.121c-.241.681-1.199 1.246-1.962 1.412-.523.11-1.205.2-3.503-.753-2.939-1.217-4.831-4.204-4.979-4.397-.14-.194-1.187-1.582-1.187-3.017 0-1.435.729-2.134 1.022-2.434.242-.246.64-.358 1.023-.358.124 0 .235.006.335.011.294.012.441.03.635.494.241.581.829 2.016.899 2.163.07.148.142.348.042.542-.094.2-.176.288-.324.458-.147.17-.287.3-.435.483-.135.159-.287.329-.117.622.17.288.757 1.247 1.622 2.017 1.117.993 2.022 1.311 2.345 1.446.242.1.53.076.705-.111.224-.242.5-.642.782-1.035.2-.283.452-.318.717-.218.27.094 1.699.8 1.993.947.293.147.487.217.558.34.07.124.07.706-.17 1.388z"
        fill="#FAFAFA"
      />
    </Svg>
  );
}

const MemoSvgWhatsapp = React.memo(SvgWhatsapp);
export default MemoSvgWhatsapp;
