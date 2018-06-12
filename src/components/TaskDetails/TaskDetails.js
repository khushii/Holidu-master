import React from 'react';
import FontAwesome from 'react-fontawesome';
import styles from "./TaskDetails.module.css"


const TaskDetails = ({taskDetails,headerText}) => (
    <div>
    <img src={headerText} alt="image alt text" className="img-responsive center-block" />
    	 <div className="row">
         <div className="col-xs-8">
         <b>{taskDetails.apartmentSimples[0].apartmentType}</b>
         </div>
         <div className="col-xs-4">
          <b>{"$"+ taskDetails.apartmentSimples[0].minDayPrice}</b>
         </div>
         </div>
         <div className="row">
         <div className="col-xs-8">
         {taskDetails.lowestRegionName}
         </div>
         <div className="col-xs-4">per night</div>
         </div>
         <div className="row">
         <div className="col-xs-6">
         {taskDetails.apartmentSimples[0].rating +" "} {taskDetails.apartmentSimples[0].rating >= 8 ? "Fantastic" : "Nice"}  {taskDetails.apartmentSimples[0].countOfFeedbacks + " reviews"}
         </div>
         </div>
 </div>


     
  );
  
  export default TaskDetails;
  