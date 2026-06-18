import { Outlet } from "react-router-dom";
import OutletPickerModal from "../components/outlet-picker-modal";

function Root() {
  return (
    <div>
      {/* Routes render here */}
      <Outlet />
      <OutletPickerModal />
    </div>
  );
}

export default Root;
