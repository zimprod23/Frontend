import {
    FETCH_SEARCHED_TASK_FAILED_BYID,
    FETCH_SEARCHED_TASK_LOADING_BYID,
    FETCH_SEARCHED_TASK_SUCCESS_BYID,
    ADDING_TASK,
    ADD_TASk_FAIL,
    ADD_TASK_SUCCESS,
    PROGRESS_TASK_SUCCESS,
    PROGRESS_TASk_FAIL
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
  
  export const addNewTask = (data) => async(dispatch) => {
    dispatch({
      type : ADDING_TASK
    })
    //data = JSON.stringify(data)
    console.log(data)
  await  axios.post(`http://127.0.0.1:8000/task/add-new-task`,data).then(res => {
         dispatch({
           type: ADD_TASK_SUCCESS
         })
         message.success("Task added with success")
    }).catch(err => {
        message.error("Could not add this task")
    })
  }
  
  export const progressTask = (num,id) => async(dispatch) => {
    
    let data = {
      progress : num
    }
    data = JSON.stringify(data)
    await axios.put(`http://127.0.0.1:8000/task/${id}/progress`,data,tokenConfig()).then(res => {
        dispatch({
          type:PROGRESS_TASK_SUCCESS,
          payload:num
        })
        message.success(`task progress is now : ${num}`)
    }).catch(err => {
      message.error("could not progress the task")
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