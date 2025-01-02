import Text from '../../../shared/ui/text/text'
import { MyTouchableOpacity } from '../../../shared/ui/my-touchable-opacity/my-touchable-opacity'

const MenuButton = ({ title, active, setActive, category }: { title: string, active: string, setActive: (category: string) => void, category: string }) => {
    return (
        <MyTouchableOpacity className={`flex justify-center items-center rounded-[19px] mb-[16px] mt-[16px] ${active === category ? 'bg-[#FF4C4C]' : 'bg-[#EBEBEB]'}`} onPress={() => setActive(category)}>
            <Text weight='medium' className={`${active === category ? 'text-[#EBEBEB]' : 'text-[#872929]'} font-[600] text-[15px] px-[20px] py-[9px]`}>{title}</Text>
        </MyTouchableOpacity>
    )
}

export default MenuButton