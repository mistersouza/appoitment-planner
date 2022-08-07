import React from "react";

import { ContactPicker } from '../contactPicker/ContactPicker';

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-UK")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  const getContactNames = () => {
    return contacts.map(contact => contact.name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={title}
        required
        onChange={({target}) => setTitle(target.value)}
        placeholder="Appointment Title"
      />
      <ContactPicker
        name="contact"
        value={contact}
        contacts={getContactNames()}
        onChange={({target}) => setContact(target.value)}
        placeholder="Appointment With"
      />
      <input
        type='date'
        name='date'
        value={date}
        required
        min={getTodayString()}
        onChange={({target}) => setDate(target.value)}
      />
      <input
        type='time'
        name='time'
        required
        value={time}
        onChange={({target}) => setTime(target.value)}
      />
      <button type='submit'>Add Appointment</button>
    </form>
  );
};
