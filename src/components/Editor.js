import React, { Component } from 'react';
import Simditor from 'simditor';
import 'simditor';
import $ from 'jquery';
export default class myEditor extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    var editor = new Simditor({
      textarea: $('#editor')
      //optional options
    });
    this.props.setEditor(editor);
  }
  render() {
    return (
      <textarea id="editor" placeholder="写文章" autoFocus></textarea>
    );
  }
}
