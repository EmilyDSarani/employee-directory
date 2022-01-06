import { useState } from 'react';
import { authForm } from '../../hooks/authForm';

//will need to use the formState and handleform change that has been used
//do I need to pass in error?
export default function UserForm() {
   
    const { formState, handleFormChange  } = authForm({email:'', password:''});
    const [loading, isLoading] = useState();



    //need a handleSubmit that takes email and password from formstate

    //try-catch to implement the password length








    //fieldset, legend, form, lebel, input, magic

    return (
        <div>
            
        </div>
    )
}
