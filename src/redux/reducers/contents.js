import * as types from '../constants/content'

var initialState = {
    count: 1,
}

var myReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.GET_LIST:
            return state;
        default: return state
    }
}

export default myReducer