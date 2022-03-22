import PurchasePlan from './PurchasePlan'

const ProductDetails = ({ item, updatePurchased }) => {
	const applyDiscount = () => {
		return (item.price - item.price * (item.discount / 100)).toFixed(2)
	}

	return (
		<div className='product-details'>
			<h1 className='bold company-name'>Sneaker Company</h1>
			<h2 className='bold item-collection'>{item.collection}</h2>
			<p className='item-description'>{item.description}</p>

			<p className='bold applied-discount'>
				${applyDiscount()}{' '}
				<span className='bold item-discount'>{item.discount}%</span>
			</p>
			<p className='item-price'>${item.price}</p>

			<PurchasePlan
				updatePurchased={updatePurchased}
				title={item.collection}
				discountedPrice={applyDiscount()}
				thumbnail={item.productImages[0].thumbnail}
				thumbnailAltText={item.productImages[0].thumbnailAltText}
			/>
		</div>
	)
}

export default ProductDetails
