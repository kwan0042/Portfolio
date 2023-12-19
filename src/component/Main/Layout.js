import Stars from "./Stars";
import Sakura from "./sakura";

export default function Layout(props) {
  const themeSeleted = props.theme;

  if (themeSeleted === "light") {
    return (
      <>
        <div className={` ${themeSeleted}`}>
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
          <Sakura />
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className={` ${themeSeleted}`}>
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
          <Stars />
        </div>
      </>
    );
  }
}
