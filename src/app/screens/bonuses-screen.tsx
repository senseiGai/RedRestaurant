import { View } from 'react-native'
import AppLayout from '../../shared/ui/app-layout/app-layout'
import Text from '../../shared/ui/text/text'
import { MyTouchableOpacity } from '../../shared/ui/my-touchable-opacity/my-touchable-opacity'
import { useNavigation } from '@react-navigation/native'

import BurgerIcon from '../../shared/icons/burger-icon'

const BonusesScreen = () => {
    const navigation = useNavigation<any>()
    return (
        <AppLayout isBack title='Bonuses'>
            <View className='flex-1'>
                <Text weight='bold' className='text-[#FFFFFF] text-[30px] text-left mt-[29px]'>Bonus system!</Text>
                <Text weight='bold' className='text-[#FFFFFF] text-[30px] text-left'>Every 6 burgers are free</Text>
                <View className='bg-[#FFAEAEA1] w-[361px] h-[320px] self-center rounded-[31px] mt-[14px] px-3 pt-[18px]'>
                    <View className='flex-row flex-wrap justify-between gap-y-4'>
                        <View className='items-center'>
                            <View className='bg-[#FFD4D4] w-[97px] h-[97px] flex justify-center items-center rounded-full'>
                                <BurgerIcon />
                            </View>
                            <Text weight='bold' className='text-[#FFFFFF] text-[30px] leading-[34px] mt-2' style={{ fontFamily: 'Montserrat' }}>1</Text>
                        </View>
                        <View className='items-center'>
                            <View className='bg-[#FFD4D4] w-[97px] h-[97px] flex justify-center items-center rounded-full'>
                                <BurgerIcon />
                            </View>
                            <Text weight='bold' className='text-[#FFFFFF] text-[30px] leading-[34px] mt-2' style={{ fontFamily: 'Montserrat' }}>2</Text>
                        </View>
                        <View className='items-center'>
                            <View className='bg-[#FFD4D4] w-[97px] h-[97px] flex justify-center items-center rounded-full'>
                                <BurgerIcon />
                            </View>
                            <Text weight='bold' className='text-[#FFFFFF] text-[30px] leading-[34px] mt-2' style={{ fontFamily: 'Montserrat' }}>3</Text>
                        </View>
                        <View className='items-center'>
                            <View className='bg-[#FFD4D4] w-[97px] h-[97px] flex justify-center items-center rounded-full'>
                                <BurgerIcon />
                            </View>
                            <Text weight='bold' className='text-[#FFFFFF] text-[30px] leading-[34px] mt-2' style={{ fontFamily: 'Montserrat' }}>4</Text>
                        </View>
                        <View className='items-center'>
                            <View className='bg-[#FFD4D4] w-[97px] h-[97px] flex justify-center items-center rounded-full'>
                                <BurgerIcon />
                            </View>
                            <Text weight='bold' className='text-[#FFFFFF] text-[30px] leading-[34px] mt-2' style={{ fontFamily: 'Montserrat' }}>5</Text>
                        </View>
                        <View className='items-center'>
                            <View className='bg-[#FFD4D4] w-[97px] h-[97px] rounded-full flex justify-center items-center'>
                                <Text weight='medium' className='text-[#4E0404] text-[15px] font-[600] text-center'>FREE BURGER</Text>
                            </View>
                            <Text weight='bold' className='text-[#FFFFFF] text-[30px] leading-[34px] mt-2' style={{ fontFamily: 'Montserrat' }}>6</Text>
                        </View>
                    </View>
                </View>
                <Text weight='medium' className='text-[#FFD4D4] text-[15px] self-center text-center mt-[29px]'>U HAVE 0/6</Text>
                <Text weight='medium' className='text-[#FFFFFF] text-[15px] self-center text-center mt-[27px]'>We're launching a new bonus program to delight our loyal guests! Now every burger you order brings you closer to a free treat</Text>
            </View>
            <MyTouchableOpacity className='bg-[#FFA3A3] w-[172px] h-[38px] self-center rounded-[31px] flex items-center justify-center mb-6' onPress={() => navigation.navigate('Menu' as never)}>
                <Text family='montserratAlternates' weight='medium' className='text-[#4E0404] text-[15px] text-center'>Close bonuses</Text>
            </MyTouchableOpacity>
        </AppLayout>
    )
}

export default BonusesScreen