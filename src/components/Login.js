import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./login.css";
import MyAccount from "./MyAccount";
import { Route } from "react-router-dom";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      user: [],
      loggedIn: false
    };
  }
  login() {
    const { email, password } = this.state;
    // console.log(email, password)
    axios.post("/api/finduser", { email, password }).then(response => {
      this.setState({ user: response.data, loggedIn: true })
    });
  }

  render() {
    const { email, password } = this.state;
    const isEnabled = email.length > 0 && password.length > 0;
    console.log(this.state.user);
    console.log("login props............", this.props);

    return (
      <div>
        {!this.state.loggedIn ? (
          <div className="login-container">
            <div className="user-input">
              <p className="user-name">Email</p>

              <input onChange={e => this.setState({ email: e.target.value })} />
              <p className="user-name">Password</p>
              <input
                type="password"
                onChange={e => this.setState({ password: e.target.value })}
              />
              <Link to="/account">
                <button
                  disabled={!isEnabled}
                  onClick={this.login.bind(this)}
                  className="login-submit"
                >
                  Login
                </button>
              </Link>
            </div>
          </div>
        ) : null}
        <Route
          path="/account"
          render={() => {
            console.log("sdhhhhhhhh");
            return <MyAccount user={this.state.user} />;
          }}
        />
      </div>
    );
  }
}
export default Login;
