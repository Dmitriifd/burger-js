import {
	modalProductTitle,
	modalProductDescription,
	modalProductImage,
	ingredientsCalories,
	modalProductPriceCount,
	ingredientsList,
	modalProduct,
} from './elements.js'

export const openModal = (product) => {
	const ingredientsListItem = product.ingredients.map((item) => {
		const li = document.createElement('li')
		li.classList.add('ingredients__item')
		li.textContent = item
		return li
	})

	modalProductTitle.textContent = product.title
	modalProductImage.src = product.image
	ingredientsList.innerHTML = ''
	ingredientsList.append(...ingredientsListItem)
	modalProductDescription.textContent = product.description
	ingredientsCalories.textContent = `${product.weight} кг калл ${product.calories} `
	modalProductPriceCount.textContent = product.price

	modalProduct.classList.add('modal_open')
}
