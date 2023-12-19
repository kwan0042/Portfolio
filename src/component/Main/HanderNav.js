/* eslint-disable react-hooks/exhaustive-deps */
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import { useEffect, useState } from "react";
import classNames from "classnames";
import { CSSTransition } from "react-transition-group";

export default function HanderNav(props) {
  const [isSpinActive, SpinActive] = useState(false);
  const [isDark, SetisDark] = useState(false);
  const Spin = classNames("", {
    fadeInNav: isSpinActive,
  });
  useEffect(() => {
    SpinActive(true);
  }, []);

  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      SetisDark(true);
    } else {
      SetisDark(false);
    }
  });

  return (
    <div className="header">
      {isDark ? (
        <img
          src={process.env.PUBLIC_URL + "/img/NameLogo.png"}
          className="NameLogo"
          alt=""
        />
      ) : (
        <img
          src={process.env.PUBLIC_URL + "/img/DKLogo_Drak.png"}
          className="NameLogo"
          alt=""
        />
      )}

      <p className="headerLabel">Designer &amp; Developer</p>

      <Nav className="headerNav" variant="underline" activeKey={props.navSel}>
        <Nav.Item className={Spin}>
          <Nav.Link as={Link} to="/home" eventKey="home">
            Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className={Spin}>
          <Nav.Link as={Link} to="/web" eventKey="web">
            Web Projects
          </Nav.Link>
        </Nav.Item>
        <CSSTransition timeout={100}>
          <Nav.Item className={Spin}>
            <Nav.Link as={Link} to="/graphic" eventKey="graphic">
              Graphic Projects
            </Nav.Link>
          </Nav.Item>
        </CSSTransition>
        <CSSTransition timeout={2000}>
          <Nav.Item className={Spin}>
            <Nav.Link as={Link} to="/video" eventKey="video">
              Video Projects
            </Nav.Link>
          </Nav.Item>
        </CSSTransition>
      </Nav>
    </div>
  );
}
