const path = require('path');
const webpack = require('webpack');

/*
 * SplitChunksPlugin is enabled by default and replaced
 * deprecated CommonsChunkPlugin. It automatically identifies modules which
 * should be splitted of chunk by heuristics using module duplication count and
 * module category (i. e. node_modules). And splits the chunks…
 *
 * It is safe to remove "splitChunks" from the generated configuration
 * and was added as an educational example.
 *
 * https://webpack.js.org/plugins/split-chunks-plugin/
 *
 */

const HtmlWebpackPlugin = require('html-webpack-plugin');

/*
 * We've enabled HtmlWebpackPlugin for you! This generates a html
 * page for you when you compile webpack, which will make you start
 * developing and prototyping faster.
 *
 * https://github.com/jantimon/html-webpack-plugin
 *
 */

module.exports = {
	// production 預定
	mode: 'development',

	entry: {
		js: './src/js.ts',
		css: './src/css.ts'
	},

	output: {
		filename: '[name].[chunkhash].js',
		path: path.resolve(__dirname, 'dist')
	},

	// ProgressPlugin 賊好用
	plugins: [
		new webpack.ProgressPlugin(),
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
				loader: [
					'pug-loader'
				]
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
		extensions: ['.tsx', '.ts', '.js', '.json', '.css'],
		alias: {
			libs: path.resolve(__dirname, 'src/libs')
		}
	}
};