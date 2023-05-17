import { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./sheader.module.css";
import Hero from "../../../../assets/dash_hero.png";
import Button from "../../../../Components/Button/Button";
import AuthContext from "../../../../context/AuthProvider";

function Sheader() {
  const { auth } = useContext(AuthContext);

  return (
    // <div>
    //   <header className={styles["sheader"]}>
    //     <section>
    //       <h2>Hello {auth?.user?.fullName}</h2>
    //       <p>Make Changes that are personalized to you.</p>

    //       <Link to="start-recycling">
    //         <Button
    //           content="Start recycling"
    //           style={{
    //             backgroundColor: "#8BC34A",
    //             border: "none",
    //             marginLeft: "0",
    //           }}
    //         />
    //       </Link>
    //     </section>

    //     <figure className={styles["header-img-container"]}>
    //       <img src={img} alt="" className={styles["header-img"]} />
    //     </figure>
    //   </header>
    // </div>
    <div className={styles["sheader"]}>
      <div>
        <h2>Hello {auth?.user?.fullName}</h2>
        <p>Make Changes that are personalized to you.</p>
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
    // <div className={styles["sheader"]>
    // <div>
    //   <h2>Hello {auth?.user?.fullName}</h2>
    //   <p>
    //     We are on a mission to make the world cleaner through recycling and
    //     blockchain technology
    //   </p>
    //   <Link to="start-recycling">
    //     <Button
    //       content="Start recycling"
    //       style={{
    //         backgroundColor: "#8BC34A",
    //         border: "none",
    //         marginLeft: "0",
    //       }}
    //     />
    //   </Link>
    // </div>
    // <img src={Hero} />
    // </div>
  );
}

export default Sheader;
