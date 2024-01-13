// import HanderNav from "../HanderNav";
import SwiperCover from "./SwiperCover";
export default function Home() {
  return (
    <div className="content">
      {/* <HanderNav navSel="home" /> */}
      <section className="coverSec">
        <SwiperCover />
        <img
          className="cImg"
          src="%PUBLIC_URL%/../img/NameLogo_B.png"
          width={"200px"}
          alt="DK Logo"
        />
      </section>
      <section className="coverSec">
        <p>DDLLLLL</p>
      </section>
    </div>

    // </div>

    // <span>From Hong Kong's vibrant pulse, </span>
    // <span>I weave digital dreams into reality. </span>
    // <span>With a journey through </span>
    // <span>code, design, and creativity, </span>
    // <span>I turn the ordinary into </span>
    // <span>the extraordinary. </span>
    // <span>Inspiring innovation</span>
    // <span>and connecting cultures, </span>
    // <span>I craft web experiences </span>
    // <span>that resonate and engage. </span>
    // <span>Let's shape the future</span>
    // <span>of online narratives together.</span>
  );
}
