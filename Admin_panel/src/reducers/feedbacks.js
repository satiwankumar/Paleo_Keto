import {
    GET_FEEDBACK,
    FEEDBACK_ERROR,
    SORT_ACTION,
  
  } from '../actions/types';
  
  
  
  const initialState = {
    
    Feedbacks: [],
    loading: true,
    error: {}
  };
  
  export default function (state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
    
      case SORT_ACTION:{
        return {
          ...state,
          Feedbacks: payload,
          loading: false
        };
      }
      case GET_FEEDBACK:
        return {
          ...state,
          Feedbacks: payload,
          loading: false
        };
      case FEEDBACK_ERROR:{
          return{
              ...state,
              Feedbacks:payload,
              loading:false
          }
      }
     
 
      default:
        return state;
    }
  }
  