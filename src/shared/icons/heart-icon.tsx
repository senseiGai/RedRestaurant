import * as React from "react";
import Svg, { Path } from "react-native-svg";
const HeartIcon = (props: any) => (
    <Svg
        width={20}
        height={18}
        viewBox="0 0 20 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M10.62 17.71C10.28 17.83 9.72 17.83 9.38 17.71C6.48 16.72 0 12.59 0 5.59C0 2.5 2.49 0 5.56 0C7.38 0 8.99 0.88 10 2.24C11.01 0.88 12.63 0 14.44 0C17.51 0 20 2.5 20 5.59C20 12.59 13.52 16.72 10.62 17.71Z"
            fill="#FFE6E6"
        />
    </Svg>
);
export default HeartIcon;
