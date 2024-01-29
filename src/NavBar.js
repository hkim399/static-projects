import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const NavBar = () => {
  return (
    <><Navbar bg="dark" data-bs-theme="dark" >
    <Container className="nav-container">
      <div className="logo">HK</div>
        <Nav fill  variant="tabs" style={{width: "80%"}} className="justify-content-end" >
       <Nav.Item> <Nav.Link href="/">Home</Nav.Link></Nav.Item>
       <Nav.Item> <Nav.Link href="/about">About</Nav.Link></Nav.Item>
       <Nav.Item> <Nav.Link href="/utilities">Utilities</Nav.Link></Nav.Item>
       <Nav.Item> <Nav.Link href="/games">Games</Nav.Link></Nav.Item>
       <Nav.Item> <Nav.Link href="templates">Templates</Nav.Link></Nav.Item>

      </Nav>
    </Container>
  </Navbar>
  

 
    </>
  );
};

export default NavBar;
