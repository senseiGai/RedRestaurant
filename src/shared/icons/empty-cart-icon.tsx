import * as React from "react";
import Svg, {
    Mask,
    Rect,
    G,
    Defs,
    Pattern,
    Use,
    Image,
} from "react-native-svg";

const EmptyCartIcon = () => (
    <Svg
        width={224}
        height={185}
        viewBox="0 0 224 185"
        fill="none"
    >
        <Mask
            id="mask0_1_416"
            style={{
                maskType: "alpha",
            }}
            maskUnits="userSpaceOnUse"
            x={0}
            y={0}
            width={224}
            height={185}
        >
            <Rect width={224} height={185} fill="url(#pattern0_1_416)" />
        </Mask>
        <G mask="url(#mask0_1_416)">
            <Rect x={-36} y={-39} width={281} height={261} fill="#FFA3A3" />
        </G>
        <Defs>
            <Pattern
                id="pattern0_1_416"
                patternContentUnits="objectBoundingBox"
                width={1}
                height={1}
            >
                <Use
                    xlinkHref="#image0_1_416"
                    transform="matrix(0.00413223 0 0 0.00500335 0 -0.000335046)"
                />
            </Pattern>
            <Image
                id="image0_1_416"
                width={242}
                height={200}
                xlinkHref="data:image/png;base64,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"
            />
        </Defs>
    </Svg>
);
export default EmptyCartIcon;
