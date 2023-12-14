import Stars from "./Stars";
import Start from "./Start";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <Start />
      <Stars />
      <div className="mask">
        <div className="mask-top"></div>
        <div className="mask-bottom"></div>
      </div>

      <div className="frame">
        <div className="frame_line frame_line-left"></div>
        <div className="frame_line frame_line-right"></div>
        <div className="frame_line frame_line-top"></div>
        <div className="frame_line frame_line-bottom"></div>
      </div>
      <Outlet />
    </div>
  );
}
