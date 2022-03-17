//data
import { useState } from 'react'
import data from '../data'
import ImageModal from './ImageModal'
//components
import ProductDetails from './ProductDetails'
import ProductImages from './ProductImages'

import { Container, Row, Col } from 'react-bootstrap'

const ProductPage = ({ updatePurchased }) => {
	const [isOpened, setIsOpened] = useState(false)

	return (
		<main>
			<Container className='product-page p-0'>
				<Row>
					<Col md={6} className='product-images-column'>
						{isOpened && (
							<ImageModal imageModal={data.productImages} setIsOpened={setIsOpened} />
						)}
						<ProductImages images={data.productImages} setIsOpened={setIsOpened} />
					</Col>
					<Col className='product-details-column'>
						<ProductDetails item={data} updatePurchased={updatePurchased} />
					</Col>
				</Row>
			</Container>
		</main>
	)
}

export default ProductPage
