module.exports = {
    entry: {
        index:'./src/index.js',
        greeting:'./src/greeting.js'
    },

    output: {
        path: __dirname + '/public/',
        filename:'bundle.js'
    },

    devServer:{
        inline: true,
        port: 7777,
        contentBase: __dirname + '/public/'
    },

    module: {
        loaders:[
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    cacheDirectory: true,
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\-tpl.html$/,
                loader: 'handlebars'
            }
        ]
    },

    devtool: '#inlne-source-map'
};