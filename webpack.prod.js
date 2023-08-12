const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssestsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const path = require('path');

module.exports = {
	mode: 'production',
	entry: './src/client/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
		libraryTarget: 'var',
		library: 'Client',
	},
	optimization: {
		minimize: true,
		minimizer: [new OptimizeCssAssestsPlugin({}), new TerserPlugin({})],
	},
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
				loader: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'src/client/views/index.html',
		}),
		new MiniCssExtractPlugin(),
		new WorkboxPlugin.GenerateSW(),
	],
};
