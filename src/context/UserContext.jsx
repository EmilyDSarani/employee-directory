import { useContext, createContext, useState } from 'react'

//Create Context
const UserContext = createContext();

//Create Provider
const UserProvider = ({ children }) => {
    const [user, setUser] = useState('')

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
    }


export {useUser, UserProvider}