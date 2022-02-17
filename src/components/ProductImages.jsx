import { useState } from 'react'


const ProductImages = ({images}) => {
  const [image, setImage] = useState(images.product1);

  return (
			<>
				<div>
					<img src={image} alt='' />
				</div>
				<div className='thumbnails'>
					{images.map((product) => (
						<img src={product.thumbnail} onClick={() => setImage(product.productPic)} alt='' />
					))}
				</div>
			</>
		)
}

export default ProductImages