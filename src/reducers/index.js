import { combineReducers } from "redux";
import types from "../constants/index";



function receivedItems(
    state = {
        isFetching: false,
        items: [],
        receivedAt: ''
    },
    action
) {
    switch (action.type) {
        case types.REQUESTS_ITEMS:
            return Object.assign({}, state, {
                isFetching: true,
                items: []
            });
        case types.RECEIVE_ITEMS:
            return Object.assign({}, state, {
                isFetching: false,
                items: action.items.apartments,
                receivedAt: action.receivedAt
            });

       
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    receivedItems
});

export default rootReducer;
