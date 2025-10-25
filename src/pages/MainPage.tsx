import AppointmentSection from "./AppointmentSection";
import PeriodSection from "./PeriodSection";

export default function MainPage() {
  return (
    <div className="flex h-screen">
      <div className="p-4">
        <PeriodSection />
      </div>
      <div className="flex-1 flex justify-center items-start">
        <AppointmentSection />
      </div>
    </div>
  )
}