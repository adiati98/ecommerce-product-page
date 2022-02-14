import logo from "../assets/images/logo.svg";
import cart from "../assets/images/icon-cart.svg";
import avatr from "../assets/images/image-avatar.png";
const Navbar = () => {
  return (
    <>
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
      <img src={avatr} alt="avatar" />
    </>
  );
};

export default Navbar;
