const path = require("path");
const bundleTracker = require("webpack-bundle-tracker");

module.exports = {
	mode: 'development',
	entry: {
		imageswitcher: './frontend/imageswitcher.js'
	},
	plugins: [
		new bundleTracker({filename: './webpack-stats.json'}),
	],
	output: {
		filename: '[name].bundle.js',
		path: path.resolve('main/static/bundles')
	}
};
