import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../style/register.scoped.css"
import { connect } from "react-redux";
import { createUser} from "../actions/registerAction";
class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name: "",
          email: "",
          password: "",
        };
      }
      handleInput = (e) => {
        this.setState({ [e.target.name]: e.target.value });
      };
      createUser = (e) => {
        e.preventDefault();
        const user = {
          name: this.state.name,
          email: this.state.email,
          password: this.state.password,
        };
        this.props.createUser(user);
      };
      closeModal = () => {
        this.props.clearUser();
      };
  render() {
    return (
      <div>
      <div>
      <form className="auth-inner" onSubmit={this.createUser}>
      <div id="snackbar"></div>
     <h3 className="titleLog">Register</h3>
     <div className="form-group">
       <label>Name</label>
       <input
         type="text"
         className="form-control"
         placeholder="Name.."
         required
       />
     </div>
     <div className="form-group">
       <label>Email</label>
       <input
         type="email"
         className="form-control"
         placeholder="Email.."
         required
       />
     </div>
     <div className="form-group">
       <label>Passwort</label>
       <input
         type="password"
         className="form-control"
         placeholder="Passwort.."
         required
       />
     </div>
     <div className="form-group">
       <label>Passwort-Confirm</label>
       <input
         type="password"
         className="form-control"
         placeholder="Passwort-Confirm.."
         required
       />
     </div>
     <button type="submit" className="btn btn-primary btn-block">Register</button>
   </form>
   <Link to="/login" className="register">
   {" "}
   Login
 </Link>
      </div>
      </div>
    );
  }
}
export default connect(
    (state) => ({
      user: state.user,
    }),
    {  createUser }
  )(Register);
  