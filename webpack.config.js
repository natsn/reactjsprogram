var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
	template: __dirname + '/app/index.html',
	filename: 'index.html',
	inject: 'body'
});

module.exports = {
	entry: [
		'./app/index.js'
	],
	loaders: [
		{test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'}
	],
	output:{
		filename: 'app.js',
		path: __dirname + '/dist/'
	},
	plugins: [HtmlWebpackPluginConfig]
};