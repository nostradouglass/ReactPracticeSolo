
module.exports = {
    entry: './server/app/app.jsx',
    output: {
        path: __dirname,
        filename: './server/public/bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader', 
                query: { 
                    presets: ['react', 'es2015']
                },
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/
            }
        ]
    },
    devtool: 'cheap-module-evel-source-map'
};