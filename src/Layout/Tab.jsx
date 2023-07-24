import React, { Component } from "react";

export default class Tab extends Component {
  render() {
    return (
      <div>
        <button className={`${this.props.tabContext == "Register"? "active": ""}`} onClick={() => this.props.changetabHandler("Register")}>
          Register
        </button>
        <button className={`${this.props.tabContext == "Login"? "active": ""}` }onClick={() => this.props.changetabHandler("Login")}>
          Login
        </button>
      </div>
    );
  }
}
