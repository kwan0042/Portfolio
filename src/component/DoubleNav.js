import Nav from "react-bootstrap/Nav";

export default function DoubleNav() {
  return (
    <>
      <div className="DoubleNav px-5 ">
        <div className=" justify-content-end p-0">
          <Nav className="link">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </div>
        <div className=" justify-content-end p-0">
          <Nav className="link">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </div>
      </div>
    </>
  );
}
