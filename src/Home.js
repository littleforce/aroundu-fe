import React, {Component} from 'react';
import { Grid, Col, Row } from 'react-bootstrap';
import Welcome from './Welcome';
export default class Home extends Component {
  render() {
    let welcomeTitle = "欢迎来到AroundU";
    let welcomeAlt = "用心分享好文";
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
