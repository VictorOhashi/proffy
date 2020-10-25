import * as React from 'react';
import { SvgProps } from 'react-native-svg';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
declare function SvgArrow({ title, titleId, ...props }: SvgProps & SVGRProps): JSX.Element;
declare const MemoSvgArrow: React.MemoExoticComponent<typeof SvgArrow>;
export default MemoSvgArrow;
