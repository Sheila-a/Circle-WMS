import { Link } from "react-router-dom";

import Button from "../Button/Button";
import styles from "../Login/login.module.css";
import PropTypes from "prop-types";
import recycleHand from "../../assets/signupImg.png";
import google from "../../assets/Social icon.png";
import linekdln from "../../assets/Vector.png";

function Signup({ Clickhandler }) {
  return (
    <div className={styles["page-like"]}>
      <aside className={styles["img-container"]}>
        <img src={recycleHand} alt="" />
      </aside>

      <main className={styles["main"]}>
        <header>
          <h1 className={styles["title"]}>Sign up</h1>
          <p className={styles["subtitle"]}>
            Start turning plastic wastes to CRYPTO
          </p>
        </header>

        <section className={styles["content"]}>
          <form action="">
            <label className={styles["input-label"]} htmlFor="name">
              Full name&#42;
            </label>
            <input
              className={styles["input-elem"]}
              type="text"
              placeholder="Enter your full name here"
              id="name"
            />

            <label className={styles["input-label"]} htmlFor="email">
              Email&#42;
            </label>
            <input
              className={styles["input-elem"]}
              type="email"
              placeholder="Enter your Email here"
              id="email"
            />

            <label className={styles["input-label"]} htmlFor="password">
              Password&#42;
            </label>
            <input
              className={styles["input-elem"]}
              type="password"
              placeholder="Create a password"
              id="password"
            />
            <p className={styles["caption"]}>
              Must be at least 8 characters long
            </p>
          </form>

          <Button
            handleclick={Clickhandler}
            style={{ background: "#7F56D9", width: "99%" }}
            text="Create account"
          />

          <p className={styles["texty"]}>
            Already have an account?
            <Link to="/">
              <span>Login</span>
            </Link>
          </p>
          <div className={styles["liney-texty"]}>
            <p className={styles["liney"]}></p>
            <p className={styles["demac"]}>OR</p>
            <p className={styles["liney"]}></p>
          </div>

          <Button
            style={{ background: "#344054" }}
            text="Sign in with metamask"
          />
          <Button
            img={google}
            style={{ color: "#344054" }}
            text="Sign in with Google"
          />
          <Button
            img={linekdln}
            style={{ background: "#1877F2" }}
            text="Sign in with Linkedin"
          />
        </section>
      </main>
    </div>
  );
}

Signup.propTypes = {
  Clickhandler: PropTypes.func.isRequired,
};

export default Signup;
