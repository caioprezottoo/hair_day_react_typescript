import Container from '../components/Container'
import Text from '../components/Text'

export default function PeriodSection() {
    return (
        <section className={`
                inline-flex p-20 flex-col items-start gap-6 shrink-0
                bg-gray-700 rounded-xl
            `}
        >
            <Container>
                <Text as='h1' variant={"title-lg"}>Agende um atendimento</Text>
                <Text as='p' variant={"text-sm"}>Selecione data, horário e informe o nome do cliente para criar o agendamento</Text>
            </Container>
        </section>
    )
}
