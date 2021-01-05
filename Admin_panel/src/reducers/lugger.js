import {
   
    GET_LUGGERS,
    Get_LUGGER_DETAIL,
    UPDATE_LUGGER,
    USER_LUGGERSBYID,
    Lugger_ERROR,SORT_ACTION_LUGGER,
    USER_LUGGER_ERROR
  
  } from '../actions/types';
  
  const initialState = {
   Luggers: [],
   loading :false,   
   current_user_luggers:[],
   lugger:null,
   error: {}
  };
  
  export default function (state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
     case SORT_ACTION_LUGGER:
       return{
      
          ...state,
          Luggers: payload,
          loading: false
    
          
       }
      case GET_LUGGERS:
        return {
          ...state,
          Luggers: payload,
          loading: false
        };
      case USER_LUGGERSBYID:
        return{
          ...state,
          current_user_luggers:payload,
          loading:false
        }

        case Get_LUGGER_DETAIL:
            return {
              ...state,
              lugger: payload,
              loading: false
            };
      case  UPDATE_LUGGER:
        return {
          ...state,
          // lugger: payload,
          loading: false
        
      }
    case USER_LUGGER_ERROR:
      return{
        ...state,
        error: payload,
        loading: false,
        current_user_luggers: null,
       
      }
    
    case Lugger_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
        lugger: null,
        luggers:[]
      };
   

      default:
        return state;
    }
  }
  