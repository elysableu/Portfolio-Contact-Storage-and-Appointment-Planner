import React from "react";

export const ContactPicker = (props) => {
  const {name, value, contacts, onChange} = props;
  
  return (
    <select 
      name={name}
      value={value}
      onChange={onChange} >
      <option
        key={-1}
        value={""} >
          Please select contact
      </option>
      {contacts.map((contact, index) => {
        return(
        <option
          key={index}
          value={`${contact.name.toString()} : ${contact.phone.toString()}`} >
          {contact.name.toString()}
        </option>
        );
})}
    </select>

  );
};
