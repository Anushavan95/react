import React, { Component } from "react";

export default class Login extends Component {
  state = {
    email: "",
    password: ''
  };

  handleEmail = (e) => {
    console.log(e.target);
    this.setState({
      [e.target.name]: e.target.value
    })
    // this.setState({
    //   email: e.target.value,
    // });
  };
  // handlePassword = (e) => {
  //   console.log(e.target.value);
  //   this.setState({
  //     password: e.target.value,
  //   });
  // };
  render() {
    console.log(this.state)
    return (
      <div>
        <input placeholder="email" onChange={this.handleEmail}  name="email"/>
        <input placeholder="password" onChange={this.handleEmail} name="password" />
      </div>
    );
  }
}
