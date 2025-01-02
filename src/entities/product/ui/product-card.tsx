import { View, Image } from 'react-native';
import React from 'react';
import Text from '../../../shared/ui/text/text';
import { MyTouchableOpacity } from '../../../shared/ui/my-touchable-opacity/my-touchable-opacity';
import { useCartStore } from '../../cart/model/cart-store';

import PlusIcon from '../../../shared/icons/plus-icon';

interface IProductCardProps {
    image: any;
    title: string;
    subtitle: string;
    price: string;
    width?: string;
    height?: string;
}

const ProductCard = ({ image, title, subtitle, price, width, height }: IProductCardProps) => {
    const addItem = useCartStore(state => state.addItem);

    const handleAddToCart = () => {
        addItem({
            image,
            title,
            subtitle,
            price,
        });
    };

    return (
        <View
            className="w-[170px] bg-[#FFFFFF] rounded-[15px] flex flex-col"
            style={{
                shadowColor: "#000000",
                shadowOffset: {
                    width: 0,
                    height: 9,
                },
                shadowOpacity: 0.25,
                shadowRadius: 5.2,
                elevation: 8,
            }}
        >
            <Image source={image} className={`${width ? width : 'w-[152px] '} ${height ? height : 'h-[122px]'} self-center`} />
            <View className="px-[16px] pb-[10px]">
                <Text weight="medium" className="text-[#4E0404] font-[500] text-[15px]">{title}</Text>
                <Text weight="medium" className="text-[#4E0404] opacity-[35%] font-[500] text-[13px]">{subtitle}</Text>

                <View className="flex flex-row justify-between mt-[2px]">
                    <Text weight="medium" className="text-[#4E0404] font-[500] text-[15px]">{price}</Text>
                    <MyTouchableOpacity 
                        className="w-[28px] h-[25px] mt-1 bg-[#FF4C4C] flex items-center justify-center rounded-[9px]"
                        onPress={handleAddToCart}
                    >
                        <PlusIcon />
                    </MyTouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default ProductCard;