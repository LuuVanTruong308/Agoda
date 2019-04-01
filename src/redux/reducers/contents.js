import * as types from '../constants/content'

let playload = []
let map = {}
let listFilter = {}
let listSort = {}

var myListHotel = (state = { playload, map , listFilter, listSort }, action) => {
    switch(action.type) {
        case types.GET_LIST:
            state.playload = [...action.playload.ResultList]
            state.listFilter = Object.assign({}, action.playload.FilterList)
            state.listSort = Object.assign({}, action.playload.SortingBarViewModel)
            return state = Object.assign({}, state)
        default: return state
    }
}

export default myListHotel