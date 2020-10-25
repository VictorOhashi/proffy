import * as React from 'react';
import { SvgProps } from 'react-native-svg';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
declare function SvgSuccessBackground({ title, titleId, ...props }: SvgProps & SVGRProps): JSX.Element;
declare const MemoSvgSuccessBackground: React.MemoExoticComponent<typeof SvgSuccessBackground>;
export default MemoSvgSuccessBackground;
