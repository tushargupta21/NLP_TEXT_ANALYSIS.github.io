/**
 * Helper function to update the ui after the user request an analysis
 *
 * @param {Object} data - Response data from the server
 *
 */

const updateUi = (data) => {
	let resultContainer = document.querySelector('.results__data');
	/**
	 * This will check if the ui has some data in, if yes then this removes it
	 */
	if (resultContainer.hasChildNodes()) {
		resultContainer.innerHTML = '';
	}

	// Check for the status of the api's response.
	/**
	 * This will check for the status of the api's response,
	 * if it's the wrong status, pass the status.msg to be displayd to
	 * the user by the displayError function
	 *
	 * @see https://www.meaningcloud.com/developer/documentation/error-codes
	 */
	if (data.status.code > 200) {
		return Client.displayError(data.status.msg);
	}

	// Extract the desired data from the main object into a new object.
	/**
	 * This will extract values that we need from the response data
	 * it will create a new object from the original data object
	 */
	const desiredData = (({ agreement, subjectivity, confidence, irony }) => ({
		agreement,
		subjectivity,
		confidence,
		irony,
	}))(data);

	/**
	 * This will init a document fragment to update the view
	 */
	let fragment = document.createDocumentFragment();
	/**
	 * This makes an array in the form of [entry, value] from the desiredData obj
	 */
	const dataEntries = Object.entries(desiredData);
	/**
	 * This loops throught the dataEntries array to create li elements
	 * and then append each li to the document fragment
	 */
	for (const [entry, state] of dataEntries) {
		let li = document.createElement('li');
		li.innerHTML = `<span style="color: hotpink;">${entry.toUpperCase()}:</span> ${state}`;
		fragment.appendChild(li);
	}
	/**
	 * This appends the fragment to the DOM
	 */
	resultContainer.appendChild(fragment);
};

export { updateUi };
