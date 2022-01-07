import { useState } from 'react';
import { authForm } from '../hooks/authForm';

//will need to use the formState and handleform change that has been used
//do I need to pass in error?
export default function UserForm({
    label= 'Auth',
    authSubmit, 
}) {
   
    const { formState, handleFormChange  } = authForm({email:'', password:''});
    const [loading, setLoading] = useState();
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { email, password} = formState;

        try{
            if(!email || password.length < 8)
            throw new Error (
                'Yo, you need a password that is AT LEAST 8+ characters long.'
            );
            setLoading(true);
            await onsubmit(email, password);
        } catch (error) {
            setLoading(false);
            setError(error.message);
        }
    };

    //need a handleSubmit that takes email and password from formstate

    //try-catch to implement the password length

    //fieldset, legend, form, lebel, input, magic

    return (
    <>
        <fieldset>
            <legend>{label}</legend>
                <form authSubmit={handleSubmit}>
                    <label htmlFor="email">Email </label>
                        <input
                        id="email"
                        type="email"
                        name="email"
                        value={formState.email}
                        onChange={handleFormChange}
                        />
                    <label htmlFor="password">Password
                    </label>
                        <input
                        id="password"
                        type="password"
                        name="password"
                        value={formState.password}
                        onChange={handleFormChange}
                        />
                  <button type="submit" disabled={loading}> 
                    {loading ? 'Auth...' : label}
                  </button>
                  {error && <p>{error}</p>}
                </form>
        </fieldset>
    </>
    )
}
