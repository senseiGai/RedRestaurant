import { View, ScrollView } from 'react-native'
import Text from '../../shared/ui/text/text'
import AppLayout from '../../shared/ui/app-layout/app-layout'
import EventCard from '../../shared/ui/event-card/event-card'

const events = [
    { image: require('../../../assets/images/events01.png'), title: 'The history of sushi and rolls ', date: '27.12.24' },
    {
        image: require('../../../assets/images/events02.png'), title: "Children's Drawing Master Class ", date: '01.01.25'
    },
]

const EventsScreen = () => {
    return (
        <AppLayout isBack title='Events' width='w-[58%]'>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View className='flex flex-col items-center justify-center px-2 gap-y-8 mt-[19px]'>
                    {events.map((event, index) => (
                        <EventCard key={index} image={event.image} title={event.title} date={event.date} />
                    ))}
                </View>
            </ScrollView>
        </AppLayout>
    )
}

export default EventsScreen