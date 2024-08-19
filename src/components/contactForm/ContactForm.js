import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {

  return (
    <form onSubmit={handleSubmit}>
      <label>Name: </label>
      <input type='text' value={name} onChange={({target}) => setName(target.value)}></input>
      <label>Phone: </label>
      <input type='tel' value={phone} pattern='[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}' onChange={({target}) => setPhone(target.value)}></input>
      <label>Email: </label>
      <input type='email' value={email} onChange={({target}) => setEmail(target.value)}></input>
      <input type='submit'></input>
    </form>
  );
};

