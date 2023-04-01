import "./Footer.css";
import logo from "./logoPng.png";

function Footer(): JSX.Element {
    return (
        <div className="Footer">
        <footer>
        <div className="footer">
        <div className="row">
        {/* <a href="#"><i className="fa fa-facebook"></i></a>
        <a href="#"><i className="fa fa-instagram"></i></a>
        <a href="#"><i className="fa fa-youtube"></i></a>
        <a href="#"><i className="fa fa-twitter"></i></a> */}
        <img src={logo} width={250} alt="" />
        </div>

        <div className="row">
        <ul>
        <li><a href="#">Contact us</a></li>
        <li><a href="#">Testemonial</a></li>
        <li><a href="#">Examples</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Upload</a></li>
        </ul>
        </div>

        {/* <div className="row">
        All rights reserved || Designed By: Harel Sarag
        </div> */}
        </div>
        </footer>
        </div>
    );
}

export default Footer;
