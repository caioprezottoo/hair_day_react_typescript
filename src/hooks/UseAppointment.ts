import { useState } from "react"

export interface Appointment {
    id: string
    date: string
    time: string
    clientName: string
    period: string
}

interface CreateAppointmentParams {
    date: string
    time: string
    clientName: string
    period: string
}

export default function UseAppointment() {
    const [appointments, setAppointments] = useState<Appointment[]>([])

    function createAppointment({ date, time, clientName, period }: CreateAppointmentParams) {
        const newAppointment: Appointment = {
            id: crypto.randomUUID(),
            date,
            time,
            clientName,
            period
        }

        setAppointments(prev => [...prev, newAppointment])
        return newAppointment
    }

    function deleteAppointment(id: string) {
        setAppointments(prev => prev.filter(appointment => appointment.id !== id))
    }

    function getAppointmentsByDate(date: string) {
        return appointments.filter(appointment => appointment.date === date)
    }

    function getAppointmentsByPeriod(date: string, period: string) {
        return appointments.filter(
            appointment => appointment.date === date && appointment.period === period
        )
    }

    return {
        appointments,
        createAppointment,
        deleteAppointment,
        getAppointmentsByDate,
        getAppointmentsByPeriod
    }
}