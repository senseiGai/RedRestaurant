import React from 'react'
import Text from '../text/text'
import { MyTouchableOpacity } from '../my-touchable-opacity/my-touchable-opacity'
import { useNavigation } from '@react-navigation/native'

interface IAddProductButtonProps {
    className?: string
}

const AddProductButton = ({ className }: IAddProductButtonProps) => {
    const navigation = useNavigation<any>()

    return (
        <MyTouchableOpacity onPress={() => navigation.navigate('Menu')} className={`${className} bg-[#FF4C4C] flex items-center justify-center w-[129px] h-[58px] rounded-[30px] self-center`}>
            <Text className='text-[#FFFFFF] text-[18px] font-[500]'>Add Product</Text>
        </MyTouchableOpacity>
    )
}

export default AddProductButton