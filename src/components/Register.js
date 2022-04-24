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
        this.setState({ 
            [e.target.id]: e.target.value
        });
      };
      createUser = (e) => {
        e.preventDefault();
        const user = {
          name: this.state.name,
          email: this.state.email,
          password: this.state.password,
        };
        console.log(user);
        this.props.createUser(user);
      };
      async handleSubmit() {
        let result = await axios.get(
          `http://localhost:3000/user?email=${this.email}`
        );
        if (result.status === 200 && result.data.length > 0) {
          // window.alert("user ist schon existert");
          this.showToast("user ist schon existert")
        } else {
          if (this.passwort === this.passwort_confirm) {
            if (this.passwort.length >= 8) {
              // let result = await axios.post("http://localhost:3000/user", {
              //   vor_name: this.vor_name,
              //   last_name: this.last_name,
              //   email: this.email,
              //   passwort: this.passwort,
              //   passwort_confirm: this.passwort_confirm,
              // });
              // console.log(result);
              // if (result.status === 201) {
              //   // this.showToast("User ist erfolgreisch gelegt")
              //   // localStorage.setItem('user-info', JSON.stringify(result.data) )
                this.$router.push("/Next");
              //                }
              } else {
                 this.showToast("Passwort ist kleiner als 8 stelle")
              }
            } else {
                this.showToast("Passwort ist nicht gleich Passwort confirm")
            }
          }
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
         id="name"
         className="form-control"
         placeholder="Name.."
         onChange={this.handleInput}
         required
       />
     </div>
     <div className="form-group">
       <label>Email</label>
       <input
         type="email"
         id="email"
         className="form-control"
         placeholder="Email.."
         onChange={this.handleInput}
         required
       />
     </div>
     <div className="form-group">
       <label>Passwort</label>
       <input
         type="password"
         id="password"
         className="form-control"
         placeholder="Passwort.."
         onChange={this.handleInput}
         required
       />
     </div>
     <div className="form-group">
       <label>Passwort-Confirm</label>
       <input
         type="password"
         id="rePassword"
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
  