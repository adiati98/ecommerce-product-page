import logo from "../assets/images/logo.svg";
import cart from "../assets/images/icon-cart.svg";
import avatar from "../assets/images/image-avatar.png";
import { Navbar, Nav } from "react-bootstrap";

const NavBar = ({ cartIsClicked }) => {
  return (
    <Navbar bg="light" expand="md" className="d-flex">
      <Navbar.Brand className="mb-2 px-5 align-self-center">
        <img src={logo} alt="sneakers-logo" />
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav className="d-flex align-items-center justify-content-evenly me-auto links">
          <Nav.Link>Collections</Nav.Link>
          <Nav.Link>Men</Nav.Link>
          <Nav.Link>Women</Nav.Link>
          <Nav.Link>About</Nav.Link>
          <Nav.Link>contact</Nav.Link>
        </Nav>
        <Nav className="px-5 d-flex align-items-center">
          <Navbar.Text className="mx-5">
            <img src={cart} alt="cart" onClick={cartIsClicked} />
          </Navbar.Text>
          <Navbar.Text>
            <img src={avatar} width="50px" height="50px" alt="avatar" />
          </Navbar.Text>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
