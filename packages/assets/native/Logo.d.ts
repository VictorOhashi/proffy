import * as React from 'react';
import { SvgProps } from 'react-native-svg';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
declare function SvgLogo({ title, titleId, ...props }: SvgProps & SVGRProps): JSX.Element;
declare const MemoSvgLogo: React.MemoExoticComponent<typeof SvgLogo>;
export default MemoSvgLogo;
