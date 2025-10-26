import Trash from '../assets/icons/Trash.svg?react'
import ButtonIcon from '../components/ButtonIcon'
import Text from '../components/Text'


export default function InfoDisplay() {
    return (
        <div  className='flex items-center justify-between px-5 gap-5 p-4'>
            <div className='flex flex-row items-center gap-5'>
                <Text as='h1' variant={"title-md"}>11:00</Text>
                <Text as='p' variant={"text-md"}>Caio Prezotto</Text>
            </div>
            <ButtonIcon icon={Trash} className='border-5 border-transparent ' />
        </div>
    )
}
