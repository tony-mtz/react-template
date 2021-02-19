const path = require('path');
module.exports = {
    mode: 'development',  //developmentm, production(ugl & min) 
    entry: ['./client/index.js'],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    devServer:{
        host: 'localhost',
        port: 8080,
        contentBase: path.join(__dirname, 'build'),
        publicPath: '/',  //front
        historyApiFallback: true,
        inline: true,
        headers: {'Access-Control-Allow-Origin': '*'},
        proxy:{              
            
            '/':{
                target: 'http://localhost:3000',
                secure: false,
                changeOrigin: true
                // pathRewrite: { '^/api': '' }
            },
            '/assets/**':{
                target: 'http://localhost:3000',
                secure: false,
                changeOrigin: true
            }             
        },
        hot: true
    },
    module:{
        rules:[
          {
              test: /\.jsx?/,
              exclude: /node_modules/,
              loader: 'babel-loader',
              query:{
                presets: ["@babel/preset-env", "@babel/preset-react"]
              }
          }
        //   {
        //       test: /\.s[ac]ss$/i, //  --> /\.s?css/

        //       use: ["style-loader", "css-loader", "sass-loader"]

        //   }
            
        ]
    },
    //plugins: //[
    //     new HtmlWebpackPlugin({
    //       template: './client/index.html',
    //     }),
    //   ],
    resolve: {
      // Enable importing JS / JSX files without specifying their extension
      extensions: ['.js', '.jsx'],
    },
};