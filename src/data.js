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
			altText:
				'A white and light brown color sneaker view from side and the other pair bottom view',
			thumbnailAltText:
				'Thumbnail of a white and light brown color sneaker view from side and the other pair bottom view',
			id: 1,
		},
		{
			productPic: product2,
			thumbnail: productThumbnail2,
			altText:
				'Back view of a white and light brown color sneaker on a stack of white rocks and the other pair in standing position next to it',
			thumbnailAltText:
				'Thumbnail of back view of a white and light brown color sneaker on a stack of white rocks and the other pair in standing position next to it',
			id: 2,
		},
		{
			productPic: product3,
			thumbnail: productThumbnail3,
			altText:
				'Outer side view of a white and light brown color sneaker on a stack of white rocks',
			thumbnailAltText:
				'Thumbnail of outer side view of a white and light brown color sneaker on a stack of white rocks',
			id: 3,
		},
		{
			productPic: product4,
			thumbnail: productThumbnail4,
			altText:
				'Inner side view of a white and light brown color sneaker on a stack of white rocks',
			thumbnailAltText:
				'Thumbnail of inner side view of a white and light brown color sneaker on a stack of white rocks',
			id: 4,
		},
	],
}

export default data
