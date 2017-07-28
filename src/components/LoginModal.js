import React, { Component } from 'react';
import { Form, Modal, Button, Row, Col, Alert } from 'react-bootstrap';
import FormInlineGroup from './FormInlineGroup';
import { sendAjax } from '../ajax';
import { swal } from '../swal.js';
class LoginModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: this.props.showModal
    };
    this.close = this.close.bind(this);
    this.toLogin = this.toLogin.bind(this);
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
  toLogin(event) {
    event.preventDefault();

    let username = document.getElementById('login-username').value;
    let password = document.getElementById('login-password').value;
    let data = {
      email: username,
      password
    };
    swal({
      title: "确认登录",
      type: "info",
      showCancelButton: true,
      closeOnConfirm: false,
      showLoaderOnConfirm: true,
    },
    function(){
      sendAjax('login', data).done(function (res) {
        if (res.error === 0) {
          swal({
            title: "登录成功",
            timer: 2000,
            showConfirmButton: false
          },() => {
            this.close();
            this.props.loginCb(res.token);
          });
        } else {
          swal('登录失败');
        }
      }).fail(function () {
        swal('登录失败');
      });
    });
  }
  close() {
    this.props.closeModal('login');
  }
  render() {
    let FormGroupList = this.itemList.map((item) =>
      <FormInlineGroup key={item.id} {...item}/>
    );
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
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
    );
  }
}

export default LoginModal;
