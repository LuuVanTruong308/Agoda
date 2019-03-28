import * as types from '../constants/content'

export const getlistHotel = (playload) => {
    return {
        type: types.GET_LIST,
        playload
    }
}

export const sortList = (sort) => {
    return {
        type: types.SORT_LIST,
        sort
    }
}