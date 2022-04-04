const Quantity = ({ purchased }) => {
  return (
    <>
      {purchased && <div className="cart-quantity">{purchased.quantity}</div>}
    </>
  );
};

export default Quantity;
