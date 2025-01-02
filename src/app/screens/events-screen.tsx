import { View, ScrollView } from 'react-native'
import Text from '../../shared/ui/text/text'
import AppLayout from '../../shared/ui/app-layout/app-layout'
import EventCard from '../../shared/ui/event-card/event-card'

const events = [
    {
        image: require('../../../assets/images/events01.png'), title: 'The history of sushi and rolls ', date: '27.12.24', bluredImage: require('../../../assets/images/events03.png'), paragraph: 'Sushi and rolls are not only food, but also a unique gastronomic culture from Japan that has gained popularity all over the world. So how did sushi and rolls come about, what is the difference between them and is it possible to prepare these Japanese dishes without leaving home?'
    },
    {
        image: require('../../../assets/images/events02.png'), title: "Children's Drawing Master Class ", date: '01.01.25', bluredImage: require('../../../assets/images/events04.png'), paragraph: 'Interactive lesson from a professional artist: An experienced teacher will playfully tell about the basics of drawing, show different techniques and help each child to create their own masterpieceThis is a great opportunity to spend time in an interesting and useful way, in an unfamiliar restaurant environment. Children will be able to socialize and make new friends. An opportunity to try themselves as artists: We will help every child to discover their creative potential.'
    },
]

const EventsScreen = () => {
    return (
        <AppLayout isBack title='Events' width='w-[58%]'>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View className='flex flex-col items-center justify-center px-2 gap-y-8 mt-[19px]'>
                    {events.map((event, index) => (
                        <EventCard key={index} event={event} />
                    ))}
                </View>
            </ScrollView>
        </AppLayout>
    )
}

export default EventsScreen