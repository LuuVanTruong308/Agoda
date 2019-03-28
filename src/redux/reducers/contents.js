import * as types from '../constants/content'

var playload = []
var map = {}

var myListHotel = (state = { playload, map }, action) => {
    switch(action.type) {
        case types.GET_LIST:
            state.playload = [...action.playload.ResultList]
            return state = Object.assign({}, state)
        default: return state
    }
}

export default myListHotel