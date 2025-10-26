import Trash from '../assets/icons/Trash.svg?react'
import ButtonIcon from '../components/ButtonIcon'
import Text from '../components/Text'
import { useAppointment } from '../contexts/AppointmentContext'

interface InfoDisplayProps {
    id: string
    time: string
    clientName: string
}

export default function InfoDisplay({ id, time, clientName }: InfoDisplayProps) {
    const { deleteAppointment } = useAppointment()

    const handleDelete = () => {
        if (window.confirm(`Deseja realmente cancelar o agendamento de ${clientName}?`)) {
            deleteAppointment(id)
        }
    }

    return (
        <div className='flex items-center justify-between px-5 gap-5 p-4'>
            <div className='flex flex-row items-center gap-5'>
                <Text as='h1' variant={"title-md"}>{time}</Text>
                <Text as='p' variant={"text-md"}>{clientName}</Text>
            </div>
            <ButtonIcon
                icon={Trash}
                className='border-5 border-transparent'
                onClick={handleDelete}
            />
        </div>
    )
}