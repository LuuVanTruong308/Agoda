import * as types from '../constants/content'

var listHotel = []

var myListHotel = (state = listHotel, action) => {
    switch(action.type) {
        case types.GET_LIST:
            return state = [...action.listHotel]
        default: return state
    }
}

export default myListHotel