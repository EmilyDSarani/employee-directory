import { useUser } from "../../context/UserContext";
import { Link } from "react-router-dom"

//on click returns a redirect

export default function Header() {
    // const { user } = useUser();
    return (
        <>
        {/* <header>
        <h2>
            ACME Inc. Employee Directory
        </h2>
        <p>
        {user.email ? `Signed in as ${user.email}` : 'Not Signed In'}
          <Link to="/login"><button>Sign in</button></Link>
        </p>
         </header> */}
        </>
    )
}
