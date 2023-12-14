import Stars from "./Stars";

export default function Layout() {
  return (
    <div>
      
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
    </div>
  );
}
