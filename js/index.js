import { createCardProduct } from './createCardProduct.js'
import { catalogList, modalProduct } from './elements.js'
import { navigationListController } from './navigationListController.js'
import { openModal } from './openModal.js'
import { closeModal } from './closeModal.js'
import { renderListProduct } from './renderListProduct.js'

const burgerMax = {
	title: 'Бургер Макс',
	image: 'img/megaburger.jpg',
	price: 1000,
	weight: 5000,
	calories: 2500,
	description: 'Огромный бургер, съешь сам или поделись с компанией',
	ingredients: ['Пшеничная булочка', 'Мега котлета из говядины', 'Много сыра', 'Листья салата', 'Чипотл'],
}

const item = createCardProduct(burgerMax)
catalogList.append(item)

catalogList.addEventListener('click', ({ target }) => {
	if (target.closest('.product__detail') || target.closest('.product__image')) {
		openModal(burgerMax)
	}
})

modalProduct.addEventListener('click', ({ target }) => {
	if (target.closest('.modal__close') || target.classList.contains('modal')) {
		closeModal()
	}
})

const init = () => {
	renderListProduct()
	navigationListController(renderListProduct)
}

init()
