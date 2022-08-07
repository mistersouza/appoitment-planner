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
        <input
          type="text"
          name="name"
          value={name}
          onChange={({target}) => setName(target.value)}
          required
          placeholder="Contact Name"
        />
        <input
          type="tel"
          name="phone"
          value={phone}
          onChange={({target}) => setPhone(target.value)}
          required
          // regex is for German phone numbers
          pattern='(((\+|00+)49)|0)[1-9]\d+'
          placeholder='Contact Phone Number (+## ### #####)'
        />
        <input
          type="email"
          name="email"
          value={email}
          onChange={({target}) => setEmail(target.value)}
          required
          placeholder="Contact Email"
        />
      
      <button type="submit">Add Contact</button>
    </form>
  );
};
