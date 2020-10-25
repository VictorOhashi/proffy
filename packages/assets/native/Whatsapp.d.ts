import * as React from 'react';
import { SvgProps } from 'react-native-svg';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
declare function SvgWhatsapp({ title, titleId, ...props }: SvgProps & SVGRProps): JSX.Element;
declare const MemoSvgWhatsapp: React.MemoExoticComponent<typeof SvgWhatsapp>;
export default MemoSvgWhatsapp;
