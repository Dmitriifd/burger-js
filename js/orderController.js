import { clearCart } from './cart.js'
import { modalDelivery, modalDeliveryContainer, modalDeliveryForm } from './elements.js'

export const orderController = (getCart) => {
	const checkDelivery = () => {
		if (modalDeliveryForm.format.value === 'pickup') {
			modalDeliveryForm['address-info'].classList.add('modal-delivery__fieldset-input_hide')
		}

		if (modalDeliveryForm.format.value === 'delivery') {
			modalDeliveryForm['address-info'].classList.remove('modal-delivery__fieldset-input_hide')
		}
	}

	modalDeliveryForm.addEventListener('change', checkDelivery)

	modalDeliveryForm.addEventListener('submit', (e) => {
		e.preventDefault()
		const formData = new FormData(modalDeliveryForm)
		const data = Object.fromEntries(formData)
		data.order = getCart()

		fetch('https://reqres.in/api/users', {
			method: 'POST',
			body: JSON.stringify(data),
		})
			.then((response) => response.json())
			.then((data) => {
				clearCart()
				modalDeliveryContainer.innerHTML = `
					<h2>Спасибо за заказ</h2>
					<h3>Ваш номер заказа ${data.id}</h3>
					<p>С вами в ближайшее время свяжется наш менеджер</p>
				`
				setTimeout(() => {
					modalDelivery.classList.remove('modal_open')
				}, 2000)
				// modalDeliveryForm.reset()
				// checkDelivery()
			})
			.catch((e) => {
				console.log(e.message)
			})
	})
}
