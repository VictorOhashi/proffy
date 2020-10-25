import * as React from 'react';
import { SvgProps } from 'react-native-svg';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
declare function SvgLanding({ title, titleId, ...props }: SvgProps & SVGRProps): JSX.Element;
declare const MemoSvgLanding: React.MemoExoticComponent<typeof SvgLanding>;
export default MemoSvgLanding;
