import React, { createContext,useContext,useReducer } from "react";
import reducer from "./reducer"
import {SET_CONTACT_DATA,GET_ALL_CONTACTS,DELETE_A_CONTACT} from "./action"


const initialState = {
    name : "",
    email : "",
    message : "",
    contactData : []
}

const ContactContext = createContext();

const ContactProvider = ({children}) => {
    const [ state , dispatch ] = useReducer( reducer , initialState );

    const laodContactData = (data) => {
        dispatch({
           type: SET_CONTACT_DATA,
           payload: { data: data },
         });
         console.log("dispatch : ",state,data)
     };

     const getAllContacts = () => {
        return state
     }

     const deleteContact = (id) =>{
        dispatch({
            type : DELETE_A_CONTACT,
            payload : {idC:id}
        })
     }

     return (
        <ContactContext.Provider
            value={{
                ...state,
                laodContactData,
                getAllContacts,
                deleteContact
            }}
        >
            {children}
        </ContactContext.Provider>
     )

}

const useContactContext = () => {
    return useContext(ContactContext);
}

export  {ContactProvider,initialState,useContactContext};