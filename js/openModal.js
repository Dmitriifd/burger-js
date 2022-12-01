import { API_URL, PREFIX_PRODUCT } from './const.js'
import {
	modalProductTitle,
	modalProductDescription,
	modalProductImage,
	ingredientsCalories,
	modalProductPriceCount,
	ingredientsList,
	modalProduct,
	modalProductBtn,
} from './elements.js'
import { getData } from './getData.js'

export const openModal = async (id) => {
	const product = await getData(`${API_URL}${PREFIX_PRODUCT}/${id}`)
	modalProductTitle.textContent = product.title
	modalProductImage.src = `${API_URL}/${product.image}`
	ingredientsList.innerHTML = ''

	const ingredientsListItem = product.ingredients.map((item) => {
		const li = document.createElement('li')
		li.classList.add('ingredients__item')
		li.textContent = item
		return li
	})

	ingredientsList.append(...ingredientsListItem)
	modalProductDescription.textContent = product.description
	ingredientsCalories.textContent = `${product.weight} кг, калл ${product.calories}`
	modalProductPriceCount.textContent = product.price
	modalProductBtn.dataset.idProduct = product.id

	modalProduct.classList.add('modal_open')
}
