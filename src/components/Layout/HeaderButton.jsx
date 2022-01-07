import { useUser } from "../../context/UserContext";
import { Link, useHistory } from "react-router-dom"
import { signOutUser } from "../../services/user";

export default function HeaderButton() {
    const { user, setUser } = useUser();
    const history = useHistory();

    const handleLogOut = async () => {
        await signOutUser();
        setUser({})
        history.push('/login');
    };

    return (
        <div>
              {user?.email ? (
                  <button onClick={handleLogOut}>LogOut</button>
              ) : (
            <Link to="/login"><button>Sign in</button></Link>
              )}
        </div>
    )
}
