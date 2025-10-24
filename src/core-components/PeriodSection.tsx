import Container from '../components/Container'
import Input from '../components/Input'
import Text from '../components/Text'
import CalendarBlank from '../assets/icons/CalendarBlank.svg?react'
import UserSquare from '../assets/icons/UserSquare.svg?react'
import Button from '../components/Button'
import TimeSelect from '../components/TimeSelect'

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

            <div>
                <Text as='h1' variant={"title-md"}>Horários</Text>
                <Text as='p'>Manhã</Text>
                <TimeSelect>09:00</TimeSelect>
                <TimeSelect>10:00</TimeSelect>
                <TimeSelect>11:00</TimeSelect>
                <TimeSelect>12:00</TimeSelect>
                <Text as='p'>Tarde</Text>
                <TimeSelect>13:00</TimeSelect>
                <TimeSelect>14:00</TimeSelect>
                <TimeSelect>15:00</TimeSelect>
                <TimeSelect>16:00</TimeSelect>
                <TimeSelect>17:00</TimeSelect>
                <TimeSelect>18:00</TimeSelect>
                <Text as='p'>Noite</Text>
                <TimeSelect>19:00</TimeSelect>
                <TimeSelect>20:00</TimeSelect>
                <TimeSelect>21:00</TimeSelect>
            </div>

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
