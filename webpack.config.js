const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	mode: 'development',

	entry: {
		js: './src/js.ts',
		css: './src/css.ts'
	},

	output: {
		filename: '[name].[chunkhash].js',
		path: path.resolve(__dirname, 'dist')
	},

	// ProgressPlugin 👍
	plugins: [
		new webpack.ProgressPlugin(),
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: 'src/views/index.pug'
		})
	],

	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/,
				loader: 'ts-loader',
				include: [path.resolve(__dirname, 'src')],
				exclude: [/node_modules/]
			},
			{
				test: /\.css?$/,
				loader: [
					'style-loader',
					'css-loader'
				]
			},
			{
				test: /\.pug$/,
				loader: 'pug-loader'
			},
			// Images
			{
				test: /\.(jpg|png|gif)$/,
				loader: 'file-loader'
			}
		]
	},

	optimization: {
		splitChunks: {
			cacheGroups: {
				vendors: {
					priority: -10,
					test: /[\\/]node_modules[\\/]/
				}
			},

			chunks: 'async',
			minChunks: 1,
			minSize: 30000,
			name: true
		}
	},

	// For Developments
	devServer: {
		open: true
	},

	resolve: {
		extensions: [
			'.ts', '.js',
			'.json', '.css',
			'.jpg', '.png'
		],
		alias: {
			libs: path.resolve(__dirname, 'src/libs')
		}
	}
};
