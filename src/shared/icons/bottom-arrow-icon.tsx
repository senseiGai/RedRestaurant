import * as React from "react"
import Svg, { Path } from "react-native-svg"

const BottomArrowIcon = () => (
    <Svg width={14} height={8} viewBox="0 0 14 8" fill="none">
        <Path
            d="M1 1L7 7L13 1"
            stroke="#4E0404"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
)

export default BottomArrowIcon
