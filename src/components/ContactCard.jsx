import React from "react";

function ContactCard(props) {
  return (
    <div className="contact-card">
      <img src={props.contact.imgUrl} alt="kitty" />
      <h3>{props.contact.name}</h3>
      <p>Phone: {props.contact.phone}</p>
      <p>Email: {props.contact.email}</p>
    </div>
  );
}

export default ContactCard;

// <img src={props.imgUrl} alt="kitty" />
// <h3>{props.name}</h3>
// <p>Phone: {props.phone}</p>
// <p>Email: {props.email}</p>
