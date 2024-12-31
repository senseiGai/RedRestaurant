import * as React from "react";
import Svg, { Path } from "react-native-svg";

const BottomArrowsIcon = () => (
    <Svg
        width={87}
        height={73}
        viewBox="0 0 87 73"
        fill="none"
    >
        <Path
            d="M82 17L43.5 68L5 17"
            stroke="#FFA3A3"
            strokeWidth={9}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Path
            opacity={0.39}
            d="M67 5L43 37L19 5"
            stroke="#FFA3A3"
            strokeWidth={9}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
);
export default BottomArrowsIcon;
