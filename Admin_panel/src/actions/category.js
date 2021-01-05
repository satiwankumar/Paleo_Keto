
import api from '../utils/api';
import {  toast } from 'react-toastify';

import {
    GET_CATEGORIES,
    CATEGORY_ERROR
} from './types';
export const getCategories = (page,limit) => async dispatch => {
    // dispatch({ type: CLEAR_PROFILE });
  
    try {
      const res = await api.get(`/category?page=${page}&limit=${limit}`);
  
      dispatch({
        type: GET_CATEGORIES,
        payload: res.data
      });
    } catch (err) {
  
      dispatch({
        type: CATEGORY_ERROR,
        payload:err
        
      });
    }
  };
  

