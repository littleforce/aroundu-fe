import React, { Component } from 'react';
import { Row, Col, Label, Glyphicon } from 'react-bootstrap';
export default class ArticleItem extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <li className="list-group-item">
        <div className="article">
          <Row>
            <Col md={3}>
              <div className="author">
                {this.props.author}
              </div>
            </Col>
            <Col md={9}>
              <div className="time">
                {this.props.time}
              </div>
            </Col>
          </Row>
          <div>
            <h2>
              {this.props.title}
            </h2>
          </div>
          <div>
            {this.props.content}
          </div>
          <Row>
            <Col md={1}>
              <Label bsStyle="success">
                <Glyphicon glyph="heart" />&nbsp;
                {this.props.voteCount}
              </Label>
            </Col>
            <Col md={1}>
              <Label bsStyle="info">
                <Glyphicon glyph="comment" />&nbsp;
                {this.props.commentsCount}
              </Label>

            </Col>
          </Row>

        </div>
      </li>
    );
  }
}
