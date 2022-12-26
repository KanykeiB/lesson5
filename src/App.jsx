// using bootstrap

// import {Link, Route, Switch} from "react-router-dom";
// import AboutPage from "./pages/about";
// import SignIn from "./pages/signIn";
// import HomePage from "./pages/home";
// import Button from '@mui/material/Button';
// import './App.css';
// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';




// function App() {
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };
//   return (
    
//     <div>
//        <div className="container text-center bg-success bg-opacity-25 p-3 ">
//             <div className="row">
//               <div className="col ">
//                 <Link className="text-dark text-decoration-none" to='/'>Home</Link>
//               </div>
//               <div className="col">
//                 <Link className="text-dark text-decoration-none" to='/about'>About</Link>
//               </div>
//               <div className="col">
//                 <Link className="text-dark text-decoration-none" to='/signIn'>Sign In</Link>
//               </div>
//             </div>
//         </div>
//     <main>
//     <Switch>
//       <Route exact path='/'>
//         <HomePage />
//       </Route>
//       <Route exact path='/about'>
//         <AboutPage />
//       </Route>
//       <Route exact path='/signIn'>
//         <SignIn />
//       </Route>

//     </Switch>
//     </main>
  
//     </div>
//     );
// }

// export default App;



//Using material ui
import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {
  Route,
  Switch,
  Link,
  matchPath,
  useLocation,
} from 'react-router-dom';
import MediaCard from "./pages/about";
import SignIn from "./pages/signIn";
import BasicCard from "./pages/home";


function useRouteMatch(patterns) {
  const { pathname } = useLocation();

  for (let i = 0; i < patterns.length; i += 1) {
    const pattern = patterns[i];
    const possibleMatch = matchPath(pattern, pathname);
    if (possibleMatch !== null) {
      return possibleMatch;
    }
  }

  return null;
}

function MyTabs() {
  const routeMatch = useRouteMatch(['/home', '/about', '/signIn']);
  const currentTab = routeMatch?.pattern?.path;

  return (
    <Tabs value={currentTab}  centered>
      <Tab label="Home" to='/home' component={Link} />
      <Tab label="About" to='/about' component={Link} />
      <Tab label="Sign In" to='/signIn' component={Link} />
    </Tabs>
  );
}
export default function TabsRouter() {
  return (
    <Switch>
      <Box sx={{ width: '100%' }}>
      <MyTabs/>
        <Switch>
          <Route exact path='/home'>
            <BasicCard />
          </Route>
          <Route exact path='/about'>
             <MediaCard />
          </Route>
          <Route exact path='/signIn'>
            <SignIn />
          </Route>
        </Switch>
        
      </Box>
    </Switch>
  );
}

