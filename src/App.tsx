import MainPage from "./pages/MainPage";
import { AppointmentProvider } from "./contexts/AppointmentContext";

export default function App() {
  return (
    <AppointmentProvider>
      <MainPage />
    </AppointmentProvider>
  )
}