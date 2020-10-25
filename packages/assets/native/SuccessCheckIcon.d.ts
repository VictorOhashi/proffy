import * as React from 'react';
import { SvgProps } from 'react-native-svg';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
declare function SvgSuccessCheckIcon({ title, titleId, ...props }: SvgProps & SVGRProps): JSX.Element;
declare const MemoSvgSuccessCheckIcon: React.MemoExoticComponent<typeof SvgSuccessCheckIcon>;
export default MemoSvgSuccessCheckIcon;
