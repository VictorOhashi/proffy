import * as React from 'react';
import { SvgProps } from 'react-native-svg';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
declare function SvgStudy({ title, titleId, ...props }: SvgProps & SVGRProps): JSX.Element;
declare const MemoSvgStudy: React.MemoExoticComponent<typeof SvgStudy>;
export default MemoSvgStudy;
