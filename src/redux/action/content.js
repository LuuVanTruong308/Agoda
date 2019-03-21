import * as types from '../constants/content'

export const getlistHotel = (listHotel) => {
    return {
        type: types.GET_LIST,
        listHotel
    }
}

export const sortList = (sort) => {
    return {
        type: types.SORT_LIST,
        sort
    }
}