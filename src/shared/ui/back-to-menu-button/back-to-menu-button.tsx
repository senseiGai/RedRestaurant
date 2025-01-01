import { MyTouchableOpacity } from '../my-touchable-opacity/my-touchable-opacity'
import { useNavigation } from '@react-navigation/native'
import Text from '../text/text'

interface IBackToMenuButtonProps {
    label?: string
    screen?: string
    isDisabled?: boolean
}

const BackToMenuButton = ({ label = 'Back to Menu', screen = 'Menu', isDisabled = false }: IBackToMenuButtonProps) => {
    const navigation = useNavigation()


    return (
        <MyTouchableOpacity
            disabled={isDisabled}
            className={`mb-[18px] bg-[#FFBCBC] ${isDisabled ? 'opacity-50' : 'opacity-100'} z-10 rounded-[13px] px-[29px] py-[6px] self-center flex items-center justify-center`}
            onPress={() => navigation.navigate(screen as never)}
        >
            <Text className='text-center text-[#4E0404] text-[15px] font-[600]'>{label}</Text>
        </MyTouchableOpacity>
    )
}

export default BackToMenuButton