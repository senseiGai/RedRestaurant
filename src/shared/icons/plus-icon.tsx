import * as React from "react";
import Svg, { Path } from "react-native-svg";
const PlusIcon = (props: any) => (
    <Svg
        width={11}
        height={11}
        viewBox="0 0 11 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path d="M5.375 0V10.75" stroke="white" strokeWidth={2} />
        <Path d="M0 5.375L10.75 5.375" stroke="white" strokeWidth={2} />
    </Svg>
);
export default PlusIcon;
