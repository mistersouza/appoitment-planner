import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({ contacts, addContact }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [duplicate, setDuplicate] = useState(null);

  // checking for duplicated name entry 

  useEffect(() => {
      const found = contacts.find((contact) => contact.name === name);
      if (found !== undefined) {
        return setDuplicate(true);
      }
      return setDuplicate(false);

  }, [name, contacts, duplicate]);

  const handleSubmit = event => {
    event.preventDefault();

    if (!duplicate) {
      addContact(name, phone, email);
      setName('');
      setPhone('');
      setEmail('');
    }
  };


  return (
    <>
      <section>
        <h2>
          Add Contact
          {duplicate ? ' - Name Already Exists' : ''}
        </h2>
        <ContactForm
          name={name}
          setName={setName}
          phone={phone}
          setPhone={setPhone}
          email={email}
          setEmail={setEmail}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList tiles={contacts} />
      </section>
    </>
  );
};
