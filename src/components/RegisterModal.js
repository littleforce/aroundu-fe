import React, { Component } from 'react';
import { Form, Modal, Button, Col, Row, Alert } from 'react-bootstrap';
import FormInlineGroup from './FormInlineGroup';
import { registerAjax } from '../ajax';
class RegisterModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: this.props.showModal,
      registerResult: 'not'
    };
    this.close = this.close.bind(this);
    this.toRegister = this.toRegister.bind(this);
    this.renderRegisterResult = this.renderRegisterResult.bind(this);
    this.itemList = [
      {
        id: "register-nickname",
        type: "text",
        label: "昵称",
        placeholder: "nickname"
      },
      {
        id: "register-username",
        type: "text",
        label: "用户名",
        placeholder: "username"
      },
      {
        id: "register-password",
        type: "password",
        label: "密码",
        placeholder: "password"
      },
      {
        id: "register-repassword",
        type: "password",
        label: "重复密码",
        placeholder: "password"
      }
    ];
  }
  close() {
    this.props.closeModal('register');
  }
  toRegister(event) {
    event.preventDefault();
    function registerSuccess() {
      this.setState({registerResult: 'success'});

      setTimeout(function() {
        this.close();
        this.setState({loginResult: 'not'});
      }.bind(this), 3000);
    }
    function registerFail() {
      this.setState({registerResult: 'fail'});
    }
    let nickname = document.getElementById('register-nickname').value;
    let username = document.getElementById('register-username').value;
    let password = document.getElementById('register-password').value;
    let repassword = document.getElementById('register-repassword').value;
    registerAjax(
      {
        name: nickname,
        email: username,
        password: password,
        password_confirmation: repassword
      },
      {
        success: registerSuccess.bind(this),
        fail: registerFail.bind(this)
      });
  }
  renderRegisterResult() {
    let alert;
    switch (this.state.registerResult) {
      case 'success':
        alert = (
          <Alert bsStyle="success">
            <strong>恭喜！</strong>注册成功,稍后请登录
          </Alert>
        );
        break;
      case 'not':
        alert = null;
        break;
      case 'fail':
        alert = (
          <Alert bsStyle="danger">
            <strong>抱歉</strong>注册失败
          </Alert>
        );
        break;
      default:
        break;
    }
    return alert;
  }
  render() {
    let FormGroupList = this.itemList.map((item) =>
      <FormInlineGroup key={item.id} {...item}/>
    );
    let alert = this.renderRegisterResult();
    return (
      <Modal id="register-modal" bsSize="large" show={this.props.showModal} onHide={this.close} dialogClassName="custom-modal" >
          <Modal.Header closeButton>
            <Modal.Title>注册</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form horizontal>
              {FormGroupList}
              <Row>
                <Col md={2} mdOffset={4}>
                  <Button onClick={this.toRegister}>
                    提交
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

export default RegisterModal;
