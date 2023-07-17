import React, { Component } from "react";
import "./App.scss";
import NavList from "./Components/NavList";
import SearchPanel from "./Components/SearchPanel";
import Header from "./Components/header";
import Text from "./Components/dynamics/Text";
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      title: "First React App",
      lists: [
        { name: "Watching", id: 0, mportant: false },
        { name: "test", id: 1, important: true },
        { name: "example", id: 2, important: false },
      ],
    };
  }

  handleDelete = (idx) => {
    let newlist = [...this.state.lists];
    newlist.splice(idx, 1);
    console.log(newlist, idx, "new");
    this.setState({
      lists: newlist,
    });
  };

  render() {
    console.log(this.state);
    const { bool, title, lists } = this.state;

    return (
      <div className="App">
        <Header text={title} />
        <SearchPanel />
        <ul className="nav-list">
          {lists.map((item, index) => {
            return (
              <NavList
                {...item}
                handleDelete={() => this.handleDelete(index)}
                key={item.name}
              />
            );
          })}
        </ul>
        {/* <Text class="error" type="h2">my new text</Text> */}
      </div>
    );
  }
}
