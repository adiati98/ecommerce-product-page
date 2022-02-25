const CartModal = ({ purchased }) => {
  const {title, quantity, thumbnail, discountedPrice} = purchased

  return (
    <>
    <p>Cart</p>
    <hr />
    {!purchased ? <p>Your cart is empty</p> : (
      <>
      <div><img src={thumbnail} alt="" /></div>
      <p>{title}</p>
      <p>{quantity}</p>
      <p>{discountedPrice}</p>
      <p>{(quantity * discountedPrice).toFixed(2)}</p>
      </>
    )}
    </>
  )
}

export default CartModal