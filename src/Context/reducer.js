import React from "react";
import {SET_CONTACT_DATA,GET_ALL_CONTACTS,DELETE_A_CONTACT} from "./action"

function reducer(state,action){
    console.log(JSON.stringify(state))
    // setIsSubmit(false);
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
    }else if(action.type === SET_CONTACT_DATA){
        return {
            ...state,
            contactData : [...state.contactData,action.payload.data]
        }
    }else if(action.type === GET_ALL_CONTACTS){
        return {
            state
        }
    }else if(action.type === DELETE_A_CONTACT){
        return {
            ...state,
            // contactData : state.contactData.slice(action.payload.idC,1)
            contactData : state.contactData.filter((item,i) =>{
                return i !== action.payload.idC
            })
        // }
        }
    }
    throw Error('Unknown action.');
}

export default reducer;