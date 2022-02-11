
const ProductDetails = ({item}) => {
  return (
			<>
				<h1>Sneaker Company</h1>
				<h2>{item.collection}</h2>
				<p>{item.description}</p>
			</>
		)
}

export default ProductDetails