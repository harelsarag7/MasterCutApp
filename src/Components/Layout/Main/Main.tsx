import { Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import "./Main.css";
import PageNotFound404 from "./PageNotFound404/PageNotFound404";
import UploadRoute from "./UploadRoute/UploadRoute";

function Main(): JSX.Element {

    return (
        <div className="Main">


            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/home" element={<Home/>}></Route>
                <Route path="/upload" element={<UploadRoute/>}></Route>
                <Route path="/*" element={<PageNotFound404/>}></Route>

			</Routes>
        </div>
    );
}

export default Main;
