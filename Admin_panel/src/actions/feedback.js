import api from '../utils/api';
import {  toast } from 'react-toastify';
import {loadUser } from './auth'
import {
    GET_FEEDBACK,
    FEEDBACK_ERROR,
    SORT_ACTION

} from './types';


// Get all profiles
export const getFeedbacks = (page,limit) => async dispatch => {
  // dispatch({ type: CLEAR_PROFILE });

  try {
    const res = await api.get(`/contact?page=${page}&limit=${limit}`);

    dispatch({
      type: GET_FEEDBACK,
      payload: res.data
    });
  } catch (err) {

    dispatch({
      type: FEEDBACK_ERROR,
      payload:err
      
    });
  }
};




// // Get profile by ID
// export const getUserById = userId => async dispatch => {
  
//   try {
//     const res = await api.get(`/users/${userId}`);
//       // console.log(res)
//     dispatch({
//       type: GET_PROFILE,
//       payload: res.data
//     });
//   } catch (err) {
//     dispatch({
//       type: PROFILE_ERROR,
//       // payload: { msg: err.response.statusText, status: err.response.status }
//     });
//   }
// };








//sortAction

export const SortAction= (fieldname,orderstate) => async dispatch => {
  // alert("called")
  try {
    const res = await api.get(`/users?fieldname=${fieldname}&order=${orderstate}`);
    console.log(res.data)
    dispatch({
      type: SORT_ACTION,
      payload: res.data
    });
  } catch (err) {
    
    dispatch({
      type: FEEDBACK_ERROR,
      // payload: { msg: err.response.statusText, status: err.response.status }
      
    });
  }
};