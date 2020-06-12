module.exports = {
    entry: ['@babel/polyfill', './desafios-modulo-2/src/main.js'],
    output: {
        path: __dirname + '/desafios-modulo-2/public',
        filename: 'bundle.js',
    },
    devServer: {
        contentBase: __dirname + '/desafios-modulo-2/public'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
}