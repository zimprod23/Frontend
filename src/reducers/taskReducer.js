import {
FETCH_SEARCHED_TASK_FAILED_BYID,
FETCH_SEARCHED_TASK_LOADING_BYID,
FETCH_SEARCHED_TASK_SUCCESS_BYID,
ADDING_TASK,
ADD_TASk_FAIL,
ADD_TASK_SUCCESS,
PROGRESS_TASK_SUCCESS,
PROGRESS_TASk_FAIL
  } from '../actions/types';
  
  const initialState = {
     isLoading: false,
     isLoaded: false,
     task:null,
     taskprogress:null
  };
  
  export default function(state = initialState,action){
      switch(action.type){
        case FETCH_SEARCHED_TASK_LOADING_BYID:
        case ADDING_TASK:
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
      case ADD_TASK_SUCCESS:
        return{
          ...state,
          isLoaded: true,
          isLoading: false,
        }
      case PROGRESS_TASK_SUCCESS:
        return{
          ...state,
          taskprogress:action.payload
        }
          default: 
             return state
      }
  }