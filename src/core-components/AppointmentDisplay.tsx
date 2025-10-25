import SunHorizon from '../assets/icons/SunHorizon.svg?react'
import CloudSun from '../assets/icons/CloudSun.svg?react'
import MoonStars from '../assets/icons/MoonStars.svg?react'
import Trash from '../assets/icons/Trash.svg?react'
import Icon from '../components/Icon'
import Text from '../components/Text'
import { TIME_APPOINTMENT } from '../data/timeAppointment'
import ButtonIcon from '../components/ButtonIcon'


export default function TimeAppointmentHeader() {
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
            {TIME_APPOINTMENT.map(({ period, times }) => (
                <div>
                    <div className='flex flex-row border border-gray-600 rounded-tl-lg rounded-tr-lg items-center justify-between p-4'>
                        <div className='flex flex-row items-center gap-3'>
                            <Icon svg={handlePeriodIcon(period)} />
                            <Text as='p' variant={"text-sm"}>{period}</Text>
                        </div>
                        <Text as='p' variant={"text-sm"}>{times}</Text>
                    </div>
                    <div className='border border-gray-600 mb-5 rounded-bl-lg rounded-br-lg flex items-center justify-between px-5 gap-5 p-4'>
                        <div className='flex flex-row items-center gap-5'>
                            <Text as='h1' variant={"title-md"}>11:00</Text>
                            <Text as='p' variant={"text-md"}>Caio Prezotto</Text>
                        </div>
                        <ButtonIcon icon={Trash} className='border-3 border-transparent '/>
                    </div>
                </div>
            ))}
        </div>
    )
}
