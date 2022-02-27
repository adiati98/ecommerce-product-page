//data
import { useState } from 'react'
import data from '../data'
import ImageModal from './ImageModal'
//components
import ProductDetails from './ProductDetails'
import ProductImages from './ProductImages'

const ProductPage = ({ updatePurchased }) => {
	const [isOpened, setIsOpened] = useState(false)

	return (
		<main>
			{isOpened && (
				<ImageModal imageModal={data.productImages} setIsOpened={setIsOpened} />
			)}
			<ProductImages images={data.productImages} setIsOpened={setIsOpened} />
			<ProductDetails item={data} updatePurchased={updatePurchased} />
		</main>
	)
}

export default ProductPage
