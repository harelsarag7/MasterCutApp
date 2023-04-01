import "./Header.css";
import logo from "./MasterCutLogo.jpg";


function Header(): JSX.Element {
    return (
        <div className="Header">
			<img src={logo} width="300" alt="" />
        </div>
    );
}

export default Header;
