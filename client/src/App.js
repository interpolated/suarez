import React, { Component } from 'react';
import './App.css';
import { createStore } from 'redux'
import ProjectSelector from './components/project_selector'
import ProjectDropdown from './components/dropdown'
import rootReducer from './reducers/index'
import ProjectEditor from './components/project_editor'
import {MapSection} from './components/map_section'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ProjectSelector className="we"/>
          <MapSection/>
        <ProjectEditor/>
      </div>
    );
  }
}

export default App;
