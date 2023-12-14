import { Link } from "react-router-dom";
import styled from "styled-components";

export default function CoverP() {
  const StyledLink = styled(Link)`
    text-decoration: none;
    --bs-nav-link-color: aliceblue !important;
    color: white;
    &: hover {
      color: black;
    }
  `;
  return (
    <div className="header">
      <img
        src={process.env.PUBLIC_URL + "/img/NameLogo.png"}
        className="NameLogo"
        alt=""
      />

      <p className="headerLabel">Designer &amp; Developer</p>

      <nav className="headerNav">
        <ol>
          <StyledLink to="/webPJ">Web Projects</StyledLink>
          <StyledLink to="/graphPJ">Graphic Projects</StyledLink>
          <StyledLink to="/videoPJ">Video Projects</StyledLink>
        </ol>
      </nav>
    </div>
  );
}
