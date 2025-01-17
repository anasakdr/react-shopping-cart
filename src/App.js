import React from "react";
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Link } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import AdminScreen from "./screens/AdminScreen";
import Login from "./components/Login"
import Register from "./components/Register"
class App extends React.Component {
  render() {

    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="grid-container">
            <header>
              <Link className="left" to="/">React Shopping Cart</Link>
              <Link className="right" to="/login">Login</Link>
              <Link  to="/register">Register</Link>
            </header>
            <main>
              <Route path="/admin" component={AdminScreen} />
              <Route path="/" component={HomeScreen} exact />
              <Route path="/login" component={Login}  />
              <Route path="/register" component={Register}  />
            </main>
            <footer>All right is reserved.</footer>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
