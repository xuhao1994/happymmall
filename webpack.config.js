/*
* @Author: xuhao1994
* @Date:   2017-11-24 14:00:46
* @Last Modified by:   xuhao1994
* @Last Modified time: 2017-11-24 15:23:58
*/

 var webpack = require('webpack');
 var config = {
	entry:{
		'common':['./src/page/common/index.js'],
		'index':['./src/page/index/index.js'],
		'login':['./src/page/login/index.js']
	},
	output:{
		path:'./dist',
		filename:'js/[name].js'
	},
	externals:{
		'jquery':'window.jQuery'
	},
	plugins:[
		new webpack.optimize.CommonsChunkPlugin({
			name:'common',
			filename:'js/base.js'
		})
	]
}

module.exports = config;