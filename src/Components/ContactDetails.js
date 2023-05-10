import React,{useContext,useState} from "react"
import { useContactContext } from "../Context/ContactContext";
import { Header , Table, Icon, Button, Modal, Image } from "semantic-ui-react";

export default function ContactDetails(){
    const {state,getAllContacts , deleteContact} = useContactContext();
    const [isModalActive , setIsModalActive] = useState(true);
    // alert("sd contact details")
    console.log("contactDetails : ",getAllContacts())
    const contactDatas = getAllContacts().contactData

    const deleteHandel = (e,id) => {
        e.preventDefault();
        // alert(id)
        deleteContact(id);
    }

    const modelClose = () => {
        alert("close")
        setIsModalActive(false)
    }
    const modelOpen = () => {
        alert("open")
        setIsModalActive(true)
    }

    return (
        <>
        <h1>Contact Details</h1>
        {/* <p>{JSON.stringify(contactDatas)}</p> */}
        <Button onClick={modelOpen}>Add Contact</Button>
        <Table celled>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>#</Table.HeaderCell>
                    <Table.HeaderCell>Name</Table.HeaderCell>
                    <Table.HeaderCell>Email</Table.HeaderCell>
                    <Table.HeaderCell>Message</Table.HeaderCell>
                    <Table.HeaderCell></Table.HeaderCell>
                </Table.Row>
            </Table.Header>
  
            <Table.Body>
                { contactDatas.map((item,i) => {
                   return (
                    <Table.Row key={i}>
                        <Table.Cell>{(i+1)}</Table.Cell>
                        <Table.Cell>{item.name}</Table.Cell>
                        <Table.Cell>{item.email}</Table.Cell>
                        <Table.Cell>{item.message}</Table.Cell>
                        <Table.Cell> 
                            <Icon name="delete" style={{ color: 'red' }} onClick={(e) => deleteHandel(e,i)} />
                             </Table.Cell>
                    </Table.Row>
                 )}) 
                }
                
            </Table.Body>
            
        </Table>

        {/* Modal Start */}
        <Modal onRequestClose={modelClose} active={isModalActive}>
            {/* {alert(isModalActive)} */}
                    <Icon name="close" onClick={modelClose}/>
                    <Modal.Header>Select a photo</Modal.Header>
                    <Modal.Content image>
                        {/* <Image size="medium" wrapComponent src="http://semantic-ui.com/images/avatar2/large/rachel.png"/> */}
                        <Modal.Description>
                            <Header>Default profile image</Header>
                            <p>
                                We've found the following gravatar image associated with your e-mail address.
                            </p>
                            <p>
                                Is it okay to use this photo?
                            </p>
                        </Modal.Description>
                    </Modal.Content>
                    {/* <Modal.Actions>
                        <Button emphasis="negative" onClick={modelClose}>Nope</Button>
                        <Modal.LabeledButton emphasis="positive" 
                                       label="checkmark" 
                                       labelType="icon" 
                                       onClick={modelClose}
                        >
                            Yep, that's me
                        </Modal.LabeledButton>
                    </Modal.Actions> */}
                </Modal>
        {/* Modal End */}
        </>
    )
}
