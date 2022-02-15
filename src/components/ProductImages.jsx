import productThumbnail1 from '../assets/images/image-product-1-thumbnail.jpg'
import productThumbnail2 from '../assets/images/image-product-2-thumbnail.jpg'
import productThumbnail3 from '../assets/images/image-product-3-thumbnail.jpg'
import productThumbnail4 from '../assets/images/image-product-4-thumbnail.jpg'
import product1 from '../assets/images/image-product-1.jpg'
import product2 from '../assets/images/image-product-2.jpg'
import product3 from '../assets/images/image-product-3.jpg'
import product4 from '../assets/images/image-product-4.jpg'
import { useState } from 'react'


const ProductImages = () => {
  const [image, setImage] = useState(product1);

  return (
    <>
      <div>
        <img src={image} alt="" />
      </div>
      <div className="thumbnails">
        <img src={productThumbnail1} onClick={() => setImage(product1)} alt="" />
        <img src={productThumbnail2} onClick={() => setImage(product2)} alt="" />
        <img src={productThumbnail3} onClick={()  => setImage(product3)} alt="" />
        <img src={productThumbnail4} onClick={() => setImage(product4)} alt="" />
      </div>
    </>
  )
}

export default ProductImages