import React from 'react'
import { View } from 'react-native'
import { MyTouchableOpacity } from '../../../shared/ui/my-touchable-opacity/my-touchable-opacity'
import { useNavigation } from '@react-navigation/native'
import Text from '../../../shared/ui/text/text'

interface ITabButtonProps {
    title: string
    icon: React.ReactNode
    screen: string
    active: string
    onPress: () => void
}

const TabButton = ({ title, icon, screen, active, onPress }: ITabButtonProps) => {
    const navigation = useNavigation();

    const handlePress = () => {
        navigation.navigate(screen as never)
        onPress()
    }

    return (
        <>
            <MyTouchableOpacity onPress={handlePress} className='flex items-center justify-center flex-col'>
                <View>{icon}</View>
                <Text className={`${active === title ? 'text-[#FF4C4C]' : 'text-[#4E0404]'} text-[8px] font-[600]`}>{title.toUpperCase()}</Text>
            </MyTouchableOpacity>
        </>
    )
}

export default TabButton