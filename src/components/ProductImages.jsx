import { useState } from 'react'
import nextArrow from '../assets/images/icon-next.svg'
import previousArrow from '../assets/images/icon-previous.svg'

import { Image } from 'react-bootstrap'

const ProductImages = ({ images, setIsOpened, modal }) => {
	const [index, setIndex] = useState(0)
	const [image, setImage] = useState(images[0].productPic)
	const [altText, setAltText] = useState(images[0].altText)

	let arrowStyle = ''
	if (!modal) {
		arrowStyle = 'd-block d-sm-none'
	}

	const moveToNextImage = () => {
		if (index === 3) {
			return
		} else {
			const newIndex = index + 1
			setIndex(newIndex)
			setImage(images[newIndex].productPic)
		}
	}

	const moveToPreviousImage = () => {
		if (index === 0) {
			return
		} else {
			const newIndex = index - 1
			setIndex(newIndex)
			setImage(images[newIndex].productPic)
		}
	}

	return (
		<>
			<div className='d-flex align-items-center'>
				<button className={arrowStyle} onClick={moveToPreviousImage}>
					<img src={previousArrow} alt='previous arrow' />
				</button>
				<div onClick={() => setIsOpened(true)}>
					<Image fluid src={image} alt={altText} />
				</div>
				<button className={arrowStyle} onClick={moveToNextImage}>
					<img src={nextArrow} alt='next arrow' />
				</button>
			</div>
			<div className='thumbnails d-flex flex-row justify-content-between'>
				{images.map((product, index) => (
					<Image
						className='thumbnail d-none d-sm-block'
						key={product.id}
						src={product.thumbnail}
						onClick={() => {
							setImage(product.productPic)
							setAltText(product.altText)
							setIndex(index)
						}}
						alt={product.thumbnailAltText}
					/>
				))}
			</div>
		</>
	)
}

export default ProductImages
