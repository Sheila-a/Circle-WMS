import PropTypes from "prop-types";
import { useContext } from "react";
import IC2 from "../../assets/Nig.png";
import design from "./style.module.css";
import IC1 from "../../assets/Usdc.png";
import { Link } from "react-router-dom";
import IC3 from "../../assets/Bottle.png";
import Hero from "../../assets/dash_hero.png";
import Button from "../../Components/Button/Button";
import AuthContext from "../../context/AuthProvider";
import DashCard from "../../Components/DashCard/DashCard";
import DashNavbar from "../../Components/DashNavbar/DashNavbar";
import DidYouKnow from "../../Components/DidYouKnow/DidYouKnow";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

const DashMain = () => {
  const { auth } = useContext(AuthContext);

  function ColorfulPTag({ content }) {
    const isPositive = content.startsWith("+");

    return (
      <p style={{ color: isPositive ? "#039855" : "#D92D20" }}>{content}</p>
    );
  }
  ColorfulPTag.propTypes = {
    content: PropTypes.string.isRequired,
  };
  return (
    <div
      className={design.DashMain_wrapper}
      data-aos="zoom-in"
      data-aos-duration="1000"
    >
      <DashNavbar title="Home" />
      <div className={design.DashMain_hero}>
        <div>
          <h2>Hello {auth?.user?.fullName}</h2>
          <p>
            We are on a mission to make the world cleaner through recycling and
            blockchain technology
          </p>
          <Link to="start-recycling">
            <Button
              content="Start recycling"
              style={{
                backgroundColor: "#8BC34A",
                border: "none",
                marginLeft: "0",
              }}
            />
          </Link>
        </div>
        <img src={Hero} />
      </div>
      <div className={design.DashMain_middle}>
        <div className={design.DashMain_middle_left}>
          <div className={design.DashMain_middle_left_upper}>
            <DashCard
              icons={IC1}
              title="USDC"
              value="Balance"
              number="234"
              className={design.crd_1}
            />
            <DashCard
              icons={IC2}
              title="Nigeria"
              value="Leaderboard"
              number="8"
              className={design.crd_2}
            />
            <DashCard
              icons={IC3}
              title="Plastic bottles"
              value="Total recycled"
              number="55"
              className={design.crd_3}
            />
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
              <div
                className={`${design.DashMain_details} ${design.DashMain_details2}`}
              >
                <p>Feb 22</p>
                <p>20 bottles</p>

                <ColorfulPTag content="+20 USDC" />
              </div>
              <div
                className={`${design.DashMain_details} ${design.DashMain_details2}`}
              >
                <p>Feb 22</p>
                <p>Top up</p>
                <p>+NGN 2,000</p>
              </div>
              <div
                className={`${design.DashMain_details} ${design.DashMain_details2}`}
              >
                <p>Feb 22</p>
                <p>Top up</p>
                <p>+NGN 2,000</p>
              </div>
              <div
                className={`${design.DashMain_details} ${design.DashMain_details2}`}
              >
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
                <ArrowForwardIosRoundedIcon style={{ fontSize: "12px" }} />
              </span>
            </div>
            <div className={design.DashMain_stations_detail}>
              <p className={design.DashMain_collect}>Abakpa collection unit</p>
              <span>
                <p>View in map</p>
                <ArrowForwardIosRoundedIcon style={{ fontSize: "12px" }} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashMain;
