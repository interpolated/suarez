import React from 'react'
import { connect, bindActionCreators } from 'react-redux'
import { formUpdateValue } from '../actions/actions.js'

class textForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('An essay was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <textarea name={this.props.name} value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

function mapStatetoProps

function mapDispatchToProps(dispatch){
  return bindActionCreators({ formUpdateValue }, dispatch);
}

//null goes in because mapStateToProps is the first arg.
export default connect(null, mapDispatchToProps)(textForm);