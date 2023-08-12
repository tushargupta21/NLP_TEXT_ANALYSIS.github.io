/**
 * Helper function for POSTing user data to the server
 * @param {Object} data - Holds the user's input
 * @param {String} path - The server endpoint
 * @returns {Object} - Response body from the server
 */
const getData = async (data = {}, path = '') => {
	const response = await fetch(path, {
		method: 'POST',
		credentials: 'same-origin',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	});
	try {
		const data = await response.json();
		return data;
	} catch (error) {
		return error;
	}
};

export { getData };
