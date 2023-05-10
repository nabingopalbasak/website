import React, { useState } from "react";
import { Container, Grid, Label, TextArea, Form } from "semantic-ui-react";

import { useContactContext } from "../Context/ContactContext";

export default function Contact() {

  const {laodContactData} = useContactContext();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formMsg, setFormMsg] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // alert("submit");
    console.log(formData);
    // alert(JSON.stringify(formData));
    laodContactData(formData)
    let formDetails = `
        Name : ${formData.name} 
        Email : ${formData.email} 
        Message : ${formData.message}`;
    setFormMsg(formDetails);
    setFormData({
      name: "",
      email: "",
      message: "",
    })
    // you can send the form data to your backend or perform other actions here
  };
  return (
    <>
      <h1>Contact Page</h1>
      <Container>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Label basic style={{border:"none"}}>Name</Label>
            <Form.Input
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />

            <Label basic style={{border:"none"}}>Email</Label>
            <Form.Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group>
            <Label basic style={{border:"none"}}>Message</Label>
            <TextArea
              name="message"
              value={formData.message}
              rows={4}
              style={{ width : "50%" }}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Input
              style={{ float: "right" }}
              type="submit"
              name="submit"
              value="Submit"
            />
          </Form.Group>
        </Form>
        <p>{formMsg}</p>
      </Container>
    </>
  );
}
