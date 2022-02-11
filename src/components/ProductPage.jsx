//data
import data from '../data'
//components
import ProductDetails from './ProductDetails'
import ProductImages from './ProductImages'

const ProductPage = () => {
  return (
    <>
      <ProductImages />
      <ProductDetails item={data}/>
    </>
  )
}

export default ProductPage