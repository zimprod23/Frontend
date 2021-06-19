import {
    EMP_LOAD_ERROR,
    EMP_LOADED,
    EMP_LOADING
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