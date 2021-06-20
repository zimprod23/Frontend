import {
    EMP_LOAD_ERROR,
    EMP_LOADED,
    EMP_LOADING,
    USER_CREATED_ERROR,
    USER_CREATED_SUCCESS
} from './types'
import axios from 'axios'

export const load_emp_by_username = (Username) => async(dispatch) => {
    dispatch({
        type : EMP_LOADING
    })
    await axios.get(`http://127.0.0.1:8000/profile/${Username}`).then(res => {
        dispatch({
            type: EMP_LOADED,
            payload: res.data
        })
    }).catch(err => {
        dispatch({
            type:EMP_LOAD_ERROR
        })
    })
}

export const create_user_prophile = (usr,pro) => async(dispatch) => {
    
    console.log(usr)
    console.log(pro)

    await axios.post(`http://127.0.0.1:8000/auth/users/`,usr)
    .then(res => {
         axios.post(`http://127.0.0.1:8000/profile/${usr.username}/add-profile`,pro)
           .then(resp => {
               dispatch({
                   type : USER_CREATED_SUCCESS
               })
           }).catch(erro => {
              dispatch({
                  type:USER_CREATED_ERROR,
                  payload:"Couldnt create prophile"
              })
           })
    }).catch(err=> {
        dispatch({
            type:USER_CREATED_ERROR,
            payload:"Couldnt create user"
        })
    })

}