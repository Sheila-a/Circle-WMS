import Sidebar from "../../Layout/Sidebar/Sidebar";
import design from "./style.module.css";
const Dashboard = () => {
  return (
    <div className={design.Dashboard_wrapper}>
      <Sidebar />
      <div style={{ width: "70%" }}></div>
    </div>
  );
};

export default Dashboard;
