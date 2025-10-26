import Container from '../components/Container'
import Input from '../components/Input'
import Text from '../components/Text'
import CalendarBlank from '../assets/icons/CalendarBlank.svg?react'
import UserSquare from '../assets/icons/UserSquare.svg?react'
import Button from '../components/Button'
import TimeSelect from '../components/TimeSelect'
import { TIME_SLOTS } from '../data/timeSlots'
import { useState } from 'react'
import { useAppointment } from '../contexts/AppointmentContext'

export default function ScheduleSection() {
    const [selectedTime, setSelectedTime] = useState<string | null>(null)
    const [scheduleDate, setScheduleDate] = useState<string>('')
    const [clientName, setClientName] = useState<string>('')

    const { createAppointment } = useAppointment()

    const handleTimeSelect = (time: string) => {
        setSelectedTime(time)
    }

    const getPeriodFromTime = (time: string): string => {
        const hour = parseInt(time.split(':')[0])
        if (hour >= 9 && hour <= 12) return 'Manhã'
        if (hour >= 13 && hour <= 18) return 'Tarde'
        return 'Noite'
    }

    const handleSchedule = () => {
        if (!scheduleDate || !selectedTime || !clientName.trim()) {
            alert('Por favor, preencha todos os campos')
            return
        }

        const period = getPeriodFromTime(selectedTime)

        createAppointment({
            date: scheduleDate,
            time: selectedTime,
            clientName: clientName.trim(),
            period
        })

        setSelectedTime(null)
        setScheduleDate('')
        setClientName('')

        alert('Agendamento criado com sucesso!')
    }

    const isFormValid = scheduleDate && selectedTime && clientName.trim()

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
                <Input
                    icon={CalendarBlank}
                    type='date'
                    value={scheduleDate}
                    onChange={(e) => setScheduleDate(e.target.value)}
                />
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
                                <TimeSelect
                                    key={time}
                                    variant={selectedTime === time ? "active" : "default"}
                                    onClick={() => handleTimeSelect(time)}
                                >
                                    {time}
                                </TimeSelect>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="w-full">
                <Text variant={"title-md"}>Cliente</Text>
                <Input
                    icon={UserSquare}
                    placeholder='Nome'
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                />
            </div>

            <div>
                <Button
                    variant={isFormValid ? "default" : "disabled"}
                    disabled={!isFormValid}
                    onClick={handleSchedule}
                >
                    AGENDAR
                </Button>
            </div>
        </Container >
    )
}