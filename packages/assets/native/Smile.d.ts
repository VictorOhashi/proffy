import * as React from 'react';
import { SvgProps } from 'react-native-svg';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
declare function SvgSmile({ title, titleId, ...props }: SvgProps & SVGRProps): JSX.Element;
declare const MemoSvgSmile: React.MemoExoticComponent<typeof SvgSmile>;
export default MemoSvgSmile;
