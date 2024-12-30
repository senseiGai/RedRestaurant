import { View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import LinearGradient from 'react-native-linear-gradient'

import ElementsBackground from '../../icons/elements-background'

interface AppLayoutProps {
    children: React.ReactNode
}

const AppLayout = ({ children }: AppLayoutProps) => {
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
                        {children}
                    </View>
                </SafeAreaView>
            </LinearGradient>
        </>
    )
}

export default AppLayout