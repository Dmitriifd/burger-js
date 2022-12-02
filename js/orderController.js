import { modalDeliveryForm } from './elements.js';

export const orderController = (getCart) => {
	modalDeliveryForm.addEventListener('change', () => {
		if (modalDeliveryForm.format.value === 'pickup') {
			modalDeliveryForm['address-info'].classList.add('modal-delivery__fieldset-input_hide')
		}

		if (modalDeliveryForm.format.value === 'delivery') {
			modalDeliveryForm['address-info'].classList.remove('modal-delivery__fieldset-input_hide')
		}
	})

	modalDeliveryForm.addEventListener('submit', (e) => {
		e.preventDefault()
		const formData = new FormData(modalDeliveryForm)
		const data = Object.fromEntries(formData)
		data.order = getCart()
		
		fetch('https://63895b67c5356b25a2feb4a8.mockapi.io/order', {
			method: 'POST',
			body: JSON.stringify(data),
		})
			.then((response) => response.json())
			.then((data) => console.log(data))
	})
}