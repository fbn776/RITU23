SystemJS.config({
	baseURL: 'https://unpkg.com/',
	defaultExtension: true,
	/*	packages: {
			".": {
				main: './app.js',
				defaultExtension: 'js'
			}
		},*/
	meta: {
		'*.js': {
			'babelOptions': {
				react: true
			}
		},
		'*.jsx': {
			'babelOptions': {
				react: true
			},
		},
		'*.css': {
			loader: 'css'
		},
		'*.png': {
			loader: 'image'
		}
	},
	map: {
		'plugin-babel': 'systemjs-plugin-babel@latest/plugin-babel.js',
		'systemjs-babel-build': 'systemjs-plugin-babel@latest/systemjs-babel-browser.js',
		'react': 'react@17.0.1/umd/react.development.js',
		'react-dom': 'react-dom@17.0.1/umd/react-dom.development.js',
		css: './libs/css.js',
		image: './libs/image.js'
	},
	transpiler: 'plugin-babel'
});

SystemJS.import('./pages/app.jsx')
	.catch(console.error.bind(console));