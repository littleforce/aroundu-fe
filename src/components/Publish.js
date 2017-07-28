import React, { Component } from 'react';
import { Row, Col, Button, FormGroup, FormControl } from 'react-bootstrap';
import MyEditor from './Editor';
import { swal } from '../swal.js';
import { createArticleAjax, checkToken } from '../ajax.js'
import 'sweetalert/dist/sweetalert.css';
export default class Publish extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleValue: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.setEditor = this.setEditor.bind(this);
  }
  componentDidMount() {
    if (!checkToken()) {
      swal({
        title: '请先登录',
        type: 'warning'
      });
    }
  }
  handleClick(e) {
    e.preventDefault();
    let article = {
      location: {},
      type: 0,
      title: '',
      content: ''
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
    } else {
      let content = this.editor.getValue();
      if (content === '') {
        swal({
          title: '请输入文章内容',
          type: 'warning'
        }, function() {
          setTimeout(function() {
            document.getElementById('editor').focus();
          }.bind(this), 1);
        }.bind(this));
      } else {
        article.title = this.state.titleValue;
        article.content = this.editor.getValue();

        createArticleAjax(
          article,
          () => {swal({ title: '提交成功',type: 'success'});},
          () => {swal({ title: '提交失败',type: 'error'});}
        );
      }


    }
  }
  setEditor(editor) {
    this.editor = editor;
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
            <MyEditor main="123" setEditor={this.setEditor} />
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
