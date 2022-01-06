import { useState } from 'react'

// {} => falsey and [] = truthy
//with this specific auth form, it can only be used in one spot
export function authForm(inputes = {}) {

    const [formState, setFormState] = userState
    const handleFormChange = (e) => {
    const {name, value} = e.target;
    setFormState((prevState) => {
        return{ ...prevState, [name]: value };
    
    })
    }
    return {formState, handleFormChange}
}