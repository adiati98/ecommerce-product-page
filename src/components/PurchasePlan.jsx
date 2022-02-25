import shoppingCart from '../assets/images/icon-cart.svg'
import plus from '../assets/images/icon-plus.svg'
import minus from '../assets/images/icon-minus.svg'

import { useState } from 'react'

const PurchasePlan = ({ updatePurchased, title, discountedPrice, thumbnail }) => {
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

	const handleSubmit = () => {
		updatePurchased(prevState => ({
			...prevState,
			quantity,
			title,
			discountedPrice,
			thumbnail
		}))
	}

	return (
		<>
			<button onClick={decreaseQuantity}>
				<img src={minus} alt='minus' />
			</button>
			<span>{quantity}</span>
			<button onClick={increaseQuantity}>
				<img src={plus} alt='plus' />
			</button>

			<button onClick={handleSubmit}>
				<img src={shoppingCart} alt='Shopping cart icon' />
				Add to chart
			</button>
		</>
	)
}

export default PurchasePlan
