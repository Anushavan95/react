import React, { Component } from "react";
import Register from "./Register";
import Login from "./Login";
import Tab from "./Tab";

export default class Layout extends Component {
  state = {
    tab: "Login",
  };
  changetabHandler = (newtab) => {
    this.setState({
      tab: newtab,
    });
  };
  render() {
    return (
      <div className="layout">
        layout
        <div className="components_layout">
          <Tab changetabHandler={this.changetabHandler} tabContext={this.state.tab}  />
          <div className="components_auth">
            {this.state.tab == "Login" ? <Login /> : <Register />}
          </div>
        </div>
      </div>
    );
  }
}
