import DashNavbar from "../../Components/DashNavbar/DashNavbar";
import design from "./style.module.css";
import QRCodeScanner from "../../Components/QrScanner/QrScanner"
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import Hero from "../../assets/dash_hero.png";
import DidYouKnow from "../../Components/DidYouKnow/DidYouKnow";

import AuthContext from "../../context/AuthProvider"; 
import { useContext } from "react";



const RecycleMain = () => {

  const { auth } = useContext(AuthContext);

  return (
    <div className={design.RecycleMain_container}>
      <DashNavbar title="Home / Recycle"/>
      <div className={design.RecycleMain_hero}>
        <div>
            <h2>{auth?.user?.fullName}</h2>
            <p>Scan the QR code found on any of our machines to get started recycling</p>
           
        </div>
        <img src={Hero}/>
      </div>
      <div className={design.RecycleMain_middle}>
        <div className={design.RecycleMain_middle_left}>
            < QRCodeScanner />
        </div>
        <div className={design.RecycleMain_middle_right}>
            <DidYouKnow />
            <div className={design.RecycleMain_stations}>
            <h4>Available stations</h4>
            <p>Near your location</p>
            <div className={design.RecycleMain_stations_detail}>
              <p className={design.RecycleMain_collect}>Abakpa collection unit</p>
              <span> 
              <p>View in map</p>                 
              <ArrowForwardIosRoundedIcon style={{fontSize:"12px"}}/>
              </span>
            </div>
            <div className={design.RecycleMain_stations_detail}>
              <p className={design.RecycleMain_collect}>Abakpa collection unit</p>
              <span> 
              <p>View in map</p>                 
              <ArrowForwardIosRoundedIcon style={{fontSize:"12px"}}/>
              </span>
            </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default RecycleMain
