import { Link } from "react-router-dom";
import "../style/login.scoped.css"
import React, { Component, useState } from "react";
export default class Login extends Component {
  render() {
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
    return (
        <div className="login">
        <form class="auth-inner">
          <h3 className="titleLog">Login</h3>
          <div class="form-group">
            <label>Email</label>
            <input
              type="email"
              class="form-control"
              placeholder="Email.."
              value={email}
              onChange={(e)=> setEmail(e.target.value)}
              required
            />
          </div>
          <div class="form-group">
            <label>Passwort</label>
            <input
              type="password"
              class="form-control"
              placeholder="Passwort.."
              value={password}
              onChange={(e)=> setPassword(e.target.value)}
              required
            />
          </div>
          <button class="btn btn-primary btn-block">Login</button>
        </form>
        <Link to="/register" class="register">
          {" "}
          Register
        </Link>
      </div>
    );
  }
}
