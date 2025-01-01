import AppLayout from '../../shared/ui/app-layout/app-layout'
import { View } from 'react-native'
import Input from '../../shared/ui/input/input'
import BackToMenuButton from '../../shared/ui/back-to-menu-button/back-to-menu-button'

const inputFields = [
    { label: 'Phone number', placeholder: 'Task Name' },
    { label: 'Index', placeholder: 'Task Name' },
    { label: 'Adress', placeholder: 'Task Name' },
    { label: 'Data', placeholder: 'Task Name' },
    { label: 'Comments', placeholder: 'Task Name', multiline: true, numberOfLines: 4 }
]

const ContactsScreen = () => {
    return (
        <AppLayout isBack title='Contacts'>
            <View className='flex-1 px-[21px] py-7 gap-y-[14px]'>
                {inputFields.map((field, index) => (
                    <Input
                        key={index}
                        {...field}
                    />
                ))}
            </View>
            <BackToMenuButton />
        </AppLayout>
    )
}

export default ContactsScreen