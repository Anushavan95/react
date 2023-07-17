import Inputs from "./dynamics/Inputs";
import React, { Component } from "react";

export default class SearchPanel extends Component {
  state = {
    list: "",
  };

  handelechange = (e) => {
    this.setState({
      list: e.target.value,
    });
  };
  handelListSubmit = (e) => {
    e.preventDefault();
    if (this.state.list !== "") {
      this.props.handleAddList(this.state.list);
      this.setState({
        list: "",
      });
    } else {
      alert("empty state");
    }
  };
  render() {
    console.log(this.state.list);
    return (
      <form onSubmit={this.handelListSubmit}>
        {/* <input
          value={this.state.list}
          onChange={this.handelechange}
          placeholder="add list"
        /> */}
        {/* <button>add list</button> */}
        <Inputs placeholder={"add list"} value={this.state.list} handelechange={this.handelechange}>
        <button>add list</button>
      </Inputs>
      </form>
    );
  }
}
