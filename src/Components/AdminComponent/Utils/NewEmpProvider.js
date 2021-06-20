import React,{useState,createContext} from 'react'

export const EmpCtxt = createContext()
function NewEmpProvider(props) {
    const [formData, setformData] = useState({
        first_name:null,
        last_name:null,
        email:null,
        phone:null,
        username:null,
        birthdate:null,
        CIN:null,
        password:null,
        re_password:null,
        admin:1
    })
   const [profileData, setprofileData] = useState({
    image:"",
    CV:"",
    domaine:null,
    XP:null,
    sal:null
   })
    return (
        <EmpCtxt.Provider
        value={{
            NewEmp : [formData, setformData],
            NewPro : [profileData, setprofileData]
        }}
        >
            {props.children}
        </EmpCtxt.Provider>
    )
}

export default NewEmpProvider
