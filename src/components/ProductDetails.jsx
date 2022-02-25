import PurchasePlan from './PurchasePlan'

const ProductDetails = ({ item, updatePurchased }) => {
	const applyDiscount = () => {
		return (item.price - item.price * (item.discount / 100)).toFixed(2)
	}

	return (
		<>
			<h1>Sneaker Company</h1>
			<h2>{item.collection}</h2>
			<p>{item.description}</p>

			<p>${applyDiscount()}</p>
			<p>{item.discount}%</p>
			<p>${item.price}</p>

			<PurchasePlan updatePurchased={updatePurchased} title={item.collection} discountedPrice={applyDiscount()} thumbnail={item.productImages[0].thumbnail}/>
		</>
	)
}

export default ProductDetails
