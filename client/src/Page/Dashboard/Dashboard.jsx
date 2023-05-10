import Sidebar from "../../Layout/Sidebar/Sidebar";
import design from "./style.module.css";
import Settings from "../Settings/SettingsPage/Settings";
import { Outlet } from "react-router-dom";


const Dashboard = () => {
  return (
    <div className={design.Dashboard_wrapper}>
      <Sidebar />
      <div style={{ width: "76%" }}>
        <Outlet/>

      </div>
    </div>
  );
};

export default Dashboard;
