var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: './src/main.js',
    output: {
        path: './dst',
        filename: 'calendar.js'
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader?sourceMap")
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("styles.css", {
            allChunks: true
        })
    ]
}; 