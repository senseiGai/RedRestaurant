import { View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import LinearGradient from 'react-native-linear-gradient'
import BottomTabNavigation from '../bottom-tab-navigation/bottom-tab-navigation'
import BackButton from '../back-button/back-button'

import ElementsBackground from '../../icons/elements-background'

interface AppLayoutProps {
    children: React.ReactNode
    isBack?: boolean
}

const AppLayout = ({ children, isBack }: AppLayoutProps) => {
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
                        {isBack && <BackButton />}
                        {children}
                    </View>
                    <BottomTabNavigation />
                </SafeAreaView>
            </LinearGradient>
        </>
    )
}

export default AppLayout