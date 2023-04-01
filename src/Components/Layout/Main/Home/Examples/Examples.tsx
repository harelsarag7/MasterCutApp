import "./Examples.css";
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import woman from "./woman.jpg";
import womanRemoved from "./womanRemoved.png";
import camera from "./camera.jpg";
import cameraRemoved from "./cameraRemoved.png";
import dog from "./dog.jpg";
import dogRemoved from "./dogRemoved.png";
import Tablist from "./TabList/TabList";
import { useState } from "react";


function Examples(): JSX.Element {
const [index, setIndex] = useState<number>(0)
    return (
        <div className="Examples">
            
            <h2>Examples</h2>
        <Tablist index={index} setIndex={setIndex}/>

            <div className="images">
                {index ==  0 ? 
                <ReactCompareSlider
                itemOne={<ReactCompareSliderImage src={woman}  alt="Woman with background" />}
                itemTwo={<ReactCompareSliderImage src={womanRemoved}  alt="Woman after background cut" />}
                style= {{flexGrow: 1, borderRadius: "20px"}}
                />
                :index == 1 ?
                <ReactCompareSlider
                itemOne={<ReactCompareSliderImage src={camera}  alt="Camera with background" />}
                itemTwo={<ReactCompareSliderImage src={cameraRemoved}  alt="Camera after background cut" />}
                style= {{flexGrow: 1, borderRadius: "20px"}}
                />
                : 
                <ReactCompareSlider
                itemOne={<ReactCompareSliderImage src={dog}  alt="Dog with background" />}
                itemTwo={<ReactCompareSliderImage src={dogRemoved}  alt="Dog after background cut" />}
                style= {{flexGrow: 1, borderRadius: "20px"}}
                />
            }
            </div>
        </div>
    );
}

export default Examples;
