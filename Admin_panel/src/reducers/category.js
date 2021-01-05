import {GET_CATEGORIES,CATEGORY_ERROR} from '../actions/types'

const initialState = {
    Categories :[],
    loading:true
}

export default function(state = initialState, action){
    const {type,payload }=action

    switch(type){
        case GET_CATEGORIES:
            return {
                ...state,
                loading:false,
                Categories:payload,
            }
        case CATEGORY_ERROR:
            return{
                ...state,
                loading:false,
                Categories:[],
            }
        default:
                return state;
         }   
}