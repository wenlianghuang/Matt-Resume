import React from 'react';
import {useMutation,gql} from '@apollo/client';
import {UPLOADFILE} from '../graphql';
/*const uploadFileMutation = gql`
  mutation uploadFile($file: Upload!){
    uploadFile(file: $file){
      url
    }
  }
`*/
export default function UploadForm(){
    const [uploadFile] = useMutation(UPLOADFILE,{
        onCompleted: data => console.log(data) 
    });
      const handleFileChange = (e) =>{
        const file = e.target.file[0];
        if(!file) return;
        uploadFile({variables: {file}}); 
      };
    
      return(
        <div>
          <h1>Upload File</h1>
          <input type="file" onChange={handleFileChange}/>
        </div>
      )
}