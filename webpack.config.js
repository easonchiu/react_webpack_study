var webpack = require('webpack');
var opn = require('opn');
var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");


var ENV = process.env.npm_lifecycle_event;
var isTest = ENV === 'test' || ENV === 'test-watch';
var isProd = ENV === 'build';

var ROOT_PATH = path.resolve(__dirname);
var SRC_PATH = path.resolve(ROOT_PATH, 'src');
var MAIN_FILE = path.resolve(SRC_PATH, 'main.jsx');
var DIST_PATH = path.resolve(ROOT_PATH, 'dist');

module.exports = function makeWebpackConfig(){

	var config = {};

	// 页面入口文件
	config.entry = isTest ? {} : {
		'app': MAIN_FILE,
	};


	// 输出文件
	config.output = isTest ? {} : {
		publicPath: isProd ? '/' : '/',
		path: DIST_PATH, // 输出到哪个目录下（__dirname当前项目目录）
		filename: isProd ? '[name].[hash].js' : '[name].bundle.js', // 最终打包生产的文件名
		chunkFilename: '[name].[chunkhash:5].min.js',
	};


	if (isTest) {
        config.devtool = 'inline-source-map';
    } else if (isProd) {
        // config.devtool = 'source-map';
    } else {
        config.devtool = 'eval-source-map';
    }


	// 插件项
	config.plugins = [];
	
	// 自动生成html模板
	config.plugins.push(
		new htmlWebpackPlugin({
			template: 'src/index.html',
			inject: 'body',
			inject: true,
			minify: {
        		removeComments: true,
        		collapseWhitespace: true,
        		removeAttributeQuotes: true
        		// more options:
        		// https://github.com/kangax/html-minifier#options-quick-reference
    		},
    		// necessary to consistently work with multiple chunks via CommonsChunkPlugin
    		chunksSortMode: 'dependency'
		})
	);
	
	// 提取css
	config.plugins.push(
		new ExtractTextPlugin("styles/[name].[hash].css", {allChunks: true})
	);
	// 如果js是从node_modules文件夹引用的，全部打包到vendor里
	config.plugins.push(
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor',
			minChunks: function(module, count){
		        return (
		        	module.resource &&
		        	/\.js$/.test(module.resource) &&
		        	module.resource.indexOf('/node_modules/') != -1
		        )
		    }
		})
	);
	// 提取公共js
	config.plugins.push(
		new webpack.optimize.CommonsChunkPlugin({
      		name: 'manifest',
      		chunks: ['vendor']
    	})
	);
	
	if (isProd){
		// 查找相等或近似的模块，避免在最终生成的文件中出现重复的模块
		config.plugins.push(
			new webpack.optimize.DedupePlugin()
		);
		// js压缩混淆
		config.plugins.push(
			new webpack.optimize.UglifyJsPlugin({
				output: {
	                comments: false, // remove all comments
	            },
	            compress: {
	                warnings: false
	            }
		    })
		);
	}

	// 自动打开浏览器
	if (!isProd) {
		var uri = 'http://localhost:8080';
		opn(uri);
	}

	// 加载器
	config.module = {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel',
				exclude: /node_modules/,
				query: {
					presets: ['es2015']
				}
			},
			{
				test: /\.jsx$/,
				loader: 'babel',
				exclude: /node_modules/,
				query: {
					presets: ['react', 'es2015']
				}
			},
			{
				test: /\.html$/,
				loader: 'html',
				query: {
					minimize: true
				}
			},
			{
				test: /\.scss$/,
				loader: ExtractTextPlugin.extract('style', 'css?minimize&!sass')
			},
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract('style', 'css?minimize')
			},
			{
				test: /\.(png|jpe?g|gif)(\?.*)?$/,
				loader: 'url?limit=8192&name=images/[name].[hash].[ext]',
				query: {
					limit: 10000
				}
			},
			{
				test: /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/,
				loader: 'file?name=images/[name].[hash].[ext]',
				query: {
					limit: 10000
				}
			}
		]
	}

	config.resolve = {
		extensions: ['', '.js', '.jsx', '.scss', '.css']
	}



	return config;
}();