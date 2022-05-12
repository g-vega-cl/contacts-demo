const TerserPlugin = require('terser-webpack-plugin');
const {merge} = require('webpack-merge');
const common = require('./common.config');

module.exports = merge(common, {
	devtool: 'hidden-source-map',
	mode: 'production',
	optimization: {
		minimize: true,
		minimizer: [
			new TerserPlugin({
				terserOptions: {
					mangle: {
						reserved: ['__', '__n']
					}
				}
			})
		]
	},
})