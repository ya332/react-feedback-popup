var path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/components/index.js',
    output: {
        path: path.resolve('build'),
        filename: 'index.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: 'babel-loader'
            }
        ]
	},
	externals: {  // this line is just to use the React dependency of our parent-testing-project instead of using our own React.
		react: {
			root: 'React',
			commonjs2: 'react',
			commonjs: 'react',
			amd: 'react',
			umd: 'react',
		},
		'react-dom': {
			root: 'ReactDOM',
			commonjs2: 'react-dom',
			commonjs: 'react-dom',
			amd: 'react-dom',
			umd: 'react-dom'
		}
	}
}