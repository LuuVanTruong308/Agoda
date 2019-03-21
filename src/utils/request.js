import axios from 'axios'
import * as Api from '../config/api'

export default function request(endpoint, methor, body) {
  return axios({
      method: methor,
      url: `${Api.api}/${endpoint}`,
      data: body
  }).catch(err => {
      console.log(err);
  });
}
