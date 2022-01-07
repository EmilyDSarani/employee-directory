import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useHistory, useLocation } from 'react-router';
import { useUser } from '../../context/UserContext';
import UserForm from '../../components/UserForm';
import { signInUser, signUpUser } from '../../services/user'


//when the user signs up, we want to assume it is false at first. Then we can turn it to true to trigger different changes
//we know we will need the history and location from react router,
//might need useState
//will need the useUser
//will need the formstate
//will need to set an error message

//context provides global state to the entire app
export default function Auth({signingUp = false }) {
    const history = useHistory();
    const location = useLocation();
    const {setUser}  = useUser();
    // const { formState, handleFormChange } = authForm({email:'', password:''});

    //will need to put in a handle login
    //the handle login will need to pass in the form logic and then have a turnery of whether or not the login was sucessful and if not then there nees to be an error

    const handleSubmit = async (email, password) => {
        try{

            if(signingUp){
                const user = await signUpUser(email, password);
                setUser(user);
                history.replace('/confirm');
            } else {
                const user = await signInUser(email, password)
                setUser(user);
                history.replace('/detail/email')
            }
            // !signingUp ? await signInUser({id, email}) : await signUpUser({email, password})
            // history.replace(from)
        } catch(error) {
            throw error 
        }



    }




    //secion, p tag, need a link for login in and register turnery logic
    // signingUp ? have an account : Need an account
    //will also need to pass in the UserForm here as <UserForm /> and bass on the handlesubmit and signingUp to do a turnery for ? 'Sign Up' : 'Sign In'


            // <section>
        //     {/* Turnery for signing up ? Welcome : Welcome Back! */}

        //     {/* UserForm and pass in... at least the signingUp as of right now */}

        //     {/* Turnery might look something similiar to this: {signingUp ? (
        //     <p>
        //         Login to your account <Link to="/login">Login</Link>
        //     </p>
        //     ) : (
        //         <p>Sign up for an account <Link to="/signup">Create Account</Link>
        //         </p>
        //     )} */}
        // </section>

    return (
    <section>
        <h3>{signingUp ? 'Sign Up' : 'Login'} </h3>
        <UserForm 
        onSubmit={handleSubmit}
        label={signingUp ? 'Sign Up' : 'Login'}
        />

        {signingUp ? (
            <p>Have an account?!
                <Link to="/login">Login</Link>
            </p>
        ) : (
            <p>Don't have an account!?
                <Link to="/signup">Sign Up</Link>
            </p>
        )}

    </section>
    )
}
