const path              = require("path")
const webpack           = require('webpack')
const combineLoaders    = require('webpack-combine-loaders');
const autoprefixer      = require('autoprefixer');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const config = {
    context: path.resolve('./src'),

    entry: './index',

    output: {
        path: path.resolve('./server/static/'),
        filename: "[name].js",
    },
    
    postcss: [
        autoprefixer({
          browsers: ['last 3 versions', 'safari >= 8', 'ie > 8'],
          flexbox: 'no-2009',
          remove: false
        })
    ],

    module: {
        loaders: [
            { 
                test: /\.jsx?$/, 
                exclude: /node_modules/, 
                loader: 'babel-loader', 
                query: { presets:['react','es2015','stage-2'] }
                // stage 2 so we can use JS spread operator 
            }, 
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract("style-loader", combineLoaders([
                        {
                            loader: 'css-loader?-autoprefixer&localIdentName=[name]__[local]',
                        },
                        {
                            loader: 'postcss-loader',
                        },
                        {
                            loader: 'sass-loader',
                        }
                    ])
                )
            }
        ],
    },
    plugins: [
        new ExtractTextPlugin('[name].css', {allChunks: true}),
    ],
    resolve: {
        root: [
            path.resolve('./src'),
        ],
        modulesDirectories: ['node_modules'],
        extensions: ['', '.js', '.jsx','.scss'],
    },
}

module.exports = config