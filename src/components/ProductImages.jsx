import productThumbnail1 from '../assets/images/image-product-1-thumbnail.jpg'
import productThumbnail2 from '../assets/images/image-product-2-thumbnail.jpg'
import productThumbnail3 from '../assets/images/image-product-3-thumbnail.jpg'
import productThumbnail4 from '../assets/images/image-product-4-thumbnail.jpg'
import product1 from '../assets/images/image-product-1.jpg'

const ProductImages = () => {
  return (
    <>
      <div>
        <img src={product1} alt="" />
      </div>
      <div className="thumbnails">
        <img src={productThumbnail1} alt="" />
        <img src={productThumbnail2} alt="" />
        <img src={productThumbnail3} alt="" />
        <img src={productThumbnail4} alt="" />
      </div>
    </>
  )
}

export default ProductImages