import React,{useState,createContext} from 'react'

export const EmpCtxt = createContext()
function NewEmpProvider(props) {
    const [formData, setformData] = useState({
        fname:null,
        lname:null,
        email:null,
        phone:null,
        bday:null,
        cin:null,
        pass1:null,
        pass2:null
    })
   const [profileData, setprofileData] = useState({
    image:null,
    resume:null,
    type:null,
    xp:null
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
