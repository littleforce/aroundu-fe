import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { toggleLogin, LOGIN_STATE } from '../actions'
import Home from '../components/Home';
import Articles from '../components/Articles';
import Publish from '../components/Publish';
import Header from '../components/Header';
import LoginModal from '../components/LoginModal';
import RegisterModal from '../components/RegisterModal';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasLogin: false,
      showLogin: false,
      showRegister: false
    };
    this.handleClickHeader = this.handleClickHeader.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.saveToken = this.saveToken.bind(this);
    if (localStorage.getItem('arounduToken') !== null) {
      this.saveToken(localStorage.getItem('arounduToken'));
    }
  }
  handleClickHeader(event) {
    event.preventDefault();
    let id = event.target.id;
    const { dispatch } = this.props;
    switch(id) {
      case 'loginEntry':
        this.setState({showLogin: true});
        break;
      case 'registerEntry':
        this.setState({showRegister: true});
        break;
      case 'logoutEntry':
        dispatch(toggleLogin());
        localStorage.removeItem('arounduToken');
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
  saveToken(token) {
    const { dispatch } = this.props;
    dispatch(toggleLogin(token));
  }
  render() {
    const { hasLogin} = this.props;
    return (
      <Router>
        <div>
          <Header
            hasLogin={hasLogin}
            handleClick={this.handleClickHeader}
          />
          <LoginModal showModal={this.state.showLogin} closeModal={this.closeModal} loginCb={this.saveToken}/>
          <RegisterModal showModal={this.state.showRegister}  closeModal={this.closeModal}/>
          <Route exact path="/" component={Home} />
          <Route path="/Home" component={Home} />
          <Route path="/articles" component={Articles} />
          <Route path="/publish" component={Publish} />
        </div>
      </Router>
    );
  }
}

function select(state) {
  return {
    hasLogin: !(state.loginToken === LOGIN_STATE.IS_LOGOUT)
  };
}
export default connect(select)(App);
