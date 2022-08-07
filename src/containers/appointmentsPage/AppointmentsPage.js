import React, { useState } from "react";

import { AppointmentForm } from '../../components/appointmentForm/AppointmentForm';
import { TileList } from '../../components/tileList/TileList';

export const AppointmentsPage = ({
  appointments,
  addAppointment,
  contacts
}) => {
  const [title, setTitle] = useState('');
  const [contact, setContact] = useState(
    contacts.length > 0 ? contacts[0].name : ''
  );
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    addAppointment(title, contact, date, time);
    setTitle('');
    setContact('');
    setDate('');
    setTime('');
  };

  return (
    <>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm
          contact={contact}
          contacts={contacts}
          date={date}
          title={title}
          time={time}
          setContact={setContact}
          setDate={setDate}
          setTime={setTime}
          setTitle={setTitle}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList tiles={appointments} />
      </section>
    </>
  );
};
