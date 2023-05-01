import { useState , useEffect , useReducer } from "react";
import { Container, Grid, Label, TextArea } from "semantic-ui-react";



export default function ContactUseReducer() {

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
        console.log("Submit State : "+JSON.stringify(state))
        setIsSubmit(true);
        // you can send the form data to your backend or perform other actions here
      };
    console.log("State : "+JSON.stringify(state))
    console.log("isSubmit : "+isSubmit)

  return (
    <>
      <h1>Contact (Reducer)</h1>
      <Container>
        <Grid columns="equal">
          <form onSubmit={handleSubmit}>
            <Grid.Row>
              <Grid.Column>
                <Label>Name</Label>
                <input
                  name="name"
                  value={state.name}
                  onChange={(e) => dispatch({type : "name_input", payload : e.target.value})}
                />
              </Grid.Column>
              <Grid.Column>
                <Label>Email</Label>
                <input
                  type="email"
                  name="email"
                  value={state.email}
                  onChange={(e)=> dispatch({type : "email_input", payload : e.target.value})}
                />
              </Grid.Column>
              <Grid.Column>
                <Label>Message</Label>
                <TextArea
                  name="message"
                  value={state.message}
                  onChange={(e)=>dispatch({type : "message_textarea" , payload : e.target.value})}
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
          <p>{(isSubmit) ? `Name : ${state.name} Email : ${state.email} Message : ${state.message}` : "" }</p>
        </Grid>
      </Container>
    </>
  );
}
