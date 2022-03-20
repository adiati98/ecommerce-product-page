import trashBin from "../assets/images/icon-delete.svg";

const CartModal = ({ purchased, updatePurchased }) => {
  const clearCart = () => {
    updatePurchased(null);
  };

  return (
    <div className="cart-popover d-flex flex-column shadow rounded p-4">
      <p className="border-bottom pb-2 bold">Cart</p>
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
          <button className="bold orange-btn">Checkout</button>
        </>
      )}
    </div>
  );
};

export default CartModal;
