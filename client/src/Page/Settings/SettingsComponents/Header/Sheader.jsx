import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./sheader.module.css";
import Hero from "../../../../assets/dash_hero.png";
import Button from "../../../../Components/Button/Button";
import AuthContext from "../../../../context/AuthProvider";

function Sheader() {
  const { auth } = useContext(AuthContext);
  const navigate = useNavigate();
  function handleRecycle() {
    navigate("/dashboard/start-recycling");
  }

  return (
    <div className={styles["sheader"]}>
      <div>
        <h2>Hello {auth?.user?.fullName}</h2>
        <p>Make Changes that are personalized to you.</p>
        {/* <Link to="start-recycling"> */}
        <Button
          onClick={handleRecycle}
          content="Start recycling"
          style={{
            backgroundColor: "#8BC34A",
            border: "none",
            marginLeft: "0",
          }}
        />
        {/* </Link> */}
      </div>
      <img src={Hero} />
    </div>
  );
}

export default Sheader;
