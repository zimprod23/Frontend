import {
  L3_PROJECTS_LOADED,
  L3_PROJECTS_LOADING,
  FETCH_SEARCHED_PROJ_SUCCESS,
  FETCH_SEARCHED_PROJ_FAILED,
  FETCH_SEARCHED_PROJ_LOADING,
  FETCH_ALL_PROJ_LOADING,
  FETCH_ALL_PROJ_SUCCSESS,
  FETCH_SEARCHED_PROJ_FAILED_BYID,
  FETCH_SEARCHED_PROJ_LOADING_BYID,
  FETCH_SEARCHED_PROJ_SUCCESS_BYID,
  ADD_PROJ_SUCCESS,
  ADD_PROJ_FAIL,
  ADDING_PROJECT,

} from '../actions/types';

const initialState = {
   headlineProjs: [],
   isLoading: false,
   isLoaded: false,
   spProj:null,
   allProjs:[],
   proj_added:false,
   proj_add_err:false
};

export default function(state = initialState,action){
    switch(action.type){
      case L3_PROJECTS_LOADING: 
      case FETCH_ALL_PROJ_LOADING:
      case FETCH_ALL_PROJ_LOADING:
      case FETCH_SEARCHED_PROJ_LOADING_BYID:
          return{
              ...state,
              isLoaded: false,
              isLoading: true
          }  
      case L3_PROJECTS_LOADED : 
          return{
              ...state,
              isLoaded: true,
              isLoading: false,
              headlineProjs:action.payload
          }
      case FETCH_SEARCHED_PROJ_SUCCESS:
          return{
            ...state,
            isLoaded: true,
            isLoading: false,
            spProj: action.payload
          }
     case FETCH_ALL_PROJ_SUCCSESS:
            return{
              ...state,
              isLoaded: true,
              isLoading: false,
              allProjs: action.payload
            }
    case FETCH_SEARCHED_PROJ_SUCCESS_BYID:
      return{
        ...state,
        isLoaded: true,
        isLoading: false,
        spProj: action.payload
      }
    case ADDING_PROJECT:
      return{
        ...state,
        proj_added:false,
        proj_add_err:false
      }
    case ADD_PROJ_SUCCESS:
      return{
           ...state,
           proj_added:true,
            proj_add_err:false
      }
    case ADD_PROJ_FAIL:
      return{
        proj_added:false,
        proj_add_err:true
      }
        default: 
           return state
    }
}