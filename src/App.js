import React, { Component } from "react";
import "./App.scss";
import NavList from "./Components/NavList";
import SearchPanel from "./Components/SearchPanel";
import Header from "./Components/header";
import Text from "./Components/dynamics/Text";
import { v4 as uuidv4 } from "uuid";
import Inputs from "./Components/dynamics/Inputs";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      title: "First React App",
      lists: [
        { name: "Watching", id: uuidv4(), important: false },
        { name: "test", id: uuidv4(), important: true },
        { name: "example", id: uuidv4(), important: false },
      ],
    };
  }
  // id = this.state.lists.length

  handleDelete = (idx) => {
    console.log(idx, "idx get");
    let newlist = [...this.state.lists];
    const newContactList = newlist.filter((item) => {
      return item.id !== idx;
    });
    // newlist.splice(idx, 1);
    this.setState({
      lists: newContactList,
    });
  };

  handleAddList = (text) => {
    let objecctLists = {
      name: text,
      id: uuidv4(),
      important: false,
    };
  
    let mergeList = [...this.state.lists, objecctLists];

    this.setState({
      lists: mergeList,
    });
  };

  render() {
    console.log(this.state);
    const { bool, title, lists } = this.state;

    return (
      <div className="App">
        <Header text={title} />
        <SearchPanel handleAddList={this.handleAddList} />
        <ul className="nav-list">
          {lists.map((item, index) => {
            return (
              <NavList
                {...item}
                handleDelete={() => this.handleDelete(item.id)}
                key={item.id}
              />
            );
          })}
        </ul>
    {/* <Inputs placeholder={"yor text"}>
    <h2>text</h2>
    </Inputs> */}
      </div>
    );
  }
}
