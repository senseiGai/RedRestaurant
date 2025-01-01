import { View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import LinearGradient from 'react-native-linear-gradient'
import BottomTabNavigation from '../bottom-tab-navigation/bottom-tab-navigation'
import BackButton from '../back-button/back-button'
import Text from '../text/text'

import ElementsBackground from '../../icons/elements-background'

interface AppLayoutProps {
    children: React.ReactNode
    isBack?: boolean
    title?: string
    width?: string
}

const AppLayout = ({ children, isBack, title, width }: AppLayoutProps) => {
    return (
        <>
            <LinearGradient
                colors={['#8E2D2D', '#461717']}
                className='flex-1'
            >
                <SafeAreaView className='flex-1'>
                    <View className='absolute bottom-0'>
                        <ElementsBackground />
                    </View>
                    <View className='flex-1 px-4 max-w-full'>
                        <View className={`flex items-center justify-between flex-row ${width ? width : 'w-[62%]'}`}>
                            {isBack && <BackButton />}
                            {title && <Text className='text-[#FFA3A3] font-[500] text-[20px]'>{title}</Text>}
                        </View>
                        {children}
                    </View>
                    <BottomTabNavigation />
                </SafeAreaView>
            </LinearGradient>
        </>
    )
}

export default AppLayout