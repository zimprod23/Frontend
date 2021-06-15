import { DisconnectOutlined, PaperClipOutlined,CheckOutlined } from '@ant-design/icons'
import React ,{useCallback,useState,useEffect } from 'react'
import {useDropzone} from 'react-dropzone'
import { app } from "../../../base";

function UploadPic(props) {
  const [File, setFile] = useState("");
  const onDrop = useCallback(
    async (acceptedFile) => {
      console.log(acceptedFile)
      const storageRef = app.storage().ref();
      const fileRef = storageRef.child(acceptedFile[0].name);
      await fileRef.put(acceptedFile[0]);
      setFile(await fileRef.getDownloadURL());
      console.log(await fileRef.getDownloadURL());
      console.log(File)
    },
    [File]
  );
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  useEffect(() => {
     props.onCvChange(File)
  }, [File])

  return (
    <div {...getRootProps()}>
      {File.length > 0 ? <CheckOutlined color="green"/>:""}
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
/*
function TestFirebase(props) {
  const [Images, setImages] = useState([]);

  const onDrop = useCallback(
    async (acceptedFile) => {
      const storageRef = app.storage().ref();
      const fileRef = storageRef.child(acceptedFile[0].name);
      await fileRef.put(acceptedFile[0]);
      setImages([...Images, await fileRef.getDownloadURL()]);
      console.log(await fileRef.getDownloadURL());
    },
    [Images]
  );
  console.log(Images);

  const onDelete = (image) => {
    const currentIndex = Images.indexOf(image);

    let newImages = [...Images];
    newImages.splice(currentIndex, 1);

    setImages(newImages);
    props.refreshFunction(newImages);
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <Dropzone onDrop={onDrop} multiple={false} maxSize={800000000}>
        {({ getRootProps, getInputProps }) => (
          <div
            style={{
              width: "300px",
              height: "240px",
              border: "1px solid lightgray",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            {...getRootProps()}
          >
         
            <input {...getInputProps()} />
            +
          </div>
        )}
      </Dropzone>

      <div
        style={{
          display: "flex",
          width: "350px",
          height: "240px",
          overflowX: "scroll",
        }}
      >
        {Images.map((image, index) => (
          <div onClick={() => onDelete(image)}>
            <img
              style={{ minWidth: "300px", width: "300px", height: "240px" }}
              src={image}
              alt={`productImg-${index}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}


export default TestFirebase
*/