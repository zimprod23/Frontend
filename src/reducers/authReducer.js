import {
    LOGIN_SUCCESS,
    LOGIN_FAILED ,
    LOAD_USER_SUCCESS,
    LOAD_USER_FAILED ,
    USER_LOADING ,
    AUTHENTICATED_FAILED,
 AUTHENTICATED_SUCCESS,
 LOGOUT,
 PASSWORD_RESET_SUCCESS,
  PASSWORD_RESET_FAIL ,
 PASSWORD_RESET_CONFIRM_SUCCESS ,
 PASSWORD_RESET_CONFIRM_FAIL,
 ACTIVATION_FAIL,
 ACTIVATION_SUCCESS
} from '../actions/types'


const initialState = {
    access:localStorage.getItem('access'),
    refresh:localStorage.getItem('refresh'),
    isAthenticated:null,
    user:null,
    account_activated_err:null
 };
 
 export default function(state = initialState,action){
     switch(action.type){

         case AUTHENTICATED_SUCCESS : 
             return{
                 ...state,
                 isAthenticated:true
             } 

         case LOGIN_SUCCESS:
             localStorage.setItem('access',action.payload.access)
             localStorage.setItem('refresh',action.payload.refresh)
             return{
                ...state,
                isAthenticated:true,
                access : action.payload.access,
                refresh:action.payload.refresh
             }
         case LOGIN_FAILED:
         case LOGOUT:
             localStorage.removeItem('access')
             localStorage.removeItem("refresh")
             return{
                ...state,
                access:null,
                refresh:null,
                isAthenticated:null,
                user:null
             }
        case LOAD_USER_SUCCESS:
            return{
                ...state,
                user:action.payload
            }
        case AUTHENTICATED_FAILED : 
            return{
                ...state,
                isAthenticated:false
            } 
        case LOAD_USER_FAILED:
            return{
                ...state,
                user:null    
            }
        case PASSWORD_RESET_FAIL:
        case PASSWORD_RESET_SUCCESS:
        case PASSWORD_RESET_CONFIRM_FAIL:
        case PASSWORD_RESET_CONFIRM_SUCCESS:
            return{
                ...state
            }
        case ACTIVATION_FAIL:
            return{
                ...state,
                account_activated_err:true
            }
        case ACTIVATION_FAIL:
            return{
                ...state,
                account_activated_err:false
            }
         default: 
            return state
     }
 }