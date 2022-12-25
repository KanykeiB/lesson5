import {Link, Route, Switch} from "react-router-dom";
import AboutPage from "./pages/about";
import SignIn from "./pages/signIn";
import HomePage from "./pages/home";
import './App.css';

function App() {
  return (
    <div>
       <div className="container text-center bg-success bg-opacity-25 p-3 ">
            <div className="row">
              <div className="col ">
                <Link className="text-dark text-decoration-none" to='/'>Home</Link>
              </div>
              <div className="col">
                <Link className="text-dark text-decoration-none" to='/about'>About</Link>
              </div>
              <div className="col">
                <Link className="text-dark text-decoration-none" to='/signIn'>Sign In</Link>
              </div>
            </div>
        </div>
    <main>
    <Switch>
      <Route exact path='/'>
        <HomePage />
      </Route>
      <Route exact path='/about'>
        <AboutPage />
      </Route>
      <Route exact path='/signIn'>
        <SignIn />
      </Route>

    </Switch>
    </main>
  
  
    </div>
    );
}

export default App;
