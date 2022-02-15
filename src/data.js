import productThumbnail1 from './assets/images/image-product-1-thumbnail.jpg'
import productThumbnail2 from './assets/images/image-product-2-thumbnail.jpg'
import productThumbnail3 from './assets/images/image-product-3-thumbnail.jpg'
import productThumbnail4 from './assets/images/image-product-4-thumbnail.jpg'
import product1 from './assets/images/image-product-1.jpg'
import product2 from './assets/images/image-product-2.jpg'
import product3 from './assets/images/image-product-3.jpg'
import product4 from './assets/images/image-product-4.jpg'

const data = {
	collection: 'Fall Limited Edition Sneakers',
	description: `These low-profile sneakers are your perfect casual wear companion.
    Featuring a durable rubber outer sole, they’ll withstand everything the
    weather can offer.`,
	price: '250.00',
	discount: '50',
	productImages: [
		{
			productPic: product1,
			thumbnail: productThumbnail1,
		},
		{
			productPic: product2,
			thumbnail: productThumbnail2,
		},
		{
			productPic: product3,
			thumbnail: productThumbnail3,
		},
		{
			productPic: product4,
			thumbnail: productThumbnail4,
		},
	],
}

export default data
