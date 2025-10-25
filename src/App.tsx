import AppointmentSection from "./core-components/AppointmentSection";
import PeriodSection from "./core-components/PeriodSection";

export default function App() {
  return (
    <div className="flex">
      <div className="h-screen p-4">
        <PeriodSection />
      </div>
      <div className="w-96 flex justify-center">
        <AppointmentSection />
      </div>
    </div>
  )
}