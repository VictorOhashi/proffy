import * as React from 'react';
import { SvgProps } from 'react-native-svg';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
declare function SvgRocket({ title, titleId, ...props }: SvgProps & SVGRProps): JSX.Element;
declare const MemoSvgRocket: React.MemoExoticComponent<typeof SvgRocket>;
export default MemoSvgRocket;
