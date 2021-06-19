import axios from 'axios'
import {
 LOGIN_SUCCESS,
 LOGIN_FAILED ,
 LOAD_USER_SUCCESS,
 LOAD_USER_FAILED ,
 USER_LOADING ,
 AUTHENTICATED_FAILED,
 AUTHENTICATED_SUCCESS,
 LOGOUT
} from './types'


export const checkAuthenticated = () => async(dispatch) => {
   if(localStorage.getItem('access')){
    const config = {
        headers: {
          "Content-type": "application/json",
          "Accept": "application/json"
        },
      };
      const body = JSON.stringify({token : localStorage.getItem('access')})

      await axios.post('http://127.0.0.1:8000/auth/jwt/verify/',body,config)
      .then(res => {
          if(res.data.code !== 'token_not_valid') {
            dispatch({
                type: AUTHENTICATED_SUCCESS
            })
          }else{
            dispatch({
                type: AUTHENTICATED_FAILED
            })
          }
      })
      .catch(err => {
          dispatch({
              type: AUTHENTICATED_FAILED
          })
      })

   }else{
       dispatch({
           type: AUTHENTICATED_FAILED
       })
   }
}

export const login = (userdata) => async(dispatch) => {
    userdata=JSON.stringify(userdata);
    //alert(userdata)
    await axios.post('http://127.0.0.1:8000/auth/jwt/create/',userdata,tokenConfig())
    .then(res => {
         dispatch({
             type : LOGIN_SUCCESS,
             payload:res.data
         })
         dispatch(loadUser())
    })
    .catch(err => {
         dispatch({
             type:LOGIN_FAILED,
         })
    })
}

export const loadUser = () => async(dispatch) => {
    if(localStorage.getItem('access')){
        const config = {
            headers: {
              "Content-type": "application/json",
              "Authorization": `JWT ${localStorage.getItem('access')}`,
              "Accept": "application/json"
            },
          };

          await axios.get('http://127.0.0.1:8000/auth/users/me/',config)
          .then(res => {
               dispatch({
                   type : LOAD_USER_SUCCESS,
                   payload:res.data
               })
               alert(res.data)
          })
          .catch(err => {
               dispatch({
                   type:LOAD_USER_FAILED,
               })
          })

    }else{
        dispatch({
            type:LOAD_USER_FAILED,
        })
    }
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

  export const logout = () => dispatch => {
      dispatch({
          type:LOGOUT
      })
  }