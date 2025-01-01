import * as React from "react";
import Svg, { Path } from "react-native-svg";
const CalendarIcon = (props: any) => (
    <Svg
        width={12}
        height={12}
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M9.15954 1V2.05263M2.84375 1V2.05263"
            stroke="#4E0404"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Path
            d="M1 6.39123C1 4.09791 1 2.95125 1.65901 2.23881C2.31802 1.52637 3.37868 1.52637 5.5 1.52637H6.5C8.62132 1.52637 9.68198 1.52637 10.341 2.23881C11 2.95125 11 4.09791 11 6.39123V6.6615C11 8.95482 11 10.1015 10.341 10.8139C9.68198 11.5264 8.62132 11.5264 6.5 11.5264H5.5C3.37868 11.5264 2.31802 11.5264 1.65901 10.8139C1 10.1015 1 8.95482 1 6.6615V6.39123Z"
            stroke="#4E0404"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Path
            d="M1.26172 4.15796H10.7354"
            stroke="#4E0404"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
);
export default CalendarIcon;
