import React from 'react'
import AppLayout from '../../shared/ui/app-layout/app-layout'
import SearchHeader from '../../features/search-header/search-header'
import { View, ScrollView } from 'react-native'
import MenuButton from '../../entities/menu-button/ui/menu-button'
import { useMenuButtonStore } from '../../entities/menu-button/model/menu-button-store'
import ProductCard from '../../entities/product/ui/product-card'
import { MyTouchableOpacity } from '../../shared/ui/my-touchable-opacity/my-touchable-opacity'
import { useNavigation } from '@react-navigation/native'


import { catrgories } from '../../entities/menu-button/constants/catrgories'
import CartIcon from '../../shared/icons/cart-icon'


const MenuScreen = () => {
    const { active, setActive } = useMenuButtonStore()
    const navigation = useNavigation();

    return (
        <AppLayout>
            <View className='mt-[35px]'>
                <SearchHeader />
                <View className='flex flex-row justify-between items-center'>
                    {catrgories.map((category, index) => {
                        return (
                            <MenuButton key={index} title={category} active={active} setActive={setActive} category={category} />
                        )
                    })}
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View className='mt-[40px] flex flex-row flex-wrap justify-center gap-x-[20px] gap-y-[40px]'>
                        <ProductCard image={require('../../../assets/images/dishes01.png')} title='Product' subtitle='Product Subtitle' price='$15.99' />
                        <ProductCard image={require('../../../assets/images/dishes01.png')} title='Product' subtitle='Product Subtitle' price='$15.99' />
                    </View>
                </ScrollView>
            </View>
            <MyTouchableOpacity className='w-[75.14px] h-[57.95px] bg-[#FF4C4C] rounded-[30px] flex items-center justify-center pr-1 absolute bottom-5 right-4' onPress={() => navigation.navigate('Cart' as never)}>
                <CartIcon />
            </MyTouchableOpacity>
        </AppLayout>
    )
}

export default MenuScreen