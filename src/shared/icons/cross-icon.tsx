import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SVGComponent = (props: any) => (
    <Svg
        width={10}
        height={10}
        viewBox="0 0 10 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M0.860458 8.58141C2.42925 7.01262 3.6992 5.74267 4.72092 4.72095M4.72092 4.72095C7.72197 1.71989 8.58138 0.860489 8.58138 0.860489L4.72092 4.72095ZM0.860458 0.860489L8.58138 8.58141"
            stroke="#4E0404"
            strokeWidth={2}
        />
    </Svg>
);
export default SVGComponent;
