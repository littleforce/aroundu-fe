import React, {Component} from 'react';
import { Grid, Col, Row } from 'react-bootstrap';
import Welcome from './Welcome';
export default class Home extends Component {
  render() {
    let welcomeTitle = "文章列表";
    let welcomeAlt = "查看文章";
    return (
      <div className="home">
        <Grid>
          <Row className="show-grid">
            <Col md={10} mdOffset={1} >
              <Welcome title={welcomeTitle} alt={welcomeAlt} />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
