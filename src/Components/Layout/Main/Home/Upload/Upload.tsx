import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { uploadService } from "../../../../../Services/uploadService";
import "./Upload.css";
import welcomeExample from "./welcomeExample.gif";
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import { toastsFunctions } from "../../../../../Services/toastsFunctions";


function Upload(): JSX.Element {
    const [drag, setDrag] = useState<boolean>(false)
    const [upload, setUpload] = useState<boolean>(false)
    const navigate = useNavigate();

    function dragFile() {
        setDrag(true)
      }
      function ExitDragFile() {
        setDrag(false)
      }

      function uploadedFile(e : React.ChangeEvent<HTMLInputElement>){
        if(e.target.files && e.target.files.length > 0){
            let img: string = URL.createObjectURL(e.target.files[0] );
            setUpload(true)
            uploadService.uploadImage(e).then(res => {
                if(res === 400){
                    toastsFunctions.toastError('Please Upload a jpeg or png file')
                } else {
                    navigate("/upload")
                }
                setUpload(false)
            })
            }
        }

    return (
        <div className="Upload">
			<div className="welcome_container">
                <div className="example">
                    <img src={welcomeExample} alt="" />
                </div>
                <div className="welcome_text">
                    <h2>Free Image Background Removal</h2>
                    <p>with 100% automation</p>
                </div>
            </div>

            <div  className={drag? "upload_container_drag upload_container" : "upload_container"}   onDragEnter={dragFile} onDragLeave={ExitDragFile} onDrop={ExitDragFile} >
                    <p className="upload_area_title">The Magic Zone</p>
                    <button>Upload Image</button>
                    <input id={"upload_input"} required onChange={(e: React.ChangeEvent<HTMLInputElement>) => {uploadedFile(e)}} 
                    type="file"  
                      />

                      {upload ? 
                          <Box sx={{ width: '50%' }}>
                          <LinearProgress />
                        </Box>
                      : <></>}
                          
                                <div>
                                </div>


                    <p>or drop a file<br/> <span style={{fontSize: "13px", color: "gray"}}> jpg/png</span></p>
            </div>

    {/* <ToastContainer /> */}
        </div>
    );
}

export default Upload;
