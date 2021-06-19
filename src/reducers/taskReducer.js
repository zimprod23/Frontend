import {
FETCH_SEARCHED_TASK_FAILED_BYID,
FETCH_SEARCHED_TASK_LOADING_BYID,
FETCH_SEARCHED_TASK_SUCCESS_BYID
  } from '../actions/types';
  
  const initialState = {
     isLoading: false,
     isLoaded: false,
     task:null,
  };
  
  export default function(state = initialState,action){
      switch(action.type){
        case FETCH_SEARCHED_TASK_LOADING_BYID:
            return{
                ...state,
                isLoaded: false,
                isLoading: true
            }  
      case FETCH_SEARCHED_TASK_SUCCESS_BYID:
        return{
          ...state,
          isLoaded: true,
          isLoading: false,
          task: action.payload
        }
    
          default: 
             return state
      }
  }