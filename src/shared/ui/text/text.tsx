import React from "react";
import { Text as RNText, TextProps as RNTextProps } from "react-native";

type FontWeight = "light" | "regular" | "medium" | "bold";
type FontFamily = "montserrat" | "inter";

interface CustomTextProps extends RNTextProps {
    weight?: FontWeight;
    family?: FontFamily;
}

const montserratFontMap: Record<FontWeight, string> = {
    light: "Montserrat-Light",
    regular: "Montserrat-Regular",
    medium: "Montserrat-Medium",
    bold: "Montserrat-Bold",
};

const interFontMap: Record<FontWeight, string> = {
    light: "Inter-Light",
    regular: "Inter-Regular",
    medium: "Inter-Medium",
    bold: "Inter-Bold",
};

const fontFamilyMap: Record<FontFamily, Record<FontWeight, string>> = {
    montserrat: montserratFontMap,
    inter: interFontMap,
};

const Text: React.FC<CustomTextProps> = ({
    style,
    weight = "regular",
    family = "montserrat",
    ...props
}) => {
    const fontMap = fontFamilyMap[family];
    const fontFamily = fontMap[weight];

    return <RNText style={[{ fontFamily }, style]} {...props} />;
};

export default Text;