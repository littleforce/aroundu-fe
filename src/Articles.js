import React, { Component } from 'react';
import { Grid, Row, Col, ListGroup } from 'react-bootstrap';
import ArticleItem from './ArticleItem';
export default class Articles extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {

  }
  getArticleItems(articles) {
    let articleItems = [];
    for (let item in articles) {
      let itemInfo = articles[item];
      let articleItem = <ArticleItem key={item} {...itemInfo} />
      articleItems.push(articleItem);
    }
    return articleItems;
  }
  render() {
    let articles = {
      '2': {
        author: 'BruceChen',
        time: '1 weeks ago',
        title: 'test',
        content: 'Hello aroundu&nbsp;Hello aroundu Hello aroundu Hello aroundu Hello aroundu Hello aroundu Hello aroundu Hello aroundu Hello aroundu Hello aroundu Hello...',
        voteCount: 0,
        commentsCount: 8
      },
      '3': {
        author: 'BruceChen',
        time: '1 weeks ago',
        title: 'test',
        content: 'Hello aroundu&nbsp;Hello aroundu Hello aroundu Hello aroundu Hello aroundu Hello aroundu Hello aroundu Hello aroundu Hello aroundu Hello aroundu Hello...',
        voteCount: 0,
        commentsCount: 8
      }
    };
    return (
      <div className="articles">
        <Grid>
          <Row>
            <Col md={10} mdOffset={1}>
              <ListGroup>
                {this.getArticleItems(articles)}
              </ListGroup>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
