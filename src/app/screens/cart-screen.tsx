import { View } from 'react-native'
import React from 'react'
import AppLayout from '../../shared/ui/app-layout/app-layout'
import Text from '../../shared/ui/text/text'

import EmptyCartIcon from '../../shared/icons/empty-cart-icon'
import BottomArrowsIcon from '../../shared/icons/bottom-arrows-icon'
import AddProductButton from '../../shared/ui/add-product-button/add-product-button'

const CartScreen = () => {
    return (
        <AppLayout isBack>
            <View className='flex-1 items-center justify-center flex'>
                <Text className='text-[30px] font-[500] text-[#FFFFFF] opacity-[70%] mb-6'>Your cart is empty</Text>
                <EmptyCartIcon />
                <Text className='text-[18px] font-[500] text-[#FFFFFF] opacity-[70%] mt-4 mb-5'>Choose the first course on the meny</Text>
                <BottomArrowsIcon />
            </View>
            <AddProductButton className='mb-5' />
        </AppLayout>
    )
}

export default CartScreen