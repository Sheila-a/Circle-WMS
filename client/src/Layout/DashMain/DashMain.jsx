import design from "./style.module.css"
import Hero from "../../assets/dash_hero.png"
import Button from "../../Components/Button/Button";
import IC1 from "../../assets/Usdc.png"
import IC2 from "../../assets/Nig.png"
import IC3 from "../../assets/Bottle.png"
import { Link } from "react-router-dom";
import DashNavbar from "../../Components/DashNavbar/DashNavbar";
import DidYouKnow from "../../Components/DidYouKnow/DidYouKnow";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import DashCard from "../../Components/DashCard/DashCard";
const DashMain = () => {
  return (
    <div className={design.DashMain_wrapper}>
      <DashNavbar title="Home"/>
      <div className={design.DashMain_hero}>
        <div>
            <h2>Hello Sheila</h2>
            <p>We are on a mission to make the world cleaner through recycling and blockchain technology</p>
            <Link to="start-recycling">
              <Button content="Start recycling" style={{backgroundColor:"#8BC34A", border:"none", marginLeft:"0"}}/>
            </Link>
            </div>
        <img src={Hero}/>
      </div>
      <div className={design.DashMain_middle}>
        <div className={design.DashMain_middle_left}>
          <div className={design.DashMain_middle_left_upper}>
            <DashCard icons={IC1} title="USDC" value="Balance" number="234"    className={design.crd_1}/>
            <DashCard icons={IC2} title="Nigeria" value="Leaderboard" number="8"    className={design. crd_2}/>
            <DashCard icons={IC3} title="Plastic bottles" value="Total recycled" number="55"    className={design.crd_3}/>
          </div>
          <div className={design.DashMain_middle_left_lower}>
            <div className={design.DashMain_Transaction}>
              <h4>Transaction History</h4>
              <div className={design.DashMain_details}>
                <p>Feb 22</p>
                <p>Top up</p>
                <p>+NGN 2,000</p>
              </div>
              <div className={design.DashMain_details}>
                <p>Feb 22</p>
                <p>Top up</p>
                <p>+NGN 2,000</p>
              </div>
              <div className={design.DashMain_details}>
                <p>Feb 22</p>
                <p>Top up</p>
                <p>+NGN 2,000</p>
              </div>
              <div className={design.DashMain_details}>
                <p>Feb 22</p>
                <p>Top up</p>
                <p>+NGN 2,000</p>
              </div>
              <div className={design.DashMain_details}>
                <p>Feb 22</p>
                <p>Top up</p>
                <p>+NGN 2,000</p>
              </div>
              <div className={design.DashMain_details}>
                <p>Feb 22</p>
                <p>Top up</p>
                <p>+NGN 2,000</p>
              </div>
             
            </div>
            <div className={design.DashMain_Transaction}>
              <h4>Recycle History</h4>
              <div className={`${design.DashMain_details} ${design.DashMain_details2}`}>
              <p>Feb 22</p>
                <p>Top up</p>
                <p>+NGN 2,000</p>
              </div>
              <div className={`${design.DashMain_details} ${design.DashMain_details2}`}>
              <p>Feb 22</p>
                <p>Top up</p>
                <p>+NGN 2,000</p>
              </div>
              <div className={`${design.DashMain_details} ${design.DashMain_details2}`}>
              <p>Feb 22</p>
                <p>Top up</p>
                <p>+NGN 2,000</p>
              </div>
              <div className={`${design.DashMain_details} ${design.DashMain_details2}`}>
              <p>Feb 22</p>
                <p>Top up</p>
                <p>+NGN 2,000</p>
            </div>
            </div>
          </div>
        </div>
        <div className={design.DashMain_middle_right}>
          <DidYouKnow />
          <div className={design.DashMain_stations}>
            <h4>Available stations</h4>
            <p>Near your location</p>
            <div className={design.DashMain_stations_detail}>
              <p className={design.DashMain_collect}>Abakpa collection unit</p>
              <span> 
              <p>View in map</p>                 
              <ArrowForwardIosRoundedIcon style={{fontSize:"12px"}}/>
              </span>
            </div>
            <div className={design.DashMain_stations_detail}>
              <p className={design.DashMain_collect}>Abakpa collection unit</p>
              <span> 
              <p>View in map</p>                 
              <ArrowForwardIosRoundedIcon style={{fontSize:"12px"}}/>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashMain;
