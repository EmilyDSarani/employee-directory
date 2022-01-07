import {useState, useEffect} from 'react'
import { useHistory } from 'react-router'
import { UserProvider } from '../../context/UserContext'
import { createProfile } from '../../services/profiles'
import { useUser } from '../../context/UserContext'

export default function CreateProfile() {
    //from the createProfile function, it takes in a name, email, bio, and birthday. So that is the state that we would want to set and grab later.
    const { user }= useUser();
    const [name, setName] = useState(user.email)
    // const [email, setEmail] = useState('')
    const [bio, setBio] = useState('')
    const [birthday, setBirthday] = useState('')
    const history = useHistory();
    
    const handleSubmit = async (e) =>{
        e.preventDefault();

        await createProfile({name, email, bio, birthday});
        history.push('/detail/email')
    }

    return (
        <>
        <fieldset>
            <legend> Your Details </legend>
            <form>
            <label htmlFor="name">Employee Name</label>
            <input
           
            name='name'
            type='text'
            value={name}
            onChange={({ target }) => setName(target.value)} />

             <label htmlFor="email">Employee Email</label>
            <input
          
            name='email'
            type='text'
            value={user.email}
            disabled
           />

            <label htmlFor="bio">Employee Bio</label>
            <input
           
            name='bio'
            type='text'
            value={bio}
            onChange={({ target }) => setBio(target.value)} />

            <label htmlFor="birthday">Employee Birthday</label>
            <input
           
            name='birthday'
            type='text'
            value={birthday}
            onChange={({ target }) => setBirthday(target.value)} />

            <button type="button" onClick={handleSubmit}>Add</button>
            </form>
        </fieldset>  
        </>
    )
}
