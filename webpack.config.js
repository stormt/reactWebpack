var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
const extractTxtplugin = new ExtractTextPlugin({
    filename: '[name].css',
});

module.exports = {
	entry:{
    'app/Foods/index':'./src/app/Foods/index.js',
    'app/Sight/sight':'./src/app/Sight/sight.js',
    'publicResource/vender/vendor':['react','react-dom']
	},
	//devtool: 'cheap-eval-source-map',
	output:{
		filename:'[name].js',
		path:path.resolve(__dirname,'dist'),
		publicPath:'/assets/',
    chunkFilename: '[id].bundle.js'
	},
	devServer:{
		contentBase:path.join(__dirname,'dist'),
		port:4000,
		compress:true,
		hot:true
	},

	module:{
        rules:[
          {
             test:/\.css$/,
             use:extractTxtplugin.extract({
                use:[{
    	            loader: 'css-loader',
    	            options: {
    	            	modules: true,
    	        	},
          		},'postcss-loader'],
              fallback: 'style-loader',
            })
	        },
          // {
          //     test:/\.less$|\.css$/,
          //     use:['style-loader',
          //           {
        	//             loader: 'css-loader',
        	//             options: {
        	//             	modules: true,
      	  //       	    }
          //          },
          //           'less-loader',
          //           'postcss-loader'
          //         ]
          // },
        {
            test:/\.jsx?$/,
            exclude:/node_modules/,
            use:{
                loader:'babel-loader'
            }
        }
    ]
	},

	plugins: [
		// new webpack.optimize.UglifyJsPlugin({
		// 	exclude:/foods.js/,
		// 	mangle:{
		// 		except:['alert','console']
		// 	}
		// }),
		new webpack.optimize.CommonsChunkPlugin({
			name:'commonvendor',
			filename:'vendor.js',
			minChunks:2
		}),
		new webpack.BannerPlugin({
			banner:'this is written by lhb'
		}),
		extractTxtplugin,
		new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
        minify:false


    })
 	]
};
