import logo from '../assets/images/logo.svg'
import cart from '../assets/images/icon-cart.svg'
import avatar from '../assets/images/image-avatar.png'
import closeBtn from '../assets/images/icon-close-dark-gray.svg'
import { Navbar, Nav } from 'react-bootstrap'

const NavBar = ({ setCartIsOpened }) => {
	return (
		<Navbar expand='md' className='d-flex justify-content-start flex-nowrap'>
			<Navbar.Toggle className='ms-2' />
			<Navbar.Brand className='mb-2 me-auto ps-1 align-self-center'>
				<img src={logo} alt='sneakers-logo' />
			</Navbar.Brand>
			<Navbar.Collapse className='side-nav'>
				<button className='close-btn'>
					<img src={closeBtn} alt='close' />
				</button>
				<Nav className='d-flex align-items-md-center justify-content-evenly me-auto ms-md-5 nav-menu'>
					<Nav.Link href='#collection'>Collections</Nav.Link>
					<Nav.Link href='#men'>Men</Nav.Link>
					<Nav.Link href='#women'>Women</Nav.Link>
					<Nav.Link href='#about'>About</Nav.Link>
					<Nav.Link href='#contact'>Contact</Nav.Link>
				</Nav>
			</Navbar.Collapse>
			<div className='d-flex align-items-center'>
				<Navbar.Text className='me-3'>
					<img
						src={cart}
						alt='cart'
						onClick={() => setCartIsOpened((prv) => !prv)}
					/>
				</Navbar.Text>
				<Navbar.Text>
					<img src={avatar} width='50px' height='50px' alt='avatar' />
				</Navbar.Text>
			</div>
		</Navbar>
	)
}

export default NavBar
