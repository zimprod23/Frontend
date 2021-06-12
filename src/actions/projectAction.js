import {
  L3_PROJECTS_LOADING,
  L3_PROJECTS_LOADED,
  FETCH_SEARCHED_PROJ_SUCCESS,
  FETCH_SEARCHED_PROJ_FAILED,
  FETCH_SEARCHED_PROJ_LOADING,
  FETCH_ALL_PROJ_SUCCSESS,
  FETCH_ALL_PROJ_LOADING,
  FETCH_ALL_PROJ_FAILED
} from './types';
import axios from 'axios';

export const getTopHeadlineProjects = () => async(dispatch) => {
   //Hitting Home endpoint
   dispatch({
       type : L3_PROJECTS_LOADING
   })

   await axios.get("http://127.0.0.1:8000/project/home/").then(res => {
       dispatch({
           type : L3_PROJECTS_LOADED,
           payload: res.data
       })
   }).catch(err => {
       alert("Ooooops something went wrong")
   })
}

export const getallProjects = () =>async(dispatch) => {
     dispatch({
         type: FETCH_ALL_PROJ_LOADING
     })
     await axios.get("http://127.0.0.1:8000/project/all").then(res => {
        dispatch({
            type: FETCH_ALL_PROJ_SUCCSESS,
            payload: res.data,
        })
     }).catch(err => {
         alert("Cant load")
     })
}

export const getSearchedProjects = (searchVerb) => async(dispatch) => {
   dispatch({
       type : FETCH_SEARCHED_PROJ_LOADING
   })
   axios.get(`http://127.0.0.1:8000/project/?search=${searchVerb}`).then(res => {
       dispatch({
           type: FETCH_SEARCHED_PROJ_SUCCESS,
           payload: res.data
       })
   }).catch(err => {
       alert(err)
   })
}