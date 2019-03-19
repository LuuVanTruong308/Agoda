import * as types from '../constants/content'

export const getList = () => {
    return {
        type: types.GET_LIST
    }
}

export const sortList = (sort) => {
    return {
        type: types.SORT_LIST,
        sort
    }
}