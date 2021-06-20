import {
    EMP_LOADING,
    EMP_LOAD_ERROR,
    EMP_LOADED,
    USER_CREATED_ERROR,
    USER_CREATED_SUCCESS
} from '../actions/types'


const initialState = {
    employee:null,
    loading:false,
    loaded:false,
    load_err:false,
    upload_err : false,
    userCreated:false,
    error_message:""
 };
 
 export default function(state = initialState,action){
     switch(action.type){
          case EMP_LOADING:
              return{
                 ...state,
                 loading:true,
                 loaded:false,
                 load_err:false,
                 upload_err:false,
                 userCreated:false,
                 error_message:""
              }
           
          case EMP_LOADED:
            return{
                ...state,
                 loading:false,
                 loaded:true,
                 load_err:false,
                 employee:action.payload,
                 upload_err:false,
                 userCreated:false,
                 error_message:""
            }
          case USER_CREATED_SUCCESS:
              return{
                 ...state,
                 upload_err:false,
                 userCreated:true,
                 error_message:""
              }
              
          case EMP_LOAD_ERROR:
          case USER_CREATED_ERROR:
                return{
                    ...state,
                    load_err:true,
                    upload_err:true,
                    userCreated:false,
                    error_message:action.payload
                }
         default: 
            return state
     }
 }