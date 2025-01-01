import { View, TextInput, TextInputProps } from 'react-native'
import Text from '../text/text'

interface InputProps extends TextInputProps {
    label: string
    containerClassName?: string
}

const Input = ({ label, containerClassName, ...rest }: InputProps) => {
    return (
        <View className='w-full'>
            <Text className='text-white text-[15px] font-[600] mb-2'>{label}</Text>
            <TextInput
                className='w-full bg-[#FFBCBC] rounded-[13px] p-4 text-[15px] font-[600] text-[#4E0404]'
                placeholderTextColor='rgba(78, 4, 4, 0.5)'
                {...rest}
            />
        </View>
    )
}

export default Input
