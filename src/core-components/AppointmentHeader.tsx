import Input from '../components/Input'
import Text from '../components/Text'
import CalendarBlank from '../assets/icons/CalendarBlank.svg?react'

export default function AppointmentHeader() {
    return (
        <div className='flex pt-24 pb-8'>
            <div className='w-2xl'>
                <Text as='h1' variant={"title-lg"}>Sua agenda</Text>
                <Text as='p'>Consulte os seus cortes de cabelo agendados por dia</Text>
            </div>
            <div>
                <Input icon={CalendarBlank} type='date' />
            </div>
        </div>

    )
}
