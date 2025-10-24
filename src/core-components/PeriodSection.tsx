import Container from '../components/Container'
import Input from '../components/Input'
import Text from '../components/Text'
import CalendarBlank from '../assets/icons/CalendarBlank.svg?react'
import UserSquare from '../assets/icons/UserSquare.svg?react'
import Button from '../components/Button'

export default function PeriodSection() {
    return (
        <Container className={`
                inline-flex p-20 flex-col items-start gap-6 
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

            {/* <div></div> --> FAZER HORÁRIOS */}

            <div className="w-full">
                <Text variant={"title-md"}>Cliente</Text>
                <Input icon={UserSquare} placeholder='Nome' />
            </div>

            <div>
                <Button>AGENDAR</Button>
            </div>
        </Container>
    )
}
