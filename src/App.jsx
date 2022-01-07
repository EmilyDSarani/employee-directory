import Home from "./views/Home/Home";
import Auth from "./views/Auth/Auth";
import CreateProfile from './views/Profile/CreateProfile';
import ProfileDetail from './views/Profile/ProfileDetail';
import EditProfile from './views/Profile/EditProfile';
import { UserProvider } from "./context/UserContext";
import Header from './components/Layout/Header'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return(
    //the reason why Dan calls the provider Grandma, is because we want to be able to access the user across all of Grandma's kin. only what is wrapped around UserProvider can be accessed by UserProvider
    <UserProvider>
  <Router>
    <header>
      <Header />
    </header>
    <main>
    <Switch>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route path="/login">
        <Auth />
      </Route>
      <Route path="/signup">
        <Auth signingUp />
      </Route>  
      <Route exact path="/detail">
        <CreateProfile />
      </Route>
      <Route path="/detail/:id">
        <ProfileDetail />
      </Route>
      <Route path="/detail/:id/edit">
        <EditProfile />
      </Route>
    </Switch>
    </main>
  </Router>
  </UserProvider>
  )
}
