const CartModal = ({ purchased }) => {
  return (
    <>
    <p>Cart</p>
    <hr />
    {!purchased ? <p>Your cart is empty</p> : <p>There is data</p>}
    </>
  )
}

export default CartModal