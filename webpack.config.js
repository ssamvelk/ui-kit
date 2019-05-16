const path = require('path')                            // webpack ищет точку выхода с корня (если винда то диск C:/...) // А модуль path решает эту проблему
                            
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const HtmlWebpackPlugin = require('html-webpack-plugin')

const CleanWebpackPlugin = require('clean-webpack-plugin');

const webpack = require('webpack');



module.exports = {
    
    context: path.resolve(__dirname, 'src'),

    entry: {
        app: './index.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: ''                          
    },
    module: { 
        rules : [
            {
            test: /\.js$/,
            loader: 'babel-loader',  
            exclude: '/node_modules/'
            },
            //--------------------------------PUG
            { 
                test: /\.pug$/,
                use:[
                    //{loader: 'file-loader'},    //, options{name: 'index.html'}
                    {loader: 'html-loader',},
                    {loader: 'pug-html-loader', options: { data: {} }}
                ]
    
            },
            //-------------------------------CSS
            {
                test: /\.css$/,
                loaders: ["style-loader","css-loader"]
              },
            //-------------------------------SCSS
            {
            test: /\.scss$/,
            use: [
                'style-loader',
                //{loader: 'file-loader'},
                MiniCssExtractPlugin.loader,
                {
                    loader: "css-loader",
                    options:{ sourceMap: true }
                }, {
                    loader: "postcss-loader",
                    options:{ sourceMap: true, config: {path: 'src/js/postcss.config.js'} }
                }, {
                    loader: "sass-loader",
                    options:{ sourceMap: true }
                }
            ]
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,     //test: /\.(png|svg|jpg|gif)$/,
                use: [
                        {
                            loader:'file-loader',
                            //exclude: ['/src/fonts/'],  //exclude:['/src/fonts'],
                            options: {
                                name: 'img/[name].[ext]',
                                exclude: ['/src/fonts/']
                                //outputPath: 'img/'         //'img/'
                            },
                        },
                        {   
                            loader: 'image-webpack-loader',
                            options: {
                              mozjpeg: {
                                progressive: true,
                                quality: 65
                              },
                              // optipng.enabled: false will disable optipng
                              optipng: {
                                enabled: false,
                              },
                              pngquant: {
                                quality: '65-90',
                                speed: 4
                              },
                              gifsicle: {
                                interlaced: false,
                              },
                              // the webp option will enable WEBP
                              webp: {
                                quality: 75
                              }
                            }
                        },
                ]
            },
            
            //--------------------------------FONTS
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/',
                        exclude: ['/src/img/']
                    }
                }]
            },
            {
                test: /\.(mp4)$/,
                use: [{
                    loader:'file-loader',
                            options: {
                                name: 'video/[name].[ext]',
                            },
                }]
         }
        ] //-----------rules
    },  //-----------modules

    devServer: { //настройки девсервера
        overlay: true // показ ошибки в браузере
    },

    plugins: [
        new CleanWebpackPlugin( 'dist', {}),    //чистка dist перед сборкой

        new MiniCssExtractPlugin({
          filename: '[name].css',
          //chunkFilename: "[id].css"
        }),

        new HtmlWebpackPlugin({
            template: "pug/index.pug",
            filename:  'index.html',
            //inject: false
          }),
        
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery'",
            "window.$": "jquery"
        })
      ],

      devtool: 'eval',
};