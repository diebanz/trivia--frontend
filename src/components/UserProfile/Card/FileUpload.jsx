import { useState } from "react";
import axios from "axios";

import { useAuth } from "../../../context/loginContext";


const FileUpload = () => {
   const [currentUser] = useAuth();
   const [file, setFile] = useState("");
   // const [filename, setFilename] = useState("choose file");
   // const [uploadedFile, setUploadedFile] = useState({});

   const fileHandler = (e) => {

      setFile(e.target.files[0]);
      // setFilename(e.target.files[0].name);
   };

   const submitFile = async (e) => {
      e.preventDefault();
      const formData = new FormData();
      formData.append("userImg", file);
      console.log('appended file:',file);
      console.log('form data:',formData);

      try {
         const newImage = await axios.post(
            `${process.env.REACT_APP_BACKEND}/user/${currentUser}/upload`,
            formData,
            {
               headers: {
                  "Content-Type": "multipart/form-data",
               },
            }
         );
         if(newImage.data.message !== 'profile image uploaded') console.log('not uploaded')
         // const { fileName, filePath } = newImage.data;
         // console.log(newImage.data);
         // setUploadedFile({ fileName, filePath });
      } catch (err) {
         console.log(err);
      }
   };

   return (
      <>
         <h2>{'Change your Image here'}</h2>
         <form onSubmit={submitFile}>
            <label htmlFor="customFile">
               
               <input type="file" id="customFile" onChange={fileHandler} />
            </label>
            <input type="submit" value="upload new image" />
         </form>

         {/* {uploadedFile ? (
            <div>
               <h3>{uploadedFile.fileName}</h3>
               <img
                  style={{ width: "100%" }}
                  src={uploadedFile.filePath}
                  alt={uploadedFile.fileName}
               />
            </div>
         ) : null} */}
      </>
   );
};

export default FileUpload;
