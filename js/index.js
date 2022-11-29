const catalogList = document.querySelector('.catalog__list')
const modalProduct = document.querySelector('.modal_product')

const modalProductTitle = document.querySelector('.modal-product__title')
const modalProductDescription = document.querySelector('.modal-product__description')
const modalProductImage = document.querySelector('.modal-product__image')
const ingredientsCalories = document.querySelector('.ingredients__calories')
const modalProductPriceCount = document.querySelector('.modal-product__price-count')
const ingredientsList = document.querySelector('.ingredients__list')

const product = {
	title: 'Бургер Макс',
	image: 'img/megaburger.jpg',
	price: 1000,
	weight: 5000,
	calories: '1500г, ккал 2500',
	description: 'Огромный бургер, съешь сам или поделись с компанией',
	ingredients: ['Пшеничная булочка', 'Мега котлета из говядины', 'Много сыра', 'Листья салата', 'Чипотл'],
}

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
ingredientsCalories.textContent = product.calories
modalProductPriceCount.textContent = product.price

const openModal = ({ target }) => {
	if (target.closest('.product__detail') || target.closest('.product__image')) {
		modalProduct.classList.add('modal_open')
	}
}

const closeModal = ({ target }) => {
	if (target.closest('.modal__close') || target.classList.contains('modal')) {
		modalProduct.classList.remove('modal_open')
	}
}

catalogList.addEventListener('click', openModal)
modalProduct.addEventListener('click', closeModal)
