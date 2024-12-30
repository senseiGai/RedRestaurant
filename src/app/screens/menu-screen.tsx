import React from 'react'
import AppLayout from '../../shared/ui/app-layout/app-layout'
import Text from '../../shared/ui/text/text'
import SearchHeader from '../../features/search-header/search-header'
import { View } from 'react-native'
import MenuButton from '../../shared/ui/menu-button/menu-button'

const menuButtons = ['All', 'Dish', 'Salats', 'Drinks']

const MenuScreen = () => {
    return (
        <AppLayout>
            <View className='mt-[35px]'>
                <SearchHeader />
                <View className='flex flex-row justify-between items-center'>
                    {menuButtons.map((button, index) => {
                        return (
                            <MenuButton key={index} title={button} />
                        )
                    })}
                </View>
            </View>
        </AppLayout>
    )
}

export default MenuScreen