import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { Field, FieldArray, reduxForm } from 'redux-form'
import ArrayForm from './types_form.js'


export default class ProjectEditor extends Component {




  render() {
    return (
      <Row className = 'project_editor'>
        <Col xs="4" id="project">
          <ArrayForm name="types"/>
        </Col>
        <Col xs="4" id="buildings">
          buildings
        </Col>
        <Col xs="4" id="sections">
         
        </Col>
      </Row>
    );
  }




}

