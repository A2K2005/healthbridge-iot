
// Utility functions for storing appointment details in localStorage

export interface AppointmentDetails {
  date: Date;
  time: string;
  doctor: string;
  type: string;
  notes?: string;
  patientName?: string;
  patientEmail?: string;
}

// Get all appointments
export const getAppointments = (): AppointmentDetails[] => {
  const appointments = localStorage.getItem('appointments');
  return appointments ? JSON.parse(appointments, (key, value) => {
    if (key === 'date') return new Date(value);
    return value;
  }) : [];
};

// Save a new appointment
export const saveAppointment = (appointment: AppointmentDetails): void => {
  const appointments = getAppointments();
  appointments.push(appointment);
  localStorage.setItem('appointments', JSON.stringify(appointments));
};

// Get upcoming appointments
export const getUpcomingAppointments = (): AppointmentDetails[] => {
  const appointments = getAppointments();
  const now = new Date();
  return appointments
    .filter(appointment => new Date(appointment.date) >= now)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
};

// Check if a slot is already booked
export const isSlotBooked = (date: Date, time: string): boolean => {
  const appointments = getAppointments();
  return appointments.some(
    appointment => 
      appointment.date.toDateString() === date.toDateString() && 
      appointment.time === time
  );
};

// Delete an appointment
export const deleteAppointment = (index: number): void => {
  const appointments = getAppointments();
  appointments.splice(index, 1);
  localStorage.setItem('appointments', JSON.stringify(appointments));
};
