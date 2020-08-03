/**
* Author: Laxman Reddy
*/
import React, { Component } from "react";
import {
  BrowserRouter,
  Route,
  Switch,NavLink
} from "react-router-dom";
import "./App.css";
import Login from "./Login/Login";
import Dashboard from './Dashboard/Dashboard';

class App extends Component {
  render() {
    return (
      <div className="App" >
        <BrowserRouter>
        <div>
          <div className="header" >
            <NavLink style={{paddingLeft:2+"em"}} activeClassName="active" to="/login">
              Login
            </NavLink> 
            <NavLink style={{paddingLeft:2+"em"}} activeClassName="active" to="/dashboard">Dashboard</NavLink>
            </div> 
             <div className="content">
                <Switch>
                   <Route exact path="/login" component={Login} />
                   <Route exact path="/dashboard" component={Dashboard} />
                 <Login/>
                  </Switch>
               </div> 
               </div>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;


// {/*   <NavLink  exact activeClassName="active" to="/">
//               Home
//             </NavLink>*/}