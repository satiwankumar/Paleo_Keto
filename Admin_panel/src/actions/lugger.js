
import api from '../utils/api';
import {  toast } from 'react-toastify';

import {
    GET_LUGGERS,
    Get_LUGGER_DETAIL,
  Lugger_ERROR,
  UPDATE_LUGGER,
  USER_LUGGERSBYID,
  SORT_ACTION_LUGGER,
  USER_LUGGER_ERROR
} from './types';
import profile from '../reducers/profile';


//all user poseted travel detail
export const UserLuggersByID = (userId) => async dispatch => {
  console.log("action called")
  const body =  JSON.stringify(userId)
  
  
    try {
      const res = await api.post('/lugger/userluggers',{userId});
        // console.log("luggersUSers",res.data)
      dispatch({
        type: USER_LUGGERSBYID,
        payload: res.data
      });
    } catch (err) {
      // console.log("luggersUSers",err.message)

      dispatch({
        type: USER_LUGGER_ERROR,
        // payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  };
  


// export const searchAction = (search) => async dispatch => {

  
//   try {
//     const res = await api.get(`/lugger?fieldname=${fieldname}&order=${orderstate}`);

//     dispatch({
//       type: SORT_ACTION_LUGGER,
//       payload: res.data
//     });
//   } catch (err) {
//     dispatch({
//       type: Lugger_ERROR,
//       // payload: { msg: err.response.statusText, status: err.response.status }
//     });
//   }
// };

//sort lugger by field name
export const SortActionLugger = (fieldname,orderstate) => async dispatch => {

 
  try {
    const res = await api.get(`/lugger?fieldname=${fieldname}&order=${orderstate}`);

    dispatch({
      type: SORT_ACTION_LUGGER,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: Lugger_ERROR,
      // payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Get all Luggers
export const getLuggers = () => async dispatch => {


  try {
    const res = await api.get('/lugger');

    dispatch({
      type: GET_LUGGERS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: Lugger_ERROR,
      // payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};



//update Travek status
export const UpdateluggerStatus = (luggerId,status,history) => async dispatch => {
  // console.log(luggerId)
  const body = JSON.stringify({luggerId})

// console.log(body)
// console.log("lugger status update called")
  try {
    const res = await api.post(`/lugger/status/${status}`,body)
    // console.log(res.data)
    dispatch({
      type: UPDATE_LUGGER,
      payload: res.data
      
    });

      toast.success(`🦄 ${res.data.message}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
      window.jQuery('#approvalmodal, #rejectmodal').modal('hide');
      window.jQuery('.modal-backdrop').remove();
      history.push(`/lugger/${luggerId}`)
  } catch (err) {
    // console.log(err)
    dispatch({
      type: Lugger_ERROR,
      // payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Get Lugger by ID
export const getLuggerById = luggerId => async dispatch => {
  try {
    const res = await api.get(`/lugger/${luggerId}`);
    

    dispatch({
      type: Get_LUGGER_DETAIL,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: Lugger_ERROR,
    //   payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};


//get lugger bv each user ID


