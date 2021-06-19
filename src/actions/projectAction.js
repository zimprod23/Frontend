import {
  L3_PROJECTS_LOADING,
  L3_PROJECTS_LOADED,
  FETCH_SEARCHED_PROJ_SUCCESS,
  FETCH_SEARCHED_PROJ_FAILED,
  FETCH_SEARCHED_PROJ_LOADING,
  FETCH_ALL_PROJ_SUCCSESS,
  FETCH_ALL_PROJ_LOADING,
  FETCH_ALL_PROJ_FAILED,
  FETCH_SEARCHED_PROJ_FAILED_BYID,
  FETCH_SEARCHED_PROJ_LOADING_BYID,
  FETCH_SEARCHED_PROJ_SUCCESS_BYID,
  ADD_PROJ_FAIL,
  ADD_PROJ_SUCCESS,
  ADDING_PROJECT
} from './types';
import axios from 'axios';
import { message } from 'antd';

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

function OrganizeVars(fetchedD2){
    const type = `${fetchedD2.choices.includes("type") && fetchedD2.data.type?`type=${fetchedD2.data.type}&`:``}`
    const secteur = `${fetchedD2.choices.includes("secteur") && fetchedD2.data.secteur?`secteur=${fetchedD2.data.secteur}&`:``}`
    const Device = `${fetchedD2.choices.includes("Device") && fetchedD2.data.Device?`Device=${fetchedD2.data.Device}&`:``}`
    const orderBy = `${fetchedD2.choices.includes("orderby")?`order-by=budget&`:``}`
    return type+secteur+Device+orderBy;
  }


export const getSearchedProjects = (searchVerb,choice=null) => async(dispatch) => {
   dispatch({
       type : FETCH_SEARCHED_PROJ_LOADING
   })

  await axios.get(`http://127.0.0.1:8000/project/?${choice && choice.link!=''?choice.link:``}search=${searchVerb}`).then(res => {
   //   console.log(res.data)
       dispatch({
           type: FETCH_SEARCHED_PROJ_SUCCESS,
           payload: res.data
       })
   }).catch(err => {
       alert(err)
   })
}

export const getProjectById = (id) => async(dispatch) => {
  dispatch({
      type: FETCH_SEARCHED_PROJ_LOADING_BYID
  })
  
   await axios.get(`http://127.0.0.1:8000/project/${id}`).then(res => 
           dispatch({
              type: FETCH_SEARCHED_PROJ_SUCCESS_BYID,
              payload: res.data
           })
        ).catch(err => {
        alert("Something went wrong")
    })
}

export const addProject = (projdata) => async(dispatch) => {
    dispatch({
        type:ADDING_PROJECT
    })
    projdata = JSON.stringify(projdata)
    //alert(projdata)
    await axios.post('http://127.0.0.1:8000/project/add-new-project',projdata,tokenConfig())
    .then(res => {
        dispatch({
            type:ADD_PROJ_SUCCESS
        })
        message.success("Project Added successfully")
    })
    .catch(err => {
        dispatch({
            type:ADD_PROJ_FAIL
        })
        message.error("Couldn't add project")
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