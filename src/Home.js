import Stars from "./Stars";
import CoverP from "./CoverP";
export default function Home() {
  return (
    <div>
      <Stars />
      <div className="mask">
        <div className="mask-top"></div>
        <div className="mask-bottom"></div>
      </div>

      <div className="frame">
        <div class="frame_line frame_line-left"></div>
        <div class="frame_line frame_line-right"></div>
        <div class="frame_line frame_line-top"></div>
        <div class="frame_line frame_line-bottom"></div>
      </div>
      <div className="content">
        <CoverP />
      </div>
    </div>
  );
}
