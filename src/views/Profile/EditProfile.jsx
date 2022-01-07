import { useState, useEffect } from 'react'
import { useHistory } from 'react-router'
import { getProfile, updateProfile } from '../../services/profiles'

export default function EditProfile({ match }) {
    const [name, setName] = useState('')
    const [bio, setBio] = useState('')
    const [birthday, setBirthday] = useState('')
    const { email } = match.params
    const history = useHistory();

    useEffect(()=> {
        getProfile(email)
        .then((response)=>{
            setName(response.name)
            setBio(response.bio)
            setBirthday(response.birthday)
        })
    }, [email]);

    const handleUpdate = async() => {
    const update = confirm(`would you like to update ${name}?`);
    if(update){
        updateProfile(email, {name, bio, birthday})

        history.push(`/detail/${email}`)
    }

    };

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

            <button type="button" onClick={handleUpdate}>Update</button>

            </form>
        </fieldset>  
        </>
    )
}
