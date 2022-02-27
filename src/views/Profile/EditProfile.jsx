import { useState, useEffect } from 'react'
import { useHistory } from 'react-router'
import { getProfile, updateProfile } from '../../services/profiles'
import { useUser } from '../../context/UserContext'

export default function EditProfile() {
    const { user } = useUser()
    const [name, setName] = useState('')
    const [bio, setBio] = useState('')
    const [birthday, setBirthday] = useState('')

    //Another way to think about it, but keep in mind that info could get outdated
    // const userInfo = {name, email: user.email, bio, birthday}
    
    const history = useHistory();

    useEffect(()=> {
        getProfile()
        .then((profile)=>{
            setName(profile.name)
            setBio(profile.bio)
            setBirthday(profile.birthday)
        })
    }, []);

    const handleUpdate = async(e) => {
        e.preventDefault();
    const confirm = window.confirm(`would you like to update ${name}?`);
    if(confirm){
        console.log(user.email)
        const update = await updateProfile({name, email: user.email, bio, birthday})
        console.log(update)
        history.push(`/detail/email`)
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
            onChange={(e) => setName(e.target.value)} />

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

            <button type="button" onClick={handleUpdate}>Update</button>

            </form>
        </fieldset>  
        </>
    )
}
