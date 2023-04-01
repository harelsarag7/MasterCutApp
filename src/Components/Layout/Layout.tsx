import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import "./Layout.css";
import Main from "./Main/Main";

function Layout(): JSX.Element {
    return (
        <div className="Layout">
            <div className="vectors">
            <svg className="vector2" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 800 400"><path d="M379.82061767578125,86.99551391601562C408.364719136556,110.70552805582682,503.9222838338216,122.51419677734376,491.0314025878906,179.3721923828125C478.14052134195964,236.23018798828124,329.8266045125325,260.6397527058919,329.5964050292969,308.5201721191406C329.3662055460612,356.40059153238934,448.92973826090497,351.1868430582682,490.134521484375,365.9192810058594" fill="none" stroke-width="18" stroke="#ffc83e" stroke-linecap="round" stroke-dasharray="0 0" stroke-opacity="1"></path><defs><linearGradient id="SvgjsLinearGradient1001"><stop stop-color="hsl(37, 99%, 67%)" offset="0"></stop><stop stop-color="hsl(316, 73%, 52%)" offset="1"></stop></linearGradient></defs></svg>
              <svg className="vector1" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink"  viewBox="0 0 800 400"><path d="M329.5964050292969,89.68609619140625C344.8430430094401,94.17040125528972,417.0403594970703,100.44842783610027,421.07623291015625,116.59192657470703C425.1121063232422,132.7354253133138,333.03436279296875,171.74888229370117,353.8116455078125,186.54708862304688C374.58892822265625,201.34529495239258,538.4155629475912,194.91778818766275,545.7399291992188,205.38116455078125C553.0642954508463,215.84454091389975,398.20627848307294,237.07024637858072,397.7578430175781,249.3273468017578C397.3094075520833,261.5844472249349,518.8340708414713,273.9910303751628,543.04931640625,278.92376708984375" fill="none" stroke-width="18" stroke="#ffc83e" stroke-linecap="round"></path><defs><linearGradient id="SvgjsLinearGradient1002"><stop stop-color="hsl(37, 99%, 67%)" offset="0"></stop><stop stop-color="hsl(316, 73%, 52%)" offset="1"></stop></linearGradient></defs></svg>
            </div>
			<Header/>
            <Main/>
            {/* <Footer/> */}
        </div>
    );
}

export default Layout;

