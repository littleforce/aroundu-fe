import React, { Component } from 'react';
import { Form, Modal, Button, Row, Col } from 'react-bootstrap';
import FormInlineGroup from './FormInlineGroup';
import { loginAjax } from './ajax';
class LoginModal extends Component {
  constructor(props) {
    super(props);
    this.state = {showModal: this.props.showModal};
    this.close = this.close.bind(this);
    this.itemList = [
      {
        id: "userName",
        type: "text",
        label:"用户名",
        placeholder: "username"
      },
      {
        id: "password",
        type: "password",
        label:"密码",
        placeholder: "username"
      }
    ];
  }
  toLogin() {
    loginAjax('chy', '123');
  }
  close() {
    this.props.closeModal('login');
  }
  render() {
    let FormGroupList = this.itemList.map((item) =>
      <FormInlineGroup key={item.id} {...item}/>
    );
    return (
      <Modal bsSize="large" show={this.props.showModal} onHide={this.close} dialogClassName="custom-modal" >
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