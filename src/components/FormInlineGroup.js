import React from 'react';
import { Col, FormGroup, ControlLabel, FormControl, HelpBlock} from 'react-bootstrap';
function FormInlineGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <Col componentClass={ControlLabel} md={2} mdOffset={2}>
        {label}
      </Col>
      <Col md={6}>
        <FormControl {...props} />
        {help && <HelpBlock>{help}</HelpBlock>}
      </Col>
    </FormGroup>
  );
}
export default FormInlineGroup;
