import trashBin from '../assets/images/icon-delete.svg'

const CartModal = ({ purchased, updatePurchased }) => {
	const clearCart = () => {
		updatePurchased(null)
	}

	return (
		<>
			<p>Cart</p>
			<hr />
			{!purchased ? (
				<p>Your cart is empty</p>
			) : (
				<>
					<div>
						<img src={purchased.thumbnail} alt={purchased.thumbnailAltText} />
					</div>
					<p>{purchased.title}</p>
					<p>{purchased.quantity}</p>
					<p>{purchased.discountedPrice}</p>
					<p>{(purchased.quantity * purchased.discountedPrice).toFixed(2)}</p>
					<button onClick={clearCart}>
						<img src={trashBin} alt='delete' />
					</button>
					<button>Checkout</button>
				</>
			)}
		</>
	)
}

export default CartModal
