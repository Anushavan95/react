import React, { Component } from "react";
import Register from "./Register";
import Login from "./Login";
import Tab from "./Tab";

export default class Layout extends Component {
  state = {
    tab: "Login",
    bool: false,
    count: 0,
  };
  changetabHandler = (newtab) => {
    this.setState({
      tab: newtab,
    });
  };
  handleclick = () => {
    this.setState(({ count }) => {
      return {
        count: count + 1,
      };
    });
    console.log(this.state, "handleclick");
  };
  render() {
    return (
      <div className="layout">
        layout {this.state.count}
        <button onClick={this.handleclick}>change boolean</button>
        <div className="components_layout">
          <Tab
            changetabHandler={this.changetabHandler}
            tabContext={this.state.tab}
          />
          <div className="components_auth">
            {this.state.tab == "Login" ? (
              <Login count={this.state.count} />
            ) : (
              <Register />
            )}
          </div>
        </div>
      </div>
    );
  }
}
