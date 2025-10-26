import { createContext, useContext, useState, type ReactNode } from 'react'

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

interface AppointmentContextType {
    appointments: Appointment[]
    createAppointment: (params: CreateAppointmentParams) => Appointment
    deleteAppointment: (id: string) => void
    getAppointmentsByDate: (date: string) => Appointment[]
    getAppointmentsByPeriod: (date: string, period: string) => Appointment[]
    selectedDate: string
    setSelectedDate: (date: string) => void
}

const AppointmentContext = createContext<AppointmentContextType | undefined>(undefined)

export function AppointmentProvider({ children }: { children: ReactNode }) {
    const [appointments, setAppointments] = useState<Appointment[]>([])
    const [selectedDate, setSelectedDate] = useState<string>(
        new Date().toISOString().split('T')[0]
    )

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

    return (
        <AppointmentContext.Provider value={{
            appointments,
            createAppointment,
            deleteAppointment,
            getAppointmentsByDate,
            getAppointmentsByPeriod,
            selectedDate,
            setSelectedDate
        }}>
            {children}
        </AppointmentContext.Provider>
    )
}

export function useAppointment() {
    const context = useContext(AppointmentContext)
    if (!context) {
        throw new Error('useAppointment must be used within AppointmentProvider')
    }
    return context
}