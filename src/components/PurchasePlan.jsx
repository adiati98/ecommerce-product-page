import shoppingCart from '../assets/images/icon-cart.svg'
import { useState } from 'react'

const PurchasePlan = () => {
	const [quantity, setQuantity] = useState(0)

	const increaseQuantity = () => {
		setQuantity((prevQuantity) => prevQuantity + 1)
	}

	const decreaseQuantity = () => {
		if (quantity > 0) {
			setQuantity((prevQuantity) => prevQuantity - 1)
		} else {
			setQuantity(0)
		}
	}

	return (
		<>
			<button onClick={decreaseQuantity}>-</button>
			<span>{quantity}</span>
			<button onClick={increaseQuantity}>+</button>

			<button type='submit'>
				<img src={shoppingCart} alt='Shopping cart icon' />
				Add to chart
			</button>
		</>
	)
}

export default PurchasePlan
