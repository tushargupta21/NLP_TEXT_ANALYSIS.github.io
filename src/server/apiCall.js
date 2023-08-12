const fetch = require('node-fetch');
/**
 * Helper function for GETing data from the API with fetch.
 *
 * @param {Number} key - The API key
 * @param {String} link - The user input coming from the req body
 * @return {Object} - Response body from api
 */
module.exports = async (key, link) => {
	let hostname = `https://api.meaningcloud.com`;
	let path = `/sentiment-2.1?key=${key}&url=${link}&model=general&lang=en`;
	const response = await fetch(`${hostname}${path}`);
	const data = await response.json();
	try {
		return data;
	} catch (error) {
		return error;
	}
};
