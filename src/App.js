import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './Home';
import Articles from './Articles';
import Header from './Header';
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';

import './index.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasLogin: false,
      showLogin: false,
      showRegister: false
    };
    this.handleClickHeader = this.handleClickHeader.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  handleClickHeader(event) {
    event.preventDefault();
    let id = event.target.id;
    switch(id) {
      case 'loginEntry':
        this.setState({showLogin: true});
        break;
      case 'registerEntry':
        this.setState({showRegister: true});
        break;
      default:
        break;
    }
  }
  closeModal(t) {
    switch(t) {
      case 'login':
        this.setState({showLogin: false})
        break;
      case 'register':
        this.setState({showRegister: false})
        break;
      default:
        break;
    }
  }
  render() {
    return (
      <Router>
        <div>
          <Header
            hasLogin={this.state.hasLogin}
            handleClick={this.handleClickHeader}
          />
          <LoginModal showModal={this.state.showLogin} closeModal={this.closeModal}/>
          <RegisterModal showModal={this.state.showRegister}  closeModal={this.closeModal}/>
          <Route exact path="/" component={Home} />
          <Route exact path="/Home" component={Home} />
          <Route path="/articles" component={Articles} />
        </div>
      </Router>
    );
  }
}
