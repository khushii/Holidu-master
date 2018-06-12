import React, { Component } from "react";
import { connect } from "react-redux";
import TaskGroup from "../TaskGroup/TaskGroup.js";
import {fetchItems} from "../../actions/index.js";
import FontAwesome from "react-fontawesome";
import styles from "./TaskContainer.module.css"

class TaskContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        const { dispatch } = this.props;
        dispatch(fetchItems());
        
    }

    render() {
        const {isFetching, items} = this.props; 
       console.log("Items length" + items);
        return (
            <div className="taskScroll">
            <div><h2 className="header">Popular Destinations</h2></div>
            {isFetching && items.length === 0 && (
                    <h2>
                        Loading...<FontAwesome name="spinner" spin size="3x" />
                    </h2>
                )}
            {!isFetching && items.length > 0  && (
                <div>
                    <TaskGroup tasks={items} />
                     </div>
                )}
            </div>
        );
    }

}

function mapStateToProps(state) {
    const {receivedItems} = state;

    const {
        isFetching,
        lastUpdated,
        items: items,
    } = receivedItems || {
            isFetching: true,
            items: [],
        };

    return {
        items: items,
        isFetching,
        lastUpdated
    };
}

export default connect(mapStateToProps)(TaskContainer);