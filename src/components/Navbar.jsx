import logo from "../assets/images/logo.svg";
import cart from "../assets/images/icon-cart.svg";
import avatar from "../assets/images/image-avatar.png";
const Navbar = () => {
  return (
    <header>
      <img src={logo} alt="sneakers-logo" />
      <nav>
        <ul>
          <li>Collections</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>contact</li>
        </ul>
      </nav>
      <img src={cart} alt="cart" />
      <img src={avatar} alt="avatar" />
    </header>
  );
};

export default Navbar;
