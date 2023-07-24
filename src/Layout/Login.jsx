import React, { Component } from "react";

export default class Login extends React.PureComponent {
  constructor() {
    console.log("start")
    super();
    this.state = {
      login: {
        email: "",
        password: "",
      },
      test: 'CHANGE TEST',
      products: []
    };
    console.log(this.state, 'constructor state')
  }
 

  handleEmail = (e) => {
    const value = e.target.value;
    this.setState(({ login }) => {
      return {
        login: {
          ...login,
          [e.target.name]: value,
        },
      };
    });
    
  };
  componentDidMount() {
    console.log('componentDidMount')
   
  }
   componentWillMount() {
    fetch('https://fakestoreapi.com/products').then(res => res.json()).then(response => {
      this.setState({
        products: response
      })
    })
   console.log(this.state.products, 'componentWillMount')

    console.log('componentWillMount')
   
  }
  componentWillUpdate () {
    console.log('componentWillUpdate')
  }
  changetest = () => {
    this.setState({
      test: "changed test"
    })
  }
  componentDidUpdate() {
    console.log('componentDidUpdate')
    
   
  }


  render() {
    
    console.log("render")
console.log(this.state.products, 'render')

    return (
      <div>
    <p>  {this.props.count}</p>  
        {this.state.products.length >1 ? <>{this.state.products.map(item => {
          return <img src={item.image} style={{width: '150px'}} />
        })}</>: <>loading</>}
        
        {this.state.test}
        <button onClick={this.changetest}>change test</button>
        <input placeholder="email" onChange={this.handleEmail} name="email" />
        <input
          placeholder="password"
          onChange={this.handleEmail}
          name="password"
        />
      </div>
    );
  }
}
