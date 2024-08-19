import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

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

  return (
    <form onSubmit={handleSubmit}>
      <label>Title: </label>
      <input type='text' value={title} onChange={({target}) => setTitle(target.value)}></input>
      <label>Relevant Contact: </label>
      <ContactPicker  
        value={contact}
        contacts={contacts}
        onChange={(e) => setContact(e.target.value)}
      />
      <label>Date: </label>
      <input type='date' value={date} min={getTodayString()} onChange={({target}) => setDate(target.value)}></input>
      <label>Time: </label>
      <input type='time' value={time} pattern='[0-1][0-9]:[0-5][0-9]' onChange={({target}) => setTime(target.value)}></input>
      <input type='submit'></input>
    </form>
  );
};
