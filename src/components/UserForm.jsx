// import { useState } from 'react';
// import { authForm } from '../../hooks/authForm';

//will need to use the formState and handleform change that has been used
//do I need to pass in error?
export default function UserForm() {
   
    // const { formState, handleFormChange  } = authForm({email:'', password:''});
    // const [loading, isLoading] = useState();



    //need a handleSubmit that takes email and password from formstate

    //try-catch to implement the password length

    //fieldset, legend, form, lebel, input, magic

    return (
    <>
        <fieldset>
            <legend>-insert Sign/Login name change magic here-</legend>
                <form>
                    <label htmlFor="email">Email </label>
                        <input
                        id="email"
                        type="email"
                        name="email"
                        // value={formState.email}
                        // insert onChange eventually
                        />
                    <label htmlFor="password">Password
                    </label>
                        <input
                        id="password"
                        type="password"
                        name="password"
                        // value={formState.password}
                        // insert onChange eventually
                        />
                  <button type="submit"> 
                      -insert the same login/sign up magic name change here-
                  </button>
                </form>
        </fieldset>
    </>
    )
}
