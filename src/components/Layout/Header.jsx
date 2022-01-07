import { useUser } from "../../context/UserContext";
import { Link, useHistory } from "react-router-dom"
import { signOutUser } from "../../services/user";

//on click returns a redirect

export default function Header() {
    const { user, setUser } = useUser();
    const history = useHistory();

    const handleLogOut = () => {
        signOutUser();
        setUser(null)
        history.push('/login');
    };


    return (
        <>
         <header>
        <h2>
            ACME Inc. Employee Directory
        </h2>
        <p>
        {user?.email ? `Signed in as ${user.email}` : 'Not Signed In'}
          <Link to="/login"><button>Sign in</button></Link>
        </p>
         </header> 
        </>
    )
}
