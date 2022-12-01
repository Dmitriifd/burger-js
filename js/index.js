import { catalogList, modalProduct } from './elements.js'
import { navigationListController } from './navigationListController.js'
import { openModal } from './openModal.js'
import { closeModal } from './closeModal.js'
import { renderListProduct } from './renderListProduct.js'


catalogList.addEventListener('click', ({ target }) => {
	if (target.closest('.product__detail') || target.closest('.product__image')) {
		const id = target.closest('.product').dataset.idProduct
		openModal(id)
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
