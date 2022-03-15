import logo from "../assets/images/logo.svg";
import cart from "../assets/images/icon-cart.svg";
import avatar from "../assets/images/image-avatar.png";
import { Navbar, Nav } from "react-bootstrap";

const NavBar = ({ setCartIsOpened }) => {
  return (
    <Navbar bg="light" expand="md" className="d-flex flex-nowrap">
      <Navbar.Toggle className="ms-2" />
      <Navbar.Brand className="mb-2 px-5 align-self-center">
        <img src={logo} alt="sneakers-logo" />
      </Navbar.Brand>
      <Navbar.Collapse>
        <Nav className="d-flex align-items-center justify-content-evenly me-auto links">
          <Nav.Link>Collections</Nav.Link>
          <Nav.Link>Men</Nav.Link>
          <Nav.Link>Women</Nav.Link>
          <Nav.Link>About</Nav.Link>
          <Nav.Link>contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <div className="d-flex align-items-center">
        <Navbar.Text className="mx-5">
          <img
            src={cart}
            alt="cart"
            onClick={() => setCartIsOpened((prv) => !prv)}
          />
        </Navbar.Text>
        <Navbar.Text className="me-4">
          <img src={avatar} width="50px" height="50px" alt="avatar" />
        </Navbar.Text>
      </div>
    </Navbar>
  );
};

export default NavBar;
