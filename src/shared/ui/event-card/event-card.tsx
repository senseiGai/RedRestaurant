import { View, Image } from 'react-native'
import React from 'react'
import { MyTouchableOpacity } from '../my-touchable-opacity/my-touchable-opacity'
import Text from '../text/text'
import { useNavigation } from '@react-navigation/native'
import { MainStackParamList, EventType } from '../../../app/navigation/MainStack'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import CalendarIcon from '../../icons/calendar-icon'
import HeartIcon from '../../icons/heart-icon'

type NavigationProp = NativeStackNavigationProp<MainStackParamList, 'EventDetails'>

interface IEventCardProps {
    event: EventType
}


const EventCard = ({ event }: IEventCardProps) => {
    const navigation = useNavigation<NavigationProp>()

    const handlePress = () => {
        navigation.navigate('EventDetails', { event })
    }

    return (
        <MyTouchableOpacity className='bg-[rgba(81,20,20,0.53)] rounded-[20px] w-full h-[207px] flex items-center' onPress={handlePress}>
            <MyTouchableOpacity className='absolute top-8 right-6 z-10'>
                <HeartIcon />
            </MyTouchableOpacity>
            <Image source={event.image} className='w-[95%] h-[155px] rounded-[20px] mt-4' />
            <View className='bg-[#FFA3A3] w-[80%] h-[53px] rounded-[31px] px-[22px] pt-2 absolute -bottom-2'>
                <Text weight='medium' family='montserratAlternates' className='text-[#4E0404] text-[14px] font-[500]'>{event.title}</Text>
                <View className='flex flex-row items-center gap-1'>
                    <CalendarIcon />
                    <Text weight='medium' family='montserratAlternates' className='text-[#4E0404] text-[15.5px] font-[600]'>Date: {event.date}</Text>
                </View>
            </View>
        </MyTouchableOpacity>
    )
}

export default EventCard