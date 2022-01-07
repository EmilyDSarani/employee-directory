import { useUser } from "../../context/UserContext";
import { Link, useHistory } from "react-router-dom"
import { signOutUser } from "../../services/user";
import HeaderButton from "./HeaderButton";

//on click returns a redirect

export default function Header() {
    const { user, setUser } = useUser();
    const history = useHistory();

    // const handleLogOut = () => {
    //     signOutUser();
    //     setUser(null)
    //     history.push('/login');
    // };


    return (
        <>
         <header>
        <h2>
            ACME Inc. Employee Directory
        </h2>
        <p>
        {user?.email 
        ? `Logged in as ${user.email}` 
        : 'Not logged in'}
        <HeaderButton />
        </p>
         </header> 
        </>
    )
}
