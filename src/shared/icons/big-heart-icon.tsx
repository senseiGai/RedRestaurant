import * as React from "react";
import Svg, { Path } from "react-native-svg";
const BigHeartIcon = (props: any) => (
    <Svg
        width={28}
        height={25}
        viewBox="0 0 28 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M14.806 23.8837C14.364 24.0388 13.636 24.0388 13.194 23.8837C9.424 22.6045 1 17.268 1 8.22303C1 4.23034 4.237 1 8.228 1C10.594 1 12.687 2.13708 14 3.89438C15.313 2.13708 17.419 1 19.772 1C23.763 1 27 4.23034 27 8.22303C27 17.268 18.576 22.6045 14.806 23.8837Z"
            fill="#FFE6E6"
            stroke="#EB5050"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
);
export default BigHeartIcon;
