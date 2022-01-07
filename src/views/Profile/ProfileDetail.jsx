import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getProfile } from '../../services/profiles'

//will need to render in the information from the createProfile to here
//Probably will somehow need to connect the user
//might need an edit button

export default function ProfileDetail() {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(null)

    useEffect(() => {
        getProfile()
        .then((response) => setUser(response))
        .finally(()=> setLoading(false))
    },[]);
    if(loading) return <h2>What made the JavaScript developer so sad? He did not Node how to Express himself.</h2>

    return (
        <>
        <h2>{user.name}</h2>
        <h3>{user.email}</h3>
        <h4>{user.birthday}</h4>
        <p>{user}</p>
        <Link to={`/detail/edit/${user}`} ><button>Edit Info</button></Link>
        </>
    )
}

