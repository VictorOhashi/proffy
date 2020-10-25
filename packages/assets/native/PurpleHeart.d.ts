import * as React from 'react';
import { SvgProps } from 'react-native-svg';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
declare function SvgPurpleHeart({ title, titleId, ...props }: SvgProps & SVGRProps): JSX.Element;
declare const MemoSvgPurpleHeart: React.MemoExoticComponent<typeof SvgPurpleHeart>;
export default MemoSvgPurpleHeart;
