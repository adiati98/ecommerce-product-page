import logo from "../assets/images/logo.svg";
import cart from "../assets/images/icon-cart.svg";
import avatar from "../assets/images/image-avatar.png";
import { Navbar, Nav, Offcanvas } from "react-bootstrap";
import Quantity from "./Quantity";

const NavBar = ({ setCartIsOpened, purchased }) => {
  return (
			<Navbar expand='md' className='d-flex justify-content-start flex-nowrap'>
				<Navbar.Toggle aria-controls='offcanvasNavbar' className='ms-2' />
				<Navbar.Brand className='mb-2 me-auto me-md-5 ps-1 align-self-center'>
					<img src={logo} alt='sneakers-logo' />
				</Navbar.Brand>
				<Nav className='me-auto nav-menu hide'>
					<Nav.Link href='#collection'>Collections</Nav.Link>
					<Nav.Link href='#men'>Men</Nav.Link>
					<Nav.Link href='#women'>Women</Nav.Link>
					<Nav.Link href='#about'>About</Nav.Link>
					<Nav.Link href='#contact'>Contact</Nav.Link>
				</Nav>
				<Navbar.Offcanvas
					id='offcanvasNavbar'
					aria-labelledby='offcanvasNavbarLabel'
				>
					<Offcanvas.Header closeButton closeLabel />
					<Offcanvas.Body>
						<Nav className='d-flex align-items-md-center justify-content-evenly me-auto ms-md-5 nav-menu'>
							<Nav.Link href='#collection'>Collections</Nav.Link>
							<Nav.Link href='#men'>Men</Nav.Link>
							<Nav.Link href='#women'>Women</Nav.Link>
							<Nav.Link href='#about'>About</Nav.Link>
							<Nav.Link href='#contact'>Contact</Nav.Link>
						</Nav>
					</Offcanvas.Body>
				</Navbar.Offcanvas>
				<div className='d-flex align-items-center'>
					<Navbar.Text className='me-5 cart-wrapper'>
						<Quantity purchased={purchased} />
						<img
            className="p-1"
							src={cart}
							alt='cart'
							width='40px'
							height='40px'
							tabindex='0'
							onClick={() => setCartIsOpened((prv) => !prv)}
						/>
					</Navbar.Text>
					<Navbar.Text>
						<img
							className='avatar'
							src={avatar}
							width='50px'
							height='50px'
							alt='avatar'
							tabindex='0'
						/>
					</Navbar.Text>
				</div>
			</Navbar>
		)
};

export default NavBar;
