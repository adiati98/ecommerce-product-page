//data
import data from '../data'
//components
import ProductDetails from './ProductDetails'
import ProductImages from './ProductImages'

const ProductPage = () => {
  return (
    <main>
      <ProductImages images={data.productImages}/>
      <ProductDetails item={data}/>
    </main>
  )
}

export default ProductPage