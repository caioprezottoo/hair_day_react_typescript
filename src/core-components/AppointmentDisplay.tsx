import SunHorizon from '../assets/icons/SunHorizon.svg?react'
import CloudSun from '../assets/icons/CloudSun.svg?react'
import MoonStars from '../assets/icons/MoonStars.svg?react'
import Icon from '../components/Icon'
import Text from '../components/Text'
import { TIME_APPOINTMENT } from '../data/timeAppointment'
import InfoDisplay from './InfoDisplay'
import { useAppointment } from '../contexts/AppointmentContext'

export default function AppointmentDisplay() {
    const { getAppointmentsByPeriod, selectedDate } = useAppointment()

    const handlePeriodIcon = (period: string) => {
        if (period === "Manhã") {
            return SunHorizon
        } else if (period === "Tarde") {
            return CloudSun
        } else {
            return MoonStars
        }
    }

    return (
        <div>
            {TIME_APPOINTMENT.map(({ period, times }) => {
                const periodAppointments = getAppointmentsByPeriod(selectedDate, period)

                return (
                    <div key={period}>
                        <div className='flex flex-row border border-gray-600 rounded-tl-lg rounded-tr-lg items-center justify-between p-4'>
                            <div className='flex flex-row items-center gap-3'>
                                <Icon svg={handlePeriodIcon(period)} />
                                <Text as='p' variant={"text-sm"}>{period}</Text>
                            </div>
                            <Text as='p' variant={"text-sm"}>{times}</Text>
                        </div>
                        <div className="border-b border-x border-gray-600 mb-5 rounded-bl-lg rounded-br-lg">
                            {periodAppointments.length > 0 ? (
                                periodAppointments
                                    .sort((a, b) => a.time.localeCompare(b.time))
                                    .map((appointment) => (
                                        <InfoDisplay
                                            key={appointment.id}
                                            id={appointment.id}
                                            time={appointment.time}
                                            clientName={appointment.clientName}
                                        />
                                    ))
                            ) : (
                                <div className='flex items-center justify-center p-4'>
                                    <Text as='p' variant={"text-sm"} className='text-gray-400'>
                                        Nenhum agendamento para este período
                                    </Text>
                                </div>
                            )}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}