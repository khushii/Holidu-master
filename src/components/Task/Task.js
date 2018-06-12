import React, { Component } from "react";
import TaskDetails from "../TaskDetails/TaskDetails";
import FontAwesome from "react-fontawesome";

class Task extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
    	console.log("photos value " + this.props.task.apartmentSimples[0].photos[0]);
    	const imageValue = this.props.task.apartmentSimples[0].photos[0];
        return (
            <div className='cardHeading col-xs-3'>
            <div className={`panel-body`}>
           <TaskDetails taskDetails={this.props.task} headerText={'https://static.holidu.com/images/'+ `${this.props.task.apartmentSimples[0].providerPhotoDirectory}`+ '/' +`${this.props.task.apartmentSimples[0].apartmentId}` +"/m/"+ imageValue + ".jpg"} />
           
          	</div>
            </div>
        );


    }
        
}

export default Task;
