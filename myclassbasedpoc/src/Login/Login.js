
/**
* Author: Laxman Reddy
* Login Page
*/

import React, { Component } from "react";
import axios from "axios";
import { Redirect, Route, Switch } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";

class Login extends Component {
  state = {
    LoginStatus: false,
  };

  render() {
    return (
      <div style={{ margin: 8 + "em", color: "blue" }}>
        <h1>Class Based Component</h1>
        <br />
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">
            <b>Username / Phone Number / Email address</b>
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">
            <b>Password</b>
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={(e) => this.login(e)}
        >
          Submit
        </button>
        <Route
          render={() =>
            this.state.LoginStatus ? (
              <div>
                <Redirect
                  to={{ pathname: "/dashboard", component: { Dashboard } }}
                />
                {/* <Route  path="/dashboard" component={Dashboard} /> */}
              </div>
            ) : null
          }
        />
        {this.state.LoginStatus ? (
          <div className="content">
            <Switch>
              {/* <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          /> */}
              {/* <PrivateRoute path="/" component={Dashboard} />  */}
            </Switch>
          </div>
        ) : null}
      </div>
    );
  }

  login = (e) => {
    e.preventDefault(); //To prevent default behaviour of button
    console.log(document.getElementById("exampleInputEmail1").value);
    console.log(document.getElementById("exampleInputPassword1").value);
    let request = {
      phone: document.getElementById("exampleInputEmail1").value,
      email: document.getElementById("exampleInputEmail1").value,
      password: document.getElementById("exampleInputPassword1").value,
    };
    axios
      .post("http://localhost:3000/login", request)
      .then((res) => {
        
        const x = res.data.message;

        if (x === "Successful login!!!") {
          this.setState({ LoginStatus: true });
          console.log(this.state.LoginStatus);
        } else if(x==="Invalid Password!! Try Again"||x==="User not found!!"){
            alert("Username or Password is incorrect so try again");
          this.setState({ LoginStatus: false });
          console.log(this.state.LoginStatus);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
}
// const mapStateToProps = (state) =>{
// return{
//     LoginStatus:state.reducer.status
// };
// };
export default Login;
// export default connect(mapStateToProps)(Welcome);
