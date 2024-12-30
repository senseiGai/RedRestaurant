import React from "react";
import { Text as RNText, TextProps as RNTextProps } from "react-native";

type FontWeight = "light" | "regular" | "medium" | "bold";

interface CustomTextProps extends RNTextProps {
    weight?: FontWeight;
}


const montserratFontMap: Record<FontWeight, string> = {
    light: "Montserrat-Light",
    regular: "Montserrat-Regular",
    medium: "Montserrat-Medium",
    bold: "Montserrat-Bold",
};

const Text: React.FC<CustomTextProps> = ({
    style,
    weight = "regular",
    ...props
}) => {
    const fontMap = montserratFontMap;
    const fontFamily = fontMap[weight];

    return <RNText style={[{ fontFamily }, style]} {...props} />;
};

export default Text;