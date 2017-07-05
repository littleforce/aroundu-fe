import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Welcome from './Welcome';
import { Grid, Row, Col } from 'react-bootstrap';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
function App() {
  let welcomeTitle = "欢迎来到AroundU";
  let welcomeAlt = "用心分享好文";
  return (
    <div>
      <Header hasLogin={true} />
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
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
