const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
	entry: './src/client/index.js',
	mode: 'development',
	devServer: {
		proxy: {
			'/': {
				target: 'http://localhost:3000/',
			},
		},
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
		libraryTarget: 'var',
		library: 'Client',
	},
	devtool: 'source-map',
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
						plugins: ['@babel/plugin-transform-runtime'],
					},
				},
			},
			{
				test: /\.scss$/,
				loader: ['style-loader', 'css-loader', 'sass-loader'],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({ template: './src/client/views/index.html' }),
		new CleanWebpackPlugin({
			dry: true,
			verbose: true,
			cleanStaleWebpackAssets: false,
			protectWebpackAssets: false,
		}),
		new WorkboxPlugin.GenerateSW(),
	],
};
