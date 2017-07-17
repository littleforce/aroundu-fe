import React, { Component } from 'react';
import { Form, Modal, Button, Row, Col, Alert } from 'react-bootstrap';
import FormInlineGroup from './FormInlineGroup';
import { loginAjax } from '../ajax';
class LoginModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: this.props.showModal,
      loginResult: 'not'
    };
    this.close = this.close.bind(this);
    this.toLogin = this.toLogin.bind(this);
    this.renderLoginResult = this.renderLoginResult.bind(this);
    this.itemList = [
      {
        id: "login-username",
        type: "text",
        label:"用户名",
        placeholder: "email"
      },
      {
        id: "login-password",
        type: "password",
        label:"密码",
        placeholder: "password"
      }
    ];
  }
  renderLoginResult() {
    let alert;
    switch (this.state.loginResult) {
      case 'success':
        alert = (
          <Alert bsStyle="success">
            <strong>恭喜！</strong>登录成功。即将自动跳转
          </Alert>
        );
        break;
      case 'not':
        alert = null;
        break;
      case 'fail':
        alert = (
          <Alert bsStyle="danger">
            <strong>抱歉</strong>账户或密码错误
          </Alert>
        );
        break;
      default:
        break;
    }
    return alert;
  }
  toLogin(event) {
    event.preventDefault();
    function loginSuccess(token) {
      this.setState({loginResult: 'success'});

      setTimeout(function() {
        this.close();
        this.props.loginCb(token);
        this.setState({loginResult: 'not'});
      }.bind(this), 3000);
    }
    function loginFail() {
      this.setState({loginResult: 'fail'});
    }

    let username = document.getElementById('login-username').value;
    let password = document.getElementById('login-password').value;
    loginAjax(
      {
        email: username,
        password
      },
      {
        success: loginSuccess.bind(this),
        fail: loginFail.bind(this)
      }
    );
  }
  close() {
    this.props.closeModal('login');
  }
  render() {
    let FormGroupList = this.itemList.map((item) =>
      <FormInlineGroup key={item.id} {...item}/>
    );
    let alert = this.renderLoginResult();
    return (
      <Modal id="login-modal" bsSize="large" show={this.props.showModal} onHide={this.close} dialogClassName="custom-modal" >
          <Modal.Header closeButton>
            <Modal.Title>登录</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form horizontal>
              {FormGroupList}
              <Row>
                <Col md={2} mdOffset={4}>
                  <Button onClick={this.toLogin}>
                    登录
                  </Button>
                </Col>
              </Row>
            </Form>
            {alert}
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
    );
  }
}

export default LoginModal;
