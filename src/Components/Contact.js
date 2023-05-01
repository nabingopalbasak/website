import React, { useState } from "react";
import { Container, Grid, Label, TextArea } from "semantic-ui-react";

export default function Contact() {
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
    alert("submit");
    console.log(formData);
    alert(JSON.stringify(formData));
    let formDetails = `
        Name : ${formData.name} 
        Email : ${formData.email} 
        Message : ${formData.message}`;
    setFormMsg(formDetails);
    // you can send the form data to your backend or perform other actions here
  };
  return (
    <>
      <h1>Contact Page</h1>
      <Container>
        <Grid columns="equal">
          <form onSubmit={handleSubmit}>
            <Grid.Row>
              <Grid.Column>
                <Label>Name</Label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </Grid.Column>
              <Grid.Column>
                <Label>Email</Label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </Grid.Column>
              <Grid.Column>
                <Label>Message</Label>
                <TextArea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                />
              </Grid.Column>
              <Grid.Column>
                <br />
                <input
                  style={{ float: "right" }}
                  type="submit"
                  name="submit"
                  value="Submit"
                />
              </Grid.Column>
            </Grid.Row>
          </form>
          <p>{formMsg}</p>
        </Grid>
      </Container>
    </>
  );
}
