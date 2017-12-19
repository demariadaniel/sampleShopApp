import React, { Component } from 'react';
import logo from '../logo.svg';
import { Switch, Route, Link } from 'react-router-dom';
import Shop from './Shop';
import Splash from './Splash';
import axios from 'axios';
import './../styles/App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      userName: ""
    }
  }
  componentDidMount() {
    if (localStorage.getItem('userName')) {
      this.setState({
        userName: localStorage.getItem('userName')
      }, () => {
        this.props.history.push('/shop/shoes')
      })
    } else {
      axios.get('http://localhost:8080/clear')
      this.props.history.push('/')
    }
  }
  onChange = (e) => {
    this.setState({
      userName: e.target.value
    })
    localStorage.setItem('userName', e.target.value)
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">The Shop</h1>
        </header>
        <div className="App-intro">
          <Switch>
            <Route path="/" exact render={() => {
              return <Splash
                onChange={this.onChange}
                userName={this.state.userName} />
            }} />
            <Route path="/shop" render={(props) => {
              return <Shop
                {...props}
                userName={this.state.userName} />
            }} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
