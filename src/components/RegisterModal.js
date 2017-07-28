import React, { Component } from 'react';
import { Form, Modal, Button, Col, Row, Alert } from 'react-bootstrap';
import FormInlineGroup from './FormInlineGroup';
import { sendAjax } from '../ajax';
import { swal } from '../swal.js';
class RegisterModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: this.props.showModal,
      registerResult: 'not'
    };
    this.close = this.close.bind(this);
    this.toRegister = this.toRegister.bind(this);
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
    let nickname = document.getElementById('register-nickname').value;
    let username = document.getElementById('register-username').value;
    let password = document.getElementById('register-password').value;
    let repassword = document.getElementById('register-repassword').value;
    let data = {
      name: nickname,
      email: username,
      password: password,
      password_confirmation: repassword
    };
    swal({
      title: "确认注册",
      type: "info",
      showCancelButton: true,
      closeOnConfirm: false,
      showLoaderOnConfirm: true,
    },
    function(){
      sendAjax('register', data).done(function (res) {
        if (res.error === 0) {
          swal('注册成功');
          this.close();
        } else {
          swal('注册失败');
        }
      }).fail(function () {
        swal('注册失败');
      });
    });
  }
  render() {
    let FormGroupList = this.itemList.map((item) =>
      <FormInlineGroup key={item.id} {...item}/>
    );
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
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
    );
  }
}

export default RegisterModal;
