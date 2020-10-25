import * as React from 'react';
import { SvgProps } from 'react-native-svg';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
declare function SvgGiveClasses({ title, titleId, ...props }: SvgProps & SVGRProps): JSX.Element;
declare const MemoSvgGiveClasses: React.MemoExoticComponent<typeof SvgGiveClasses>;
export default MemoSvgGiveClasses;
