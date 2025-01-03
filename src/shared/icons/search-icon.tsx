import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
const SearchIcon = (props: any) => (
    <Svg
        width={26}
        height={26}
        viewBox="0 0 26 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <G opacity={0.6}>
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.6532 9.8266C16.6532 13.5968 13.5968 16.6532 9.8266 16.6532C6.05637 16.6532 3 13.5968 3 9.8266C3 6.05637 6.05637 3 9.8266 3C13.5968 3 16.6532 6.05637 16.6532 9.8266ZM15.6334 17.7548C14.0066 18.9483 11.9989 19.6532 9.8266 19.6532C4.39952 19.6532 0 15.2537 0 9.8266C0 4.39952 4.39952 0 9.8266 0C15.2537 0 19.6532 4.39952 19.6532 9.8266C19.6532 11.9989 18.9483 14.0066 17.7548 15.6334L24.7207 22.5994C25.3065 23.1851 25.3065 24.1349 24.7207 24.7207C24.1349 25.3065 23.1851 25.3065 22.5994 24.7207L15.6334 17.7548Z"
                fill="#4E0404"
            />
        </G>
    </Svg>
);
export default SearchIcon;
