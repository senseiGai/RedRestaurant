import { View } from 'react-native'
import React, { useEffect } from 'react'
import TabButton from '../../../entities/tab-button/ui/tab-button'
import { useTabButtonStore } from '../../../entities/tab-button/model/tab-button-store'
import { useNavigation } from '@react-navigation/native'

import MenuTabIcon from '../../icons/menu-tab-icon'
import ContactsTabIcon from '../../icons/contacts-tab-icon'
import BonusesTabIcon from '../../icons/bonuses-tab-icon'
import ReserveTabIcon from '../../icons/reserve-tab-icon'
import EventsTabIcon from '../../icons/events-tab-icon'

const BottomTabNavigation = () => {
    const { active, setActive } = useTabButtonStore()
    const navigation = useNavigation()

    useEffect(() => {
        const unsubscribe = navigation.addListener('state', () => {
            const state = navigation.getState();
            const currentRoute = state?.routes[state?.index]?.name;
            if (currentRoute && tabs.some(tab => tab.screen === currentRoute)) {
                setActive(currentRoute);
            }
        });

        return unsubscribe;
    }, [navigation])

    const tabs = [
        {
            title: 'Menu',
            icon: <MenuTabIcon active={active} />,
            screen: 'Menu'
        },
        {
            title: 'Events',
            icon: <EventsTabIcon active={active} />,
            screen: 'Events'
        }, {
            title: 'Reserve',
            icon: <ReserveTabIcon active={active} />,
            screen: 'Reserve'
        },
        {
            title: 'Bonuses',
            icon: <BonusesTabIcon active={active} />,
            screen: 'Bonuses'
        },
        {
            title: 'Contacts',
            icon: <ContactsTabIcon active={active} />,
            screen: 'Contacts'
        },
    ]

    return (
        <View className='w-full bg-[#E8DCDC] h-[73px] flex items-center justify-center'>
            <View className='flex flex-row gap-[39px]'>
                {tabs.map(tab => (
                    <TabButton
                        key={tab.screen}
                        title={tab.title}
                        icon={tab.icon}
                        screen={tab.screen}
                        active={active}
                        onPress={() => {
                            setActive(tab.screen)
                            navigation.navigate(tab.screen as never)
                        }}
                    />
                ))}
            </View>
        </View>
    )
}

export default BottomTabNavigation