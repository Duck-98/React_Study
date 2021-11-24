const path = require('path');
const { webpack } = require('webpack');
const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');
const Refreshwebpack = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports ={
    name:'word-Game-setting',
    mode : 'development', // 실서비스 -> production
    devtool:'eval',     
    resolve:{
        extensions:['.js','.jsx']
    },
    
    entry:{ //  입력
        app:'./client',
    },
    module:{
        rules:[{
            test: /\.js$|jsx/, // 정규표현식
            loader: 'babel-loader',
            options:{ 
                presets:[
                ['@babel/preset-env',{
                    targets:{
                        browsers:['> 1% in KR'],
                    },
                    debug:true,
                }],
                '@babel/preset-react',
                ],
                plugins:['@babel/plugin-proposal-class-properties','react-refresh/babel']
            }
        }]
    },
    plugins:[
        new LoaderOptionsPlugin({debug:true}),
        new Refreshwebpack({overlay:false}),
    ], 
    output:{ // 출력
        path: path.join(__dirname,'dist'), // 경로를 합쳐줌.
        filename: 'app.js',     
    },
    devServer: {
        devMiddleware: { publicPath: '/dist' },
        static: { directory: path.resolve(__dirname) },
        hot: true
      }
};