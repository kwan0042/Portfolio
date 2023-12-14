import { Link } from "react-router-dom";
export default function CoverP() {
  return (
    <>
      <div className="header">
        <img
          src={process.env.PUBLIC_URL + "/img/NameLogo.png"}
          className="NameLogo"
          alt=""
        />

        <p class="headerLabel">Designer &amp; Developer</p>

        <nav className="headerNav">
          <ol>
            <Link to="/webPJ">Web Projects</Link>
            <Link to="/graphPJ">Graphic Projects</Link>
            <Link to="/videoPJ">Video Projects</Link>
          </ol>
        </nav>
      </div>
    </>
  );
}
