import {
  L3_PROJECTS_LOADED,
  L3_PROJECTS_LOADING,
  FETCH_SEARCHED_PROJ_SUCCESS,
  FETCH_SEARCHED_PROJ_FAILED,
  FETCH_SEARCHED_PROJ_LOADING,
  FETCH_ALL_PROJ_LOADING,
  FETCH_ALL_PROJ_SUCCSESS,
} from '../actions/types';

const initialState = {
   headlineProjs: [],
   isLoading: false,
   isLoaded: false,
   spProj:null,
   allProjs:[]
};

export default function(state = initialState,action){
    switch(action.type){
      case L3_PROJECTS_LOADING: 
      case FETCH_ALL_PROJ_LOADING:
      case FETCH_ALL_PROJ_LOADING:
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
        default: 
           return state
    }
}