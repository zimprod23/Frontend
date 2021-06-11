import {
  L3_PROJECTS_LOADED,
  L3_PROJECTS_LOADING
} from '../actions/types';

const initialState = {
   headlineProjs: [],
   isLoading: false,
   isLoaded: false,
};

export default function(state = initialState,action){
    switch(action.type){
      case L3_PROJECTS_LOADING: 
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
        default: 
           return state
    }
}