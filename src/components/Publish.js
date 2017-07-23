import React, { Component } from 'react';
import { Row, Col, Button, FormGroup, FormControl } from 'react-bootstrap';
import MyEditor from './Editor';
import { swal } from '../swal.js';
import 'sweetalert/dist/sweetalert.css';
export default class Publish extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleValue: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    e.preventDefault();
    let article = {
      location: {},
      type: 0
    };
    if (this.state.titleValue === '') {
      //这里如果不加setTimeout，就会在点击alert上的ok同时触发，而不是在alert关闭后触发
      swal({
        title: '请输入题目',
        type: 'warning'
      }, function() {
        setTimeout(function() {
          this.titleInput.focus();
        }.bind(this), 1);
      }.bind(this));
    }
  }
  handleChange(e) {
    this.setState({ titleValue: e.target.value });
  }
  render() {
    return (
      <Row>
        <Col md={10} mdOffset={1}>
          <form>
            <FormGroup>
              <FormControl
                type="text"
                placeholder="Title"
                inputRef={(input) => { this.titleInput = input; }}
                value={this.state.titleValue}
                onChange={this.handleChange}
              />
            </FormGroup>
            <MyEditor />
            <br/>
            <Button block onClick={this.handleClick}>
              上传文章
            </Button>
          </form>

        </Col>
      </Row>
    );
  }
}
