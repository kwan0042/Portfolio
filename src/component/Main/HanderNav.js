import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

export default function HanderNav(props) {
  return (
    <div className="header">
      <img
        src={process.env.PUBLIC_URL + "/img/NameLogo.png"}
        className="NameLogo"
        alt=""
      />

      <p className="headerLabel">Designer &amp; Developer</p>

      <Nav className="headerNav" variant="underline" activeKey={props.navSel}>
        <Nav.Item>
          <Nav.Link as={Link} to="/home" eventKey="home">
            Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/web" eventKey="web">
            Web Projects
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/graphic" eventKey="graphic">
            Graphic Projects
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/video" eventKey="video">
            Video Projects
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}
