import React, { Fragment, useState } from "react";
import axios from "axios";


const FileUpload = () => {
   
   const [file, setFile] = useState("");
   const [filename, setFilename] = useState("choose file");
   const [uploadedFile, setUploadedFile] = useState({});

   const fileHandler = (e) => {
     
      setFile(e.target.files[0]);
      setFilename(e.target.files[0].name);
   };

   const submitFile = async (e) => {
      e.preventDefault();
      const formData = new FormData();
      formData.append("userImg", file);
      console.log(file);

      try {
         const newImage = await axios.post(
            `${process.env.REACT_APP_BACKEND}/user/tobi/upload`,
            formData,
            {
               headers: {
                  "Content-Type": "multipart/form-data",
               },
            }
         );
         const { fileName, filePath } = newImage.data;
         console.log(newImage.data);
         setUploadedFile({ fileName, filePath });
      } catch (err) {
         console.log(err);
      }
   };

   return (
      <Fragment>
         <form onSubmit={submitFile}>
            <div>
               <label htmlFor="customFile">
                  <p>new Image:</p>
               </label>
               <input type="file" id="customFile" onChange={fileHandler} />
            </div>

            <input type="submit" value="upload new image" />
         </form>

         {uploadedFile ? (
            <div>
               <h3>{uploadedFile.fileName}</h3>
               <img
                  style={{ width: "100%" }}
                  src={uploadedFile.filePath}
                  alt={uploadedFile.fileName}
               />
            </div>
         ) : null}
      </Fragment>
   );
};

export default FileUpload;
