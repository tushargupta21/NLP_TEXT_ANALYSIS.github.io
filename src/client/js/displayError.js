/**
 * Helper function to dispay errors to the user on the ui
 *
 * @param {String} error
 */
const displayError = (error) => {
	document.querySelector('.error').innerHTML = `Oops! ${error}`;
	document.querySelector('#text').classList.toggle('invalid');
};

export { displayError };
