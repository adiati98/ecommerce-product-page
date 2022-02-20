//data
import data from '../data'
//components
import ProductDetails from './ProductDetails'
import ProductImages from './ProductImages'
import PurchasePlan from './PurchasePlan'

const ProductPage = () => {
	return (
		<main>
			<ProductImages images={data.productImages} />
			<ProductDetails item={data} />
			<PurchasePlan />
		</main>
	)
}

export default ProductPage
