import * as React from "react";
import Svg, { Rect, Circle } from "react-native-svg";
const SVGComponent = (props: any) => (
    <Svg
        width={21}
        height={18}
        viewBox="0 0 21 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Rect y={2} width={21} height={2} fill="#722626" />
        <Rect y={14} width={21} height={2} fill="#722626" />
        <Circle cx={6} cy={15} r={3} fill="#722626" />
        <Circle cx={14} cy={3} r={3} fill="#722626" />
    </Svg>
);
export default SVGComponent;
