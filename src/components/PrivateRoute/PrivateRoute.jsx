import { Redirect, Route } from 'react-router-dom'
import { useUser } from '../../context/UserContext';


export default function PrivateRoute({children, ...routerprops}) {
    const { user } = useUser();
//I dont remember the exact syntax on how to write this out. But, I know it will need the Route, passing in the routerpropsm then it will need to render the location of the children...then redirect to a specific location

//sorry, I really tried to do this blind, it did not work out well...got a lot of it jumbled

    return (
        <Route {...routerprops} render={({ location }) => user.id ? (
                children
                ) : (
                    <Redirect to={{pathname:"/",
            state: {from: location}
                        }}
                    />
                )           
            }
        />
        
    )
}
