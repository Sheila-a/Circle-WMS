import RecycleMain from "../../Layout/RecycleMain/RecycleMain"
import Sidebar from "../../Layout/Sidebar/Sidebar"
import design from "./style.module.css"

const Recycle = () => {
  return (
    <div className={design.Recycle_wrapper}>
      <Sidebar />
      <RecycleMain/>
    </div>
  )
}

export default Recycle
