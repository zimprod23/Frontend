import React,{useState,createContext} from 'react'

export const EmpCtxt = createContext()
function NewEmpProvider(props) {
    const [formData, setformData] = useState({
        image:null,
        fname:null,
        lname:null,
        email:null,
        phone:null,
        bday:null,
        cin:null,
        resume:null,
        type:null
    })
   
    return (
        <EmpCtxt.Provider
        value={{
            NewEmp : [formData, setformData]
        }}
        >
            {props.children}
        </EmpCtxt.Provider>
    )
}

export default NewEmpProvider
