import * as React from 'react';
import { SvgProps } from 'react-native-svg';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
declare function SvgBack({ title, titleId, ...props }: SvgProps & SVGRProps): JSX.Element;
declare const MemoSvgBack: React.MemoExoticComponent<typeof SvgBack>;
export default MemoSvgBack;
