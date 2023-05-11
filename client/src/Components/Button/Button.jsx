import PropTypes from "prop-types";
import design from "./style.module.css";
const Button = (props) => {
  return (
    <button className={design.btn} style={props.style}>
      {props.content}
    </button>
  );
};

Button.propTypes = {
  content: PropTypes.string.isRequired,
  style: PropTypes.string.isRequired,
};

export default Button;
