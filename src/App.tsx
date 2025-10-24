import Container from "./components/Container";
import Input from "./components/Input";
import UserSquare from "./assets/icons/UserSquare.svg?react"
import TimeSelect from "./components/TimeSelect";
import Button from "./components/Button";

export default function App() {
  return (
    <Container>
      <Input placeholder="Digite seu nome" icon={UserSquare} />

      <TimeSelect>09:00</TimeSelect>
      <TimeSelect variant={"active"}>09:00</TimeSelect>
      <TimeSelect variant={"disabled"}>09:00</TimeSelect>

      <Button>AGENDAR</Button>
      <Button variant={"disabled"}>AGENDAR</Button>
    </Container>
  )
}