import Container from '../components/Container'
import Input from '../components/Input'
import Text from '../components/Text'
import CalendarBlank from '../assets/icons/CalendarBlank.svg?react'
import UserSquare from '../assets/icons/UserSquare.svg?react'
import Button from '../components/Button'
import TimeSelect from '../components/TimeSelect'
import { TIME_SLOTS } from '../data/timeSlots'

export default function PeriodSection() {
    return (
        <Container className={`
                inline-flex p-20 flex-col gap-6 
                shrink-0 bg-gray-700 rounded-xl
            `}
        >
            <div>
                <Text as='h1' variant={"title-lg"}>Agende um atendimento</Text>
                <Text as='p' variant={"text-sm"}>Selecione data, horário e informe o nome do cliente para criar o agendamento</Text>
            </div>

            <div className="w-full">
                <Text variant={"title-md"}>Data</Text>
                <Input icon={CalendarBlank} type='date' />
            </div>

            <div>
                <Text as='h1' variant={"title-md"}>Horários</Text>
                {TIME_SLOTS.map(({ period, times }) => (
                    <div key={period} className="mt-4">
                        <Text as='p' variant="text-sm" className='mb-2'>
                            {period}
                        </Text>
                        <div className="flex flex-wrap gap-2">
                            {times.map((time) => (
                                <TimeSelect key={time}>
                                    {time}
                                </TimeSelect>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="w-full">
                <Text variant={"title-md"}>Cliente</Text>
                <Input icon={UserSquare} placeholder='Nome' />
            </div>

            <div>
                <Button>AGENDAR</Button>
            </div>
        </Container >
    )
}
