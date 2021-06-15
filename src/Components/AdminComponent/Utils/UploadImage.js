import React, { useState,useCallback,useEffect } from 'react';
import { Upload } from 'antd';
import { CheckOutlined } from '@ant-design/icons'
import ImgCrop from 'antd-img-crop';
import { app } from '../../../base'

export default function UploadPicture(props) {
  const [fileList, setFileList] = useState([
   
  ]);
  const [imagPath, setimagPath] = useState("");

  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

 const UploadFile = async (acceptedFile) => {
     console.log(acceptedFile)
     const storageRef = app.storage().ref();
    const fileRef = storageRef.child(acceptedFile.name);
    await fileRef.put(acceptedFile);
    setFileList([{url: await fileRef.getDownloadURL(),name:"Image.png",uid:"-2"}]);
    //from the direct link
    console.log(await fileRef.getDownloadURL());
    //from the state
      setimagPath(await fileRef.getDownloadURL());
      console.log(imagPath)
   
  };

useEffect(() => {
  console.log(imagPath);
  props.onImgChange(imagPath)
}, [imagPath])

  const onPreview = async file => {
    let src = file.url;
    if (!src) {
      src = await new Promise(resolve => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow.document.write(image.outerHTML);
  };

  return (
    <div>
      {imagPath.length > 0 ? <CheckOutlined color="green"/>:""}
      <ImgCrop rotate>
      <Upload
        maxCount={1}
        action={UploadFile}
        listType="picture-card"
        fileList={fileList}
        onChange={onChange}
        onPreview={onPreview}
      >
        {fileList.length > 1 ? '+ Upload':'Change'}
      </Upload>
    </ImgCrop>
    </div>
  );
};