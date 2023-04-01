import "./UploadRoute.css";
import { useEffect, useState } from "react";
import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider";
import { useNavigate } from "react-router-dom";
// import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
// import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
// import { AiFillHome } from '@react-icons/ai';
import { FiDownload } from '@react-icons/all-files/fi/FiDownload';
import { AiFillHome } from '@react-icons/all-files/ai/AiFillHome';

function UploadRoute(): JSX.Element {
    const [originalSrc, setOriginalSrc] = useState<string | null>("");
    const [removedSrc, setRemovedSrc] = useState<string | null>("");
    const navigate = useNavigate();

    useEffect(() => {
        const original = window.localStorage.getItem("originalSrc");
        const removed = window.localStorage.getItem("removedSrc");
        if(original && removed) {
            setOriginalSrc(original);
            setRemovedSrc(removed);
        }

    }, [])

    return (
        // <div className="UploadRoute_container">
        <div className="UploadRoute">
			<div className="image">
                {/* <img src="https://i.natgeofe.com/n/efa8dd41-0cba-48eb-8598-562fe74884df/israel-travel.jpg" width={400} alt="" /> */}
                <ReactCompareSlider
                className="image_area"   
                itemOne={<ReactCompareSliderImage style={{maxHeight: "450px"}} src={originalSrc ?? ""}   />}
                itemTwo={<ReactCompareSliderImage style={{maxHeight: "450px"}} src={removedSrc ?? ""}  />}
                style= {{flexGrow: 1, borderRadius: "20px"}}
                />
            </div>
            <div className="download_conatiner">
                {originalSrc ? 
                    <button onClick={() => { if (removedSrc) window.location.href = removedSrc; }}>
                    Download <FiDownload style={{position: "relative", top: "3px"}}/>
                    </button>
                    : 
                    <button>Upload <FiDownload style={{position: "relative", top: "3px"}}/></button>
                }
                <button className="back_home_btn" onClick={() => navigate("/home")}>Back Home <AiFillHome style={{position: "relative", top: "3px"}}/></button>
            </div>

                {/* <div>
                    
                <Upload/>

                </div> */}
        {/* </div> */}
        </div>
    );
}

export default UploadRoute;
