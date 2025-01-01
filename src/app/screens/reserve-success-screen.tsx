import { View, Image } from 'react-native'
import React from 'react'
import Text from '../../shared/ui/text/text'
import AppLayout from '../../shared/ui/app-layout/app-layout'
import BackToMenuButton from '../../shared/ui/back-to-menu-button/back-to-menu-button'
import { useTableStore } from '../../entities/reserve/model/table-store'

import QRIcon from '../../shared/icons/qr-icon'

const ReserveSuccess = () => {
    const { table } = useTableStore()

    return (
        <AppLayout>
            <View className='flex-1'>
                <View className=' flex items-center justify-center mt-[7px]'>
                    <Text className=' text-[#FFA3A3] font-[500] text-[20px]'>Reserve</Text>
                    <Text className=' text-[#FFFFFF] font-[800] text-[40px] mt-[69px]' weight='bold' family='inter'>Done!</Text>
                    <Text className=' text-[#FFFFFF] font-[800] text-[20px] text-center w-[288px] leading-[24.2px] mt-[7px]'>Table number {table} has been successfully reserved.</Text>
                    <View className='mt-[11px]'>
                        <QRIcon />
                    </View>
                    <Text className=' text-[#FFFFFF] opacity-[70%] font-[600] text-[15px] mt-[26px]'>Present the qr code at the entrance</Text>
                </View>
            </View>
            <BackToMenuButton />
            <Image source={require('../../../assets/images/reserve01.png')} className='w-[266px] h-[366px] absolute opacity-[60%] bottom-0 -z-1' />
        </AppLayout>
    )
}

export default ReserveSuccess