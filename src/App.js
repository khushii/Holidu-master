import React, { Component } from "react";
import Select from 'react-select';
import TaskContainer from "./components/TaskContainer/TaskContainer";

class App extends Component {
  
  render() {
    return (
      <div className="container-fluid">
     <TaskContainer label="Pulling data from api"/>
    	  </div>
    );
  }
}

export default App;
