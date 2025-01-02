import { View, ScrollView, Image } from 'react-native'
import React from 'react'
import AppLayout from '../../shared/ui/app-layout/app-layout'
import Text from '../../shared/ui/text/text'
import { useCartStore } from '../../entities/cart/model/cart-store'
import { MyTouchableOpacity } from '../../shared/ui/my-touchable-opacity/my-touchable-opacity'

import EmptyCartIcon from '../../shared/icons/empty-cart-icon'
import BottomArrowsIcon from '../../shared/icons/bottom-arrows-icon'
import AddProductButton from '../../shared/ui/add-product-button/add-product-button'
import MinusIcon from '../../shared/icons/minus-icon'
import PlusIcon from '../../shared/icons/brown-plus-icon'
import DeleteIcon from '../../shared/icons/cross-icon'

const CartScreen = () => {
    const { items, incrementQuantity, decrementQuantity, removeItem, getSubtotal } = useCartStore();

    if (items.length === 0) {
        return (
            <AppLayout isBack>
                <View className='flex-1 items-center justify-center flex'>
                    <Text className='text-[30px] font-[500] text-[#FFFFFF] opacity-[70%] mb-6'>Your cart is empty</Text>
                    <EmptyCartIcon />
                    <Text className='text-[18px] font-[500] text-[#FFFFFF] opacity-[70%] mt-4 mb-5'>Choose the first course on the menu</Text>
                    <BottomArrowsIcon />
                </View>
                <AddProductButton className='mb-5' />
            </AppLayout>
        )
    }

    return (
        <AppLayout isBack title='Cart' width='w-[55%]'>
            <ScrollView className='flex-1' showsVerticalScrollIndicator={false}>
                <View className='mt-[35px] mb-5 px-[6px] gap-y-8'>
                    {items.map((item) => (
                        <View key={item.id} className='bg-white rounded-[15px] p-4 flex-row items-center'>
                            <Image source={item.image} className='w-[130px] h-[111px] rounded-[10px]' />
                            <View className='flex-1 ml-4'>
                                <View className='flex-row justify-between items-start'>
                                    <View className=' mr-2'>
                                        <Text weight="medium" className='text-[#4E0404] text-[20px]'>{item.title}</Text>
                                        <Text weight="medium" className='text-[#4E0404] opacity-[35%] text-[20px]'>{item.subtitle}</Text>
                                        <Text weight="medium" className='text-[#4E0404] text-[20px]'>{item.price}</Text>
                                    </View>
                                    <MyTouchableOpacity onPress={() => removeItem(item.id)}>
                                        <DeleteIcon />
                                    </MyTouchableOpacity>
                                </View>
                                <View className='flex-row justify-end items-center'>
                                    <View className='flex-row items-center bg-[#F3F3F3] rounded-[100%]'>
                                        <MyTouchableOpacity
                                            className='w-[25px] h-[25px] bg-[#FFA3A3] rounded-full  items-center justify-center'
                                            onPress={() => decrementQuantity(item.id)}
                                        >
                                            <MinusIcon />
                                        </MyTouchableOpacity>
                                        <Text weight="medium" className='mx-3 text-[15px]'>{item.quantity}</Text>
                                        <MyTouchableOpacity
                                            className='w-[25px] h-[25px] bg-[#FFA3A3] rounded-full items-center justify-center'
                                            onPress={() => incrementQuantity(item.id)}
                                        >
                                            <PlusIcon />
                                        </MyTouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                    ))}
                </View>
            </ScrollView>
            <View className='bg-white rounded-t-[30px] p-6 mx-[6px]'>
                <View className='flex-row justify-between mb-3'>
                    <Text weight="medium" className='text-[#4E0404] text-[17px]'>Subtotal</Text>
                    <Text weight="medium" className='text-[#4E0404] text-[17px]'>${getSubtotal().toFixed(2)}</Text>
                </View>
                <View className='flex-row justify-between mb-5'>
                    <Text weight="medium" className='text-[#4E0404] text-[17px]'>Commission</Text>
                    <Text weight="medium" className='text-[#4E0404] text-[17px]'>$0</Text>
                </View>
                <View className='flex-row justify-between mb-8'>
                    <Text weight="medium" className='text-[#4E0404] text-[20px]'>Total</Text>
                    <Text weight="medium" className='text-[#4E0404] text-[20px]'>${getSubtotal().toFixed(2)}</Text>
                </View>
                <MyTouchableOpacity className='bg-[#FF4C4C] h-[50px] rounded-[30px] items-center justify-center'>
                    <Text weight="medium" className='text-white text-[17px]'>Add Product</Text>
                </MyTouchableOpacity>
            </View>
        </AppLayout>
    )
}

export default CartScreen