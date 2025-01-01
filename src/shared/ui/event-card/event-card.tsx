import { View, Image } from 'react-native'
import React from 'react'
import { MyTouchableOpacity } from '../my-touchable-opacity/my-touchable-opacity'
import Text from '../text/text'

import CalendarIcon from '../../icons/calendar-icon'
import HeartIcon from '../../icons/heart-icon'

interface IEventCardProps {
    image: any,
    title: string,
    date: string
}


const EventCard = ({ image, title, date }: IEventCardProps) => {
    return (
        <MyTouchableOpacity className='bg-[rgba(81,20,20,0.53)] rounded-[20px] w-full h-[207px] flex items-center'>
            <MyTouchableOpacity className='absolute top-8 right-6 z-10'>
                <HeartIcon />
            </MyTouchableOpacity>
            <Image source={image} className='w-[95%] h-[155px] rounded-[20px] mt-4' />
            <View className='bg-[#FFA3A3] w-[80%] h-[53px] rounded-[31px] px-[22px] pt-2 absolute -bottom-2'>
                <Text family='montserratAlternates' className='text-[#4E0404] text-[14px] font-[500]'>{title}</Text>
                <View className='flex flex-row items-center gap-1'>
                    <CalendarIcon />
                    <Text family='montserratAlternates' className='text-[#4E0404] text-[15.5px] font-[600]'>Date: {date}</Text>
                </View>
            </View>
        </MyTouchableOpacity>
    )
}

export default EventCard