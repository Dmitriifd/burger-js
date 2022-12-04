import { clearCart } from './cart.js';
import { modalDeliveryContainer, modalDeliveryForm } from './elements.js';

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
		
		fetch('https://s63895b67c5356b25a2feb4a8.mockapi.io/order', {
			method: 'POST',
			body: JSON.stringify(data),
		})
			.then((response) => response.json())
			.then((data) => {
				clearCart()
				modalDeliveryContainer.innerHTML = `
					<h2>Спасибо за заказ</h2>
					<h3>Ваш номер заказа ${data.id}</h3>
					<p>С вами в ближайшее время свяжется наш менеджер ${data.manager}</p>
				`

				modalDeliveryForm.reset()
				checkDelivery()
			}).catch((e) => {
				console.log(e.message);
			})
	})
}