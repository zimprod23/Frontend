import {
    LOGIN_SUCCESS,
    LOGIN_FAILED ,
    LOAD_USER_SUCCESS,
    LOAD_USER_FAILED ,
    USER_LOADING ,
    AUTHENTICATED_FAILED,
 AUTHENTICATED_SUCCESS,
 LOGOUT
} from '../actions/types'


const initialState = {
    access:localStorage.getItem('access'),
    refresh:localStorage.getItem('refresh'),
    isAthenticated:null,
    user:null
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
         default: 
            return state
     }
 }