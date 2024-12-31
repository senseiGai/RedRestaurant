import * as React from "react";
import Svg, { Path } from "react-native-svg";

const BackArrowIcon = () => (
    <Svg
        width={25}
        height={27}
        viewBox="0 0 25 27"
        fill="none"
    >
        <Path
            d="M23 25L2 13.5L23 2"
            stroke="#FFA3A3"
            strokeWidth={3}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
);
export default BackArrowIcon;
