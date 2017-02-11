import React from 'react';
import { Provider } from 'react-redux'; 
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row, Col, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { setActiveProject,getActiveProject } from '../actions/actions'

class ProjectDropdown extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  handler(e){
    this.props.setActiveProject(e.target.innerHTML)
    this.props.getActiveProject
  }


  render() {
    console.log(this.props)
    
    return (
      <Row className="header">
        <Col>
          <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle caret>
              {this.props.activeProject.id}
            </DropdownToggle>
            <DropdownMenu>
              {this.props.options.map(option=><DropdownItem onClick={this.handler.bind(this)}>{option}</DropdownItem>)}
            </DropdownMenu>
          </ButtonDropdown>
        </Col>
      </Row>
    );
  }
}

function mapStateToProps( {activeProject} ){
  return { activeProject }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ setActiveProject, getActiveProject }, dispatch);
}


//null goes in because mapStateToProps is the first arg.
export default connect(mapStateToProps, mapDispatchToProps)(ProjectDropdown);


