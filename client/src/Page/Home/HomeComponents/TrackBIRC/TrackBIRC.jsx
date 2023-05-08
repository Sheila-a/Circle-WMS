import design from "./style.module.css";
import Track from "../../../../assets/track.png";

const TrackBIRC = () => {
  return (
    <div className={design.TrackBIRC_container}>
      <h1>Track Your BIRC Activities</h1>
      <img src={Track} alt="" className={design.TrackBIRC_img} />
    </div>
  );
};

export default TrackBIRC;
