import { useUser } from "../../context/UserContext";
import { Link } from "react-router-dom"

//on click returns a redirect

export default function Header() {
    // const [user, setUser] = useUser();
    return (
        <>
        <h2>
            ACME Inc. Employee Directory
        </h2>
        <p>Not Signed in?</p>
        <Link to="/login"><button>Sign in</button></Link>
        
        {/*  Turnery will magic will happen here */}
         {/* <p>Welcome {user}</p> */}

        </>
    )
}
