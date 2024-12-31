import React from 'react'
import { MyTouchableOpacity } from '../my-touchable-opacity/my-touchable-opacity'
import { useNavigation } from '@react-navigation/native'
import Text from '../text/text'

import BackArrowIcon from '../../icons/back-arrow-icon'

const BackButton = () => {
    const navigation = useNavigation();
    return (
        <MyTouchableOpacity onPress={() => navigation.goBack()} className='flex items-center flex-row gap-1'>
            <BackArrowIcon />
            <Text className='text-[#FFA3A3] text-[15px] font-[500]'>BACK</Text>
        </MyTouchableOpacity>
    )
}

export default BackButton