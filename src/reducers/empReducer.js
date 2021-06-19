import {
    EMP_LOADING,
    EMP_LOAD_ERROR,
    EMP_LOADED
} from '../actions/types'


const initialState = {
    employee:null,
    loading:false,
    loaded:false,
    load_err:false
 };
 
 export default function(state = initialState,action){
     switch(action.type){
          case EMP_LOADING:
              return{
                 ...state,
                 loading:true,
                 loaded:false,
                 load_err:false
              }
           
          case EMP_LOADED:
            return{
                ...state,
                 loading:false,
                 loaded:true,
                 load_err:false,
                 employee:action.payload
            }
       
            case EMP_LOAD_ERROR:
                return{
                    ...state,
                    load_err:true
                }
         default: 
            return state
     }
 }