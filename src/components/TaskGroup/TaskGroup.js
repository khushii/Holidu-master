import React, { Component } from "react";
import Task from "../Task/Task.js";


class TaskGroup extends Component {
  render() {
    const {tasks} = this.props;
    console.log("Inside Task Group" + tasks);
    return (
      <div className="someClass row">
          {tasks.map((task, i) => (
              <Task task={task} index={i} key={i}/>
          ))}
      </div>
    );
  }
}


export default TaskGroup;
