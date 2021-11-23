const path = require('path');

module.exports ={
    name:'word-Game-setting',
    mode : 'development', // 실서비스 -> production
    devtool:'eval',     
    resolve:{
        extensions:['.js','.jsx']
    },
    
    entry:{ //  입력
        app:['./client'],
    },
    module:{
        rules:[{
            test: /\.js$|jsx/, // 정규표현식
            loader: 'babel-loader',
            options:{ 
                presets:['@babel/preset-env','@babel/preset-react'],
                plugins:['@babel/plugin-proposal-class-properties']
            }
        }]
    }, 

    output:{ // 출력
        path: path.join(__dirname,'dist'), // 경로를 합쳐줌.
        filename: 'app.js'
    },
};