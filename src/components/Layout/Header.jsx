import { useUser } from "../../context/UserContext";


export default function Header() {
    // const [user, setUser] = useUser();
    return (
        <>
        <h2>
            ACME
        </h2>
        <p>Not Signed in?</p>
        <button>Sign In</button>
        {/*  Turnery will magic will happen here */}
         {/* <p>Welcome {user}</p> */}

        </>
    )
}
