import AppointmentSection from "./AppointmentSection";
import ScheduleSection from "./ScheduleSection";

export default function MainPage() {
  return (
    <div className="flex h-screen">
      <div className="p-4 fixed">
        <ScheduleSection />
      </div>
      <div className="flex-1 flex justify-center items-start ml-[29rem]">
        <AppointmentSection />
      </div>
    </div>
  )
}