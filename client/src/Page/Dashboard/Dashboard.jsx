import DashMain from "../../Layout/DashMain/DashMain";
import Sidebar from "../../Layout/Sidebar/Sidebar";
import design from "./style.module.css";
const Dashboard = () => {
  return (
    <div className={design.Dashboard_wrapper}>
      <Sidebar />
      <DashMain />
    </div>
  );
};

export default Dashboard;
