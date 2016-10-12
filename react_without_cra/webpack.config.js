var webpack = require('webpack');


module.exports = {
    entry: "./my_code/main.js",
    output: {
        path: "generated_code",
        filename: "bundle.min.js"
    },
    devServer:{
        inline:true,
        contentBase: './my_code',
        port: 3000
    },
    module: {
        loaders: [
            { 
                test: /\.scss$/,
                loader: "style-loader!css-loader!sass-loader"
            },
            { 
                test: /\.js$/,
                exclude:/(node_modules)/,
                loader: "babel",
                query: {
                    presets: ['es2015', 'react']
                }
            },
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({minimize: true})
    ]
};