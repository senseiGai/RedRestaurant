import { View, Modal } from 'react-native'
import AppLayout from '../../shared/ui/app-layout/app-layout'
import Text from '../../shared/ui/text/text'
import { MyTouchableOpacity } from '../../shared/ui/my-touchable-opacity/my-touchable-opacity'
import { useNavigation } from '@react-navigation/native'
import { useBonusesStore } from '../../entities/bonuses/model/bonuses-store'
import { useEffect } from 'react'
import Input from '../../shared/ui/input/input'

import BurgerIcon from '../../shared/icons/burger-icon'

const BonusesScreen = () => {
    const navigation = useNavigation<any>()
    const {
        bonusCount,
        usedBonuses,
        isModalVisible,
        inputCode,
        isError,
        setModalVisible,
        setInputCode,
        validateCode,
        initializeBonuses
    } = useBonusesStore()

    useEffect(() => {
        initializeBonuses()
    }, [])

    const handleCirclePress = (index: number) => {
        if (index < 5 && !usedBonuses[index]) { // Only first 5 circles are clickable and not used
            setModalVisible(true)
        }
    }

    const handleSubmit = async () => {
        const isValid = await validateCode(inputCode)
        if (isValid) {
            setModalVisible(false)
            setInputCode('')
        }
    }

    return (
        <AppLayout isBack title='Bonuses'>
            <View className='flex-1'>
                <Text weight='bold' className='text-[#FFFFFF] text-[30px] text-left mt-[29px]'>Bonus system!</Text>
                <Text weight='bold' className='text-[#FFFFFF] text-[30px] text-left'>Every 6 burgers are free</Text>
                <View className='bg-[#FFAEAEA1] w-[361px] h-[320px] self-center rounded-[31px] mt-[14px] px-3 pt-[18px]'>
                    <View className='flex-row flex-wrap justify-between gap-y-4'>
                        {[1, 2, 3, 4, 5, 6].map((num, index) => (
                            <View key={num} className='items-center'>
                                <MyTouchableOpacity
                                    className={`bg-[#FFD4D4] w-[97px] h-[97px] flex justify-center items-center rounded-full ${usedBonuses[index] ? 'opacity-50' : ''}`}
                                    onPress={() => handleCirclePress(index)}
                                    disabled={index === 5 || usedBonuses[index]}
                                >
                                    {index === 5 ? (
                                        <Text weight='medium' className='text-[#4E0404] text-[15px] font-[600] text-center'>FREE BURGER</Text>
                                    ) : usedBonuses[index] ? (
                                        <Text weight='medium' className='text-[#4E0404] text-[15px] text-center'>Used</Text>
                                    ) : (
                                        <BurgerIcon />
                                    )}
                                </MyTouchableOpacity>
                                <Text weight='bold' className='text-[#FFFFFF] text-[30px] leading-[34px] mt-2' style={{ fontFamily: 'Montserrat' }}>{num}</Text>
                            </View>
                        ))}
                    </View>
                </View>
                <Text weight='medium' className='text-[#FFD4D4] text-[15px] self-center text-center mt-[29px]'>U HAVE {bonusCount}/6</Text>
                <Text weight='medium' className='text-[#FFFFFF] text-[15px] self-center text-center mt-[27px]'>We're launching a new bonus program to delight our loyal guests! Now every burger you order brings you closer to a free treat</Text>
            </View>
            <MyTouchableOpacity className='bg-[#FFA3A3] w-[172px] h-[38px] self-center rounded-[31px] flex items-center justify-center mb-6' onPress={() => navigation.navigate('Menu' as never)}>
                <Text family='montserratAlternates' weight='medium' className='text-[#4E0404] text-[15px] text-center'>Close bonuses</Text>
            </MyTouchableOpacity>

            <Modal
                animationType="fade"
                transparent={true}
                visible={isModalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View className='flex-1 bg-black/50 justify-center items-center'>
                    <View className='bg-white w-[80%] rounded-[20px] p-6'>
                        <Text weight='medium' className='text-[#4E0404] text-[20px] text-center'>Enter the code</Text>
                        <Input
                            value={inputCode}
                            onChangeText={setInputCode}
                            placeholder="Enter code here"
                            className={`border-2 ${isError ? 'border-red-500' : 'border-[#FFD4D4]'} rounded-[10px] px-4 py-2 mb-2`} label={''} />
                        {isError && (
                            <Text weight='medium' className='text-red-500 text-[14px] text-center mb-4'>Incorrect code</Text>
                        )}
                        <View className='flex-row justify-end gap-x-4 self-center mt-2'>
                            <MyTouchableOpacity
                                className='bg-[#FFD4D4] px-6 py-2 rounded-[10px]'
                                onPress={() => setModalVisible(false)}
                            >
                                <Text weight='medium' className='text-[#4E0404] text-[15px]'>Cancel</Text>
                            </MyTouchableOpacity>
                            <MyTouchableOpacity
                                className='bg-[#FFA3A3] px-6 py-2 rounded-[10px]'
                                onPress={handleSubmit}
                            >
                                <Text weight='medium' className='text-[#4E0404] text-[15px]'>Submit</Text>
                            </MyTouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </AppLayout>
    )
}

export default BonusesScreen