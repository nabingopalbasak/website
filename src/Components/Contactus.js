import React, { useRef } from 'react';
import { Label, TextArea } from "semantic-ui-react";

const ContactForm = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      message: messageRef.current.value,
    };
    console.log(formData);
    alert(JSON.stringify(formData))
    // you can send the form data to your backend or perform other actions here
  };

  return (
    <form onSubmit={handleSubmit}>
      <Label>
        Name:
        <input type="text" ref={nameRef} />
      </Label>
      
      <Label>
        Email:
        <input type="email" ref={emailRef} />
      </Label>
      
      <Label>
        Message:
        <TextArea name="message" ref={messageRef} />
      </Label>
      
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
