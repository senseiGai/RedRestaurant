import Text from '../text/text'
import { MyTouchableOpacity } from '../my-touchable-opacity/my-touchable-opacity'

const MenuButton = ({ title }: { title: string }) => {
    return (
        <MyTouchableOpacity className='flex justify-center items-center rounded-[19px] mt-[16px] bg-[#EBEBEB]'>
            <Text className='text-[#872929] font-[600] text-[15px] px-[20px] py-[9px]'>{title}</Text>
        </MyTouchableOpacity>
    )
}

export default MenuButton