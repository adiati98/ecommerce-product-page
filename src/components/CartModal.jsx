import { useEffect, useRef } from "react";
import trashBin from "../assets/images/icon-delete.svg";

const CartModal = ({ purchased, updatePurchased, setCartIsOpened }) => {
  const clearCart = () => {
    updatePurchased(null);
  };
  const cartRef = useRef()

  useEffect(() => {
    const closeCart = (e) => {
      const cart = cartRef.current
      if (cart && !cart.contains(e.target)) {
        setCartIsOpened(false)
      }
    }
		document.addEventListener('mousedown', closeCart)

    return () => document.removeEventListener('mousedown', closeCart)
    

	}, [setCartIsOpened,])


  return (
    <div ref={cartRef} className="cart-popover d-flex flex-column shadow rounded pb-3">
      <p className="border-bottom py-3 bold">Cart</p>
      {!purchased ? (
        <p className="m-auto">Your cart is empty</p>
      ) : (
        <>
          <div className="d-flex flex-row  justify-content-between">
            <div className="popover-image">
              <img src={purchased.thumbnail} alt={purchased.thumbnailAltText} />
            </div>
            <div className="d-flex flex-column justify-content-center ">
              <p className="mb-0">{purchased.title}</p>
              <p>
                {purchased.discountedPrice} x <span>{purchased.quantity}</span>{" "}
                <span className="bold">
                  {(purchased.quantity * purchased.discountedPrice).toFixed(2)}
                </span>
              </p>
            </div>
            <button
              onClick={clearCart}
              className="trash-icon align-self-center mb-2 "
            >
              <img src={trashBin} alt="delete" />
            </button>
          </div>
          <button tabIndex="0" className="bold orange-btn">Checkout</button>
        </>
      )}
    </div>
  );
};

export default CartModal;
