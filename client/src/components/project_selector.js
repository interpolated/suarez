import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import ProjectDropdown from './dropdown'

export default class ProjectSelector extends Component {
  render() {
    console.log('what')
    return (
      <div>
        <ProjectDropdown options={['one','two','tree']}></ProjectDropdown>
      </div>
    );
  }
}
