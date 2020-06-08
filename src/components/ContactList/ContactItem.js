import React from "react";

const ContactItem = ({ name, number, id, onDelete }) => {
  const deleteContacts = () => onDelete(id);
  return (
    <>
      <li id={id}>
        <p>{name}</p>
        <p>{number}</p>
        <button onClick={deleteContacts}>Delete</button>
      </li>
    </>
  );
};

export default ContactItem;
