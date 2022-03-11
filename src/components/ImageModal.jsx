import ProductImages from './ProductImages'
import close from '../assets/images/icon-close.svg'

const ImageModal = ({ imageModal, setIsOpened }) => {
	return (
		<div>
			<img src={close} alt='close' onClick={() => setIsOpened(false)} />
			<ProductImages images={imageModal} modal />
		</div>
	)
}

export default ImageModal
