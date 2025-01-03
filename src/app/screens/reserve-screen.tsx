import React, { useState } from 'react'
import AppLayout from '../../shared/ui/app-layout/app-layout'
import { Calendar } from 'react-native-calendars'
import { Theme } from 'react-native-calendars/src/types'
import { View, TextInput } from 'react-native'
import { MyTouchableOpacity } from '../../shared/ui/my-touchable-opacity/my-touchable-opacity';
import BackToMenuButton from '../../shared/ui/back-to-menu-button/back-to-menu-button'
import Text from '../../shared/ui/text/text'
import { useGuestsStore } from '../../entities/reserve/model/guests-store'
import { useTableStore } from '../../entities/reserve/model/table-store'

import MinusIcon from '../../shared/icons/minus-icon'
import BrownPlusIcon from '../../shared/icons/brown-plus-icon'
import BottomArrowIcon from '../../shared/icons/bottom-arrow-icon'

const ReserveScreen = () => {
    const [selected, setSelected] = useState('')
    const [time, setTime] = useState('')
    const { increment, decrement, guests } = useGuestsStore()
    const { table, setTable } = useTableStore()

    const theme: Theme = {
        backgroundColor: '#4E0404',
        calendarBackground: '#FFBCBC',
        textSectionTitleColor: '#4E0404',
        selectedDayBackgroundColor: '#4E0404',
        selectedDayTextColor: '#FFBCBC',
        todayTextColor: '#4E0404',
        dayTextColor: '#4E0404',
        textDisabledColor: '#FFD9D9',
        arrowColor: '#4E0404',
        monthTextColor: '#4E0404',
        textDayFontWeight: '600',
        textMonthFontWeight: '600',
        textDayHeaderFontWeight: '600',
        textDayFontSize: 15,
        textMonthFontSize: 15,
        textDayHeaderFontSize: 15,
        textDayFontFamily: 'Inter-Regular',
        textMonthFontFamily: 'Inter-Regular',
        textDayHeaderFontFamily: 'Inter-Regular'
    }

    let isDisabled;

    if (selected !== '' && guests > 0 && time !== '' && table !== '') {
        isDisabled = false
    } else {
        isDisabled = true
    }

    return (
        <AppLayout isBack title='Reserve' width='w-[60%]'>
            <View className='px-[28px] mt-[60px] flex-1'>
                <Calendar
                    theme={theme}
                    onDayPress={(day: { dateString: React.SetStateAction<string> }) => {
                        setSelected(day.dateString)
                    }}
                    markedDates={{
                        [selected]: { selected: true }
                    }}
                    style={{
                        alignSelf: 'center',
                        borderRadius: 13,
                        backgroundColor: '#FFBCBC',
                        width: '100%',
                        paddingBottom: 18
                    }}
                />

                <View className='mt-8 space-y-6'>
                    <View className='space-y-2'>
                        <View className='flex-row items-center justify-between bg-[#FFBCBC] rounded-[21px] px-4 py-3'>
                            <Text className='text-[#A55151] text-[20px] font-[600] pl-3' family='inter'>Guests</Text>
                            <View className='flex flex-row items-center justify-between w-[25%] bg-[#64202047] rounded-[26px]'>
                                <MyTouchableOpacity
                                    onPress={guests > 0 ? decrement : undefined}
                                    className='w-[26px] h-[26px] flex items-center justify-center bg-[#FFA3A3] rounded-full'
                                >
                                    <MinusIcon />
                                </MyTouchableOpacity>
                                <Text className='text-[#000000] opacity-[42%] text-[15px] font-[500]' family='inter'>{guests}</Text>
                                <MyTouchableOpacity
                                    onPress={increment}
                                    className='w-[26px] h-[26px] flex items-center justify-center bg-[#FFA3A3] rounded-full'
                                >
                                    <BrownPlusIcon />
                                </MyTouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <View className='space-y-2 mt-[19px]'>
                        <Text className='ml-6 text-[#FFA3A3] text-[20px] font-[500]' family='inter'>Time</Text>
                        <View className='bg-[#FFBCBC] rounded-[21px] pl-7 pr-5 mt-[5px] flex-row justify-between items-center'>
                            <TextInput
                                value={time}
                                onChangeText={setTime}
                                placeholder="00:00"
                                placeholderTextColor="#A55151"
                                className='text-[#A55151] text-[20px] font-[500]'
                                keyboardType="numeric"
                                style={{ fontFamily: 'Inter-Regular' }}
                            />
                        </View>
                    </View>

                    <View className='space-y-2 mt-[7px]'>
                        <Text className='ml-6 text-[#FFA3A3] text-[20px] font-[500]' family='inter'>Table number</Text>
                        <View className='bg-[#FFBCBC] pl-7 rounded-[21px] mt-[5px] px-4 flex-row justify-between items-center'>
                            <TextInput
                                onChangeText={setTable}
                                placeholder="-"
                                placeholderTextColor="#A55151"
                                className='text-[#A55151] text-[20px] font-[600]'
                                keyboardType="numeric"
                                style={{ fontFamily: 'Inter-Regular' }}
                            />
                        </View>
                    </View>
                </View>
            </View>
            <BackToMenuButton label='Done' screen='ReserveSuccess' isDisabled={isDisabled} />
        </AppLayout>
    )
}

export default ReserveScreen