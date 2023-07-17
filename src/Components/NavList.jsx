import BtnGroup from "./btnGroup";

import React from "react";

export default class NavList extends React.Component {
  state = {
    important: false,
  };
  // state important false

  handleclickImportant = (id, name) => {
    console.log(
      this.setState({
        important: !this.state.important,
      })
    );
    console.log(this.state.important, "important handleclickImportant");
  };

  render() {
    console.log(this.state.important, "important render");
    const { name, id } = this.props;
   
    // let myclass = ''
    // if(this.state.important) {
    //   myclass+= " important"
    // }
    // state important true

    return (
      <li className={`${this.state.important ? "important" : ""}`}>
        {name}
        <BtnGroup 
          handleDelete={() =>this.props.handleDelete()}
          handleclickImportant={() => this.handleclickImportant(id, name)}
        />{" "}
      </li>
    );
  }
}
