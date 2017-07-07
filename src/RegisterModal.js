import React, { Component } from 'react';
import { Form, Modal, Button, Col, Row } from 'react-bootstrap';
import FormInlineGroup from './FormInlineGroup';
class RegisterModal extends Component {
  constructor(props) {
    super(props);
    this.state = {showModal: this.props.showModal};
    this.close = this.close.bind(this);
  }
  close() {
    this.props.closeModal('register');
  }
  render() {
    return (
      <Modal bsSize="large" show={this.props.showModal} onHide={this.close} dialogClassName="custom-modal" >
          <Modal.Header closeButton>
            <Modal.Title>注册</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form horizontal>
              <FormInlineGroup
                id="userName"
                type="text"
                label="用户名"
                placeholder="username"
              />
              <FormInlineGroup
                id="password"
                type="text"
                label="密码"
                placeholder="password"
              />
              <FormInlineGroup
                id="rePassword"
                type="text"
                label="重复密码"
                placeholder="password"
              />
              <Row>
                <Col md={2} mdOffset={4}>
                  <Button type="submit">
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
