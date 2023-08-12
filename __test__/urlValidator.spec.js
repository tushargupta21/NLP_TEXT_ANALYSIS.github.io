import { isUrlValid } from '../src/client/js/urlValidator.js';

describe('Validate url', () => {
	test('it should validate the url', () => {
		const input = 'http://goo gle.com';
		const output = false;
		expect(isUrlValid(input)).toEqual(output);
	});
});
