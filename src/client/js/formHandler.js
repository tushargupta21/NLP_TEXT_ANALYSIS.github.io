/**
 * Handles the form submition
 * @param {SubmitEvent} event
 */

const formHandler = (event) => {
	event.preventDefault();
	/**
	 * This will activate the spinner
	 */
	event.target.classList.add('loading');
	/**
	 * This will disable any further interaction with the button element
	 */
	event.target.setAttribute('disabled', '');
	let url = document.querySelector('#text').value;
	/**
	 * This will check if the user's input is valid or not
	 */
	if (Client.isUrlValid(url)) {
		/**
		 * This will handles calling the function getData asycronously
		 * if the input is valid
		 */
		(async () => {
			let response = await Client.getData({ link: url }, '/analyze');
			try {
				event.target.classList.remove('loading');
				event.target.removeAttribute('disabled');
				// Update UI
				Client.updateUi(response);
			} catch (error) {
				Client.displayError(error);
			}
		})();
	} else {
		/**
		 * This will stop the spinner
		 */
		event.target.classList.remove('loading');
		/**
		 * This will activate the button
		 */
		event.target.removeAttribute('disabled');
		/**
		 * This call displayError to update the ui with the error of invalid input
		 */
		Client.displayError('URL not valid!');
	}
};

export { formHandler };
