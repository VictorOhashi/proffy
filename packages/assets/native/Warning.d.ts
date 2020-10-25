import * as React from 'react';
import { SvgProps } from 'react-native-svg';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
declare function SvgWarning({ title, titleId, ...props }: SvgProps & SVGRProps): JSX.Element;
declare const MemoSvgWarning: React.MemoExoticComponent<typeof SvgWarning>;
export default MemoSvgWarning;
