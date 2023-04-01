import Examples from "./Examples/Examples";
import Testimonials from "./Testimonials/Testimonials";
import Upload from "./Upload/Upload";
import "./Home.css";

function Home(): JSX.Element {
    return (
        <div className="Home">
            <Upload/>
            <Examples/>
            <Testimonials/>
        </div>
    );
}

export default Home;
