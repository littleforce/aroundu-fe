import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Welcome from './Welcome';
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';
import { Grid, Row, Col } from 'react-bootstrap';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
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
    let welcomeTitle = "欢迎来到AroundU";
    let welcomeAlt = "用心分享好文";
    return (
      <div>
        <Header
          hasLogin={this.state.hasLogin}
          handleClick={this.handleClickHeader}
        />
        <LoginModal showModal={this.state.showLogin} closeModal={this.closeModal}/>
        <RegisterModal showModal={this.state.showRegister}  closeModal={this.closeModal}/>
        <div className="content">
          <Grid>
            <Row className="show-grid">
              <Col md={10} mdOffset={1} >
                <Welcome title={welcomeTitle} alt={welcomeAlt} />
              </Col>
            </Row>
          </Grid>
        </div>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
