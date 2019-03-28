import request from '../../utils/request'
import * as actionContent from '../action/content'

export const getListContent = () => {
  return dispatch => {
    return request('/produc','GET', null).then( res => {
      dispatch(actionContent.getlistHotel(res.data));
    })
  }
}