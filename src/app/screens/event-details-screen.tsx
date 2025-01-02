import { View, Image } from 'react-native'
import Text from '../../shared/ui/text/text'
import AppLayout from '../../shared/ui/app-layout/app-layout'
import { EventType } from '../navigation/MainStack'
import { MyTouchableOpacity } from '../../shared/ui/my-touchable-opacity/my-touchable-opacity'
import { useNavigation } from '@react-navigation/native'

import BigHeartIcon from '../../shared/icons/big-heart-icon'
import BigCalendarIcon from '../../shared/icons/big-calendar-icon'

interface EventDetailsProps {
    route: {
        params: {
            event: EventType;
        }
    }
}

const EventDetailsScreen = ({ route }: EventDetailsProps) => {
    const navigation = useNavigation<any>()
    const { event } = route.params;

    return (
        <AppLayout isBack title='Events' width='w-[58%]'>
            <View className='flex flex-col flex-1'>
                <View className='w-[107%] h-[202px] self-center'>
                    <Image source={event.bluredImage} className='w-full h-full mt-7' />
                    <MyTouchableOpacity className='absolute top-10 right-4 z-10'>
                        <BigHeartIcon />
                    </MyTouchableOpacity>
                </View>
                <View className='bg-[#FFBABA7A] w-[325px] mt-[40px] rounded-[15px] self-center py-1'>
                    <Text family='montserratAlternates' weight='bold' className='text-[#4E0404] text-[17px] text-center'>{event.title}</Text>
                </View>
                <View className='w-[312px] flex flex-col self-center'>
                    <Text family='montserratAlternates' weight='medium' className='text-[#FFFFFF] text-[12px] text-left leading-[16px] mt-[16px]'>{event.paragraph}</Text>
                    <Text family='montserratAlternates' weight='bold' className='text-[#FFA3A3] text-[20px] text-left mt-[6px] items-center'><BigCalendarIcon /> Date: {event.date}</Text>
                </View>
            </View>
            <MyTouchableOpacity className='bg-[#FFA3A3] w-[172px] h-[38px] self-center rounded-[31px] flex items-center justify-center mb-6' onPress={() => navigation.navigate('Menu' as never)}>
                <Text family='montserratAlternates' weight='medium' className='text-[#4E0404] text-[15px] text-center'>Close events</Text>
            </MyTouchableOpacity>
        </AppLayout>
    )
}

export default EventDetailsScreen
