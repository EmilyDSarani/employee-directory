import { useContext, createContext, useState } from 'react'
import { getUser } from '../services/user';

//We will use this to set the user in context and have it be across the entire app.
//it is a big bucket of state that is shared across the entire app

//Create Context
const UserContext = createContext();

//Create Provider
const UserProvider = ({ children }) => {
    const currentUser = getUser()
    //when I load any page, its going to try to get the user from local storage
    //if that user exists, then set the email to user email
    const [user, setUser] = useState(currentUser?{email:currentUser.email} : {})

    //userAuth
    const login = (email, password) =>{
        const loginSuccessful =
        email === '' &&
        password === '';
        if(loginSuccessful) setUser(email);
        return loginSuccessful
    }
    //set logout
    const logout =(callback) =>{
        setUser(null);
        callback();
    };
    return <UserContext.Provider value={{user, setUser, login, logout}}>{children}</UserContext.Provider>
}
    //useUser Custom Hook
    const useUser = () => {
        const context = useContext(UserContext)

        if(context === undefined){
            throw new Error('useUser needs to be defined in UserContext Provider')
        }
        return context
    }


export {useUser, UserProvider}