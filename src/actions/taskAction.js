import {
    FETCH_SEARCHED_TASK_FAILED_BYID,
    FETCH_SEARCHED_TASK_LOADING_BYID,
    FETCH_SEARCHED_TASK_SUCCESS_BYID
  } from './types';
  import axios from 'axios';
  import { message } from 'antd';
    
  export const getTaskById = (id) => async(dispatch) => {
    dispatch({
        type: FETCH_SEARCHED_TASK_LOADING_BYID
    })
 
    
     await axios.get(`http://127.0.0.1:8000/task/${id}`).then(res => 
             dispatch({
                type: FETCH_SEARCHED_TASK_SUCCESS_BYID,
                payload: res.data
             })
          ).catch(err => {
           message.error("Oooops something went wrong")
      })
  }
  
  
  export const tokenConfig = () => {
      //const token = localStorage.getItem("token");
      //const token = getState().auth.token;
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      /*if (token) {
        config.headers["x-auth-token"] = token;
      }*/
      return config;
    };