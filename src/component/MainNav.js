import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

export default function MainNav() {
  return (
    <>
      <Navbar data-bs-theme="dark">
        <Container className="justify-content-end mt-5">
          {/* <Navbar.Brand href="#home">
            <img
              src={process.env.PUBLIC_URL + "/img/DKLogo_White.png"}
              height={"25px"}
              alt="navlogo"
            />
          </Navbar.Brand> */}
          <Nav>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
