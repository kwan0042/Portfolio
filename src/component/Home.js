import Stars from "./Stars";
import CoverP from "./CoverP";
import Start from "./Start";
export default function Home() {
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
      <div className="content">
        <CoverP />
      </div>
    </div>
  );
}
