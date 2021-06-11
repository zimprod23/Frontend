import {
  L3_PROJECTS_LOADING,
  L3_PROJECTS_LOADED
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