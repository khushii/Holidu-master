import types from "../constants/index";

export function requestItems() {
    return {
        type: types.REQUESTS_ITEMS,
        items: []
    };
}

export function receiveItems(json) {
    return {
        type: types.RECEIVE_ITEMS,
        items: json,
        receivedAt: Date.now()
    };
}


export function fetchItems() {
    return (dispatch, getState) => {
        const {taskFilter} = getState()
        dispatch(requestItems())
        let url = new URL("https://www.holidu.de/rest/search?regionId=22458")
        return fetch(url)
            .then(handleErrors)
            .then(response => response.json())
            .then(json => dispatch(receiveItems(json)))
            .catch(function (error) {
                showApplicationError(error)
            });
    };
}

export function showApplicationError(json) {
    return{
        type: types.SHOW_APPLICATION_ERROR,
        errorMessage: json
    }
}

export function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}