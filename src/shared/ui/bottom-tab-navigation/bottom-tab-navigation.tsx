import { View } from 'react-native'
import React from 'react'
import TabButton from '../../../entities/tab-button/ui/tab-button'
import { useTabButtonStore } from '../../../entities/tab-button/model/tab-button-store'

import MenuTabIcon from '../../icons/menu-tab-icon'
import ContactsTabIcon from '../../icons/contacts-tab-icon'
import BonusesTabIcon from '../../icons/bonuses-tab-icon'
import ReserveTabIcon from '../../icons/reserve-tab-icon'
import EventsTabIcon from '../../icons/events-tab-icon'



const BottomTabNavigation = () => {
    const { active, setActive } = useTabButtonStore()

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
                    <TabButton key={tab.screen} title={tab.title} icon={tab.icon} screen={tab.screen} active={active} onPress={() => setActive(tab.screen)} />
                ))}
            </View>
        </View>
    )
}

export default BottomTabNavigation