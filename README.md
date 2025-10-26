# 💈 Barber Shop Scheduling System

A modern and intuitive appointment scheduling system built for barber shops. This application allows barbers to manage their daily appointments efficiently with a clean and user-friendly interface.

## 🚀 Features

- **Create Appointments**: Schedule new appointments by selecting date, time, and client name
- **View Appointments**: Visualize all appointments organized by time periods (Morning, Afternoon, Night)
- **Delete Appointments**: Cancel appointments with confirmation dialog
- **Date Filtering**: Filter appointments by specific dates
- **Time Slots**: Pre-defined time slots for different periods of the day
- **Responsive Design**: Clean and modern UI built with Tailwind CSS

## 🛠️ Technologies

- **React** - UI library
- **TypeScript** - Type safety and better developer experience
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Context API** - State management
- **SVG React Components** - Icon system


## 📁 Project Structure

```
src/
├── assets/
│   └── icons/          # SVG icons
├── components/         # Reusable UI components
│   ├── Button.tsx
│   ├── ButtonIcon.tsx
│   ├── Container.tsx
│   ├── Icon.tsx
│   ├── Input.tsx
│   ├── Text.tsx
│   └── TimeSelect.tsx
├── contexts/
│   └── AppointmentContext.tsx  # Global state management
├── core-components/    # Feature-specific components
│   ├── AppointmentDisplay.tsx
│   ├── AppointmentHeader.tsx
│   └── InfoDisplay.tsx
├── data/
│   ├── timeSlots.ts    # Available time slots
│   └── timeAppointment.ts
├── pages/
│   ├── MainPage.tsx
│   └── ScheduleSection.tsx
└── App.tsx
```

## 🎯 How to Use

### Creating an Appointment

1. Select a date in the scheduling form
2. Choose an available time slot
3. Enter the client's name
4. Click the "AGENDAR" (Schedule) button

### Viewing Appointments

1. Use the date picker in the header to select a date
2. Appointments will be displayed organized by time periods
3. Each period shows all scheduled appointments sorted by time

### Canceling an Appointment

1. Find the appointment you want to cancel
2. Click the trash icon next to it
3. Confirm the cancellation in the dialog

## 🎨 UI Components

### Core Components

- **Button**: Primary action buttons with variants (default, disabled)
- **ButtonIcon**: Icon-only buttons for actions
- **Container**: Layout wrapper component
- **Input**: Form input with icon support
- **Text**: Typography component with multiple variants
- **TimeSelect**: Time slot selector with active/default states

### Feature Components

- **ScheduleSection**: Appointment creation form
- **AppointmentDisplay**: List of appointments by period
- **AppointmentHeader**: Date selector and page title
- **InfoDisplay**: Individual appointment item with delete action

## 🔄 State Management

The application uses React Context API for global state management:

- **AppointmentContext**: Manages all appointments and provides CRUD operations
- **Appointments Array**: Stores all scheduled appointments
- **Selected Date**: Controls which date is being viewed

## 📊 Data Models

### Appointment Interface
```typescript
interface Appointment {
    id: string
    date: string        // ISO date format (YYYY-MM-DD)
    time: string        // HH:MM format
    clientName: string
    period: string      // "Manhã" | "Tarde" | "Noite"
}
```

## 🎨 Design System

### Time Periods
- **Morning (Manhã)**: 09:00 - 12:00
- **Afternoon (Tarde)**: 13:00 - 18:00
- **Night (Noite)**: 19:00 - 21:00

## 🚧 Future Enhancements

- [ ] Persistent storage (localStorage or database)
- [ ] User authentication
- [ ] Multiple barbers support
- [ ] Service type selection
- [ ] Duration management
- [ ] Notifications system
- [ ] Export appointments to calendar
- [ ] Customer phone number
- [ ] Appointment history