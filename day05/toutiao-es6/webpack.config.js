const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const path = require('path');
module.exports = {
	mode: 'development',
	entry: path.resolve(__dirname, './static/src/index.js'),
	output: {
		path:path.resolve(__dirname,'dist'),
		filename: 'index.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			}
		]
	},
	plugins:[
		new CleanWebpackPlugin()
	],
	watch:true,
	devtool: "inline-source-map",
};
