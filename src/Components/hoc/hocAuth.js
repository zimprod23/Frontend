import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadUser, checkAuthenticated} from "../../actions/authAction";

export default function (ComposedClass, reload, AdminRoute = null) {
  function AuthentificationChech(props) {
    let auth = useSelector((state) => state.auth);
    let user = auth.user;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(checkAuthenticated());
        dispatch(loadUser())
       // alert(auth.isAthenticated)
    }, [])

   // let isAuth = auth.isAuth;
    // const dispatch = useDispatch();
    // useEffect(() => {
    //   dispatch(loadUser())
    //   dispatch(checkAuthenticated())
    // }, [dispatch, props.history]);
    // useEffect(() => {
    //     if(auth.isAthenticated){
    //         if(AdminRoute && user && !user.is_admin){
    //             window.location.replace('/emp')
    //         }
    //     }else{
    //         if (reload) props.history.push("/login");
    //     }
    // }, [auth,user])
    return <ComposedClass {...props} user={user} />;
  }
  return AuthentificationChech;
}
 // .then((result) => {
        //   if (isAuth) {
        //     if (AdminRoute && !user.isAdmin) {
        //       props.history.push("/");
        //     }
        //   }
        // })
        // .catch((err) => {
        //   if (reload) props.history.push("/");
        // });