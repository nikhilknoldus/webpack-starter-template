var webpack = require('webpack');

module.exports = {

entry : "./app.js",
output: {
	path: './dist',
	filename: 'app.bundle.js'
},

module:{
	loaders:[

	{ test: /\.css$/, loader: "style!css"},
    
    { test: /\.scss$/, loaders: ["style-loader", "css-loader", "sass-loader"]}
	
	]
},
resolve: {extensions: ['', '.js', '.ts']},
};

