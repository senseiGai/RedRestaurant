import { View, Image } from 'react-native';
import React from 'react';
import Text from '../../../shared/ui/text/text';
import { MyTouchableOpacity } from '../../../shared/ui/my-touchable-opacity/my-touchable-opacity';

import PlusIcon from '../../../shared/icons/plus-icon';

interface IProductCardProps {
    image: any;
    title: string;
    subtitle: string;
    price: string;
}

const ProductCard = ({ image, title, subtitle, price }: IProductCardProps) => {
    return (
        <View className="w-[170px] h-[200px] bg-[#FFFFFF] rounded-[15px] flex flex-col">
            <Image source={image} className="w-[152px] h-[114px] self-center rounded-t-[15px]" />

            <View className="px-[16px] pb-[10px]">
                <Text className="text-[#4E0404] font-[500] text-[15px]">{title}</Text>
                <Text className="text-[#4E0404] opacity-[35%] font-[500] text-[13px]">{subtitle}</Text>

                <View className="flex flex-row justify-between mt-[2px]">
                    <Text className="text-[#4E0404] font-[500] text-[15px]">{price}</Text>
                    <MyTouchableOpacity className="w-[28px] h-[25px] mt-1 bg-[#FF4C4C] flex items-center justify-center rounded-[9px]">
                        <PlusIcon />
                    </MyTouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default ProductCard;