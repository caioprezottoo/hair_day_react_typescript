import Input from '../components/Input'
import Text from '../components/Text'
import CalendarBlank from '../assets/icons/CalendarBlank.svg?react'


export default function AppointmentSection() {
    return (
        <section className='border border-yellow-dark'>
            <div className='flex'>
                <div>
                    <Text as='h1' variant={"title-lg"}>Sua agenda</Text>
                    <Text as='p'>Consulte os seus cortes de cabelo agendados por dia</Text>
                </div>
                <Input icon={CalendarBlank} type='date'/>
            </div>
        </section>
    )
}
