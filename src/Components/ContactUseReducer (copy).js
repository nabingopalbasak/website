import { useState , useEffect , useReducer, useContext } from "react";
import { Container, Grid, Label, TextArea , Form } from "semantic-ui-react";

import ContactContext from "../Context/ContactContext";



export default function ContactUseReducer() {

    const contactData = useContext(ContactContext)
    console.log("contactData : ",contactData)
    const initialState = {
        name : "",
        email : "",
        message : ""
    }
    
    function reducer(state,action){
        console.log(JSON.stringify(state))
        setIsSubmit(false);
        if(action.type === "name_input"){
            return {
                ...state,
                name : action.payload
            }
        }else if(action.type === "email_input"){
            return {
                ...state,
                email : action.payload
            }
        }else if(action.type === "message_textarea"){
            return {
                ...state,
                message : action.payload
            }
        }
        throw Error('Unknown action.');
    }

    const [isSubmit , setIsSubmit] = useState(false);
    const [state,dispatch] = useReducer(reducer,initialState);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("submit");
        console.log("Submit State : "+JSON.stringify(state),typeof state)
        contactData = state;
        console.log("contactData submit : ",contactData)
        setIsSubmit(true);
        // you can send the form data to your backend or perform other actions here
      };
    console.log("State : "+JSON.stringify(state))
    console.log("isSubmit : "+isSubmit)

  return (
    <>
      <h1>Contact (Reducer)</h1>
      <Container>
        
          <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Label basic style={{border:"none"}}>Name</Label>
            <Form.Input
              name="name"
              vvalue={state.name}
              onChange={(e) => dispatch({type : "name_input", payload : e.target.value})}
            />

            <Label basic style={{border:"none"}}>Email</Label>
            <Form.Input
              type="email"
              name="email"
              value={state.email}
              onChange={(e)=> dispatch({type : "email_input", payload : e.target.value})}
            />
          </Form.Group>
          <Form.Group>
            <Label basic style={{border:"none"}}>Message</Label>
            <TextArea
              name="message"
              rows={4}
              style={{ width : "50%" }}
              value={state.message}
              onChange={(e)=>dispatch({type : "message_textarea" , payload : e.target.value})}
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

          <p>{(isSubmit) ? `Name : ${state.name} Email : ${state.email} Message : ${state.message}` : "" }</p>
        
      </Container>
    </>
  );
}
