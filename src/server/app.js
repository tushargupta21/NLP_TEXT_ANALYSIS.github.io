const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const path = require('path');
const cors = require('cors');
let _dataObj = {};

const app = express();
app.use(cors());
app.use(express.static('dist'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
	res.sendFile(path.resolve('dist/index.html'));
});

app.get('/test', (req, res) => {
	res.send({});
});

app.post('/analyze', (req, res) => {
	(async () => {
		_dataObj = await require('./apiCall')(process.env.API_KEY, req.body.link);
		res.send(_dataObj);
	})();
});

/**
 * This exports the app so our test can work with its own instance
 */
module.exports = app;
