/**
 * This will validate the url against a regex
 *
 * @param {String} url - The value of the input field
 * @returns {Boolean}
 */
const isUrlValid = (url) => {
	let regex = /^(http|https):\/\/[^ "]+$/;
	return regex.test(url);
};

export { isUrlValid };
