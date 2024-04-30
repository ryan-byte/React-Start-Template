const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');


module.exports= (env,argv) => {
    let mode = argv.mode;
    return {
        entry: "./index.js", 
    
        plugins: [
            new HtmlWebpackPlugin({
              template: 'public/index.html',
            }),
            new Dotenv({
                path: `./env/${mode}.env`
            }),
        ],
        output: {
            path: path.resolve(__dirname, "build"),
            filename: "static/[contenthash].js",
            publicPath: '/'
        },
        target: "web",
        devServer: {
            port: "9500",
            static: ["./build"],
            open: true,
            hot: true ,
            liveReload: true,
            historyApiFallback: true
        },
        resolve: {
            extensions: ['.js','.jsx','.json'] 
        },
        module:{
            rules: [
                {
                    test: /\.(js|jsx)$/,    //kind of file extension this rule should look for and apply in test
                    exclude: /node_modules/, //folder to be excluded
                    use:  'babel-loader' //loader which we are going to use
                },
                {
                    test: /\.css$/, // Add a rule to handle CSS files
                    use: ['style-loader', 'css-loader', 'postcss-loader']
                },
                {
                    test: /\.(jpg|jpeg)$/, // Match JPG and JPEG files
                    use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]', // Output file name
                        outputPath: 'images/', // Output directory (relative to your output path)
                    },
                    },
                },
        
            ]
        }
    }
}