import { TouchableOpacity, TouchableOpacityProps } from "react-native";

export const MyTouchableOpacity = (props: TouchableOpacityProps) => {
    return (
        <TouchableOpacity {...props} activeOpacity={0.7}>
            {props.children}
        </TouchableOpacity>);
};