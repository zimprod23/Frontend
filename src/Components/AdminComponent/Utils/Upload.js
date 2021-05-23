import { DisconnectOutlined, PaperClipOutlined } from '@ant-design/icons'
import React ,{useCallback} from 'react'
import {useDropzone} from 'react-dropzone'

function UploadPic() {
  const onDrop = useCallback(acceptedFiles => {
    // Do something with the files
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? (
                    <div  style={{
                      padding : "35px",backgroundColor :"#eee",
                      display: "flex",alignContent:"center",
                      justifyContent:"center",opacity:"0.5"
                      }}>
                    <PaperClipOutlined size="large" />
                    </div>
                  ) : (
                    <div  style={{padding : "35px",backgroundColor :"#eee",display: "flex",alignContent:"center",justifyContent:"center"}}>
                    <DisconnectOutlined size="large"/>
                   </div>
                  )}
    </div>
  )
}

export default UploadPic
