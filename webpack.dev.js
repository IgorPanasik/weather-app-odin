import { merge } from 'webpack-merge';
import { commonConfig } from './webpack.common.js';

const devConfig = merge(commonConfig, {
    mode: 'development',
    devtool: 'eval-cheap-module-source-map',
    output: {
        filename: 'main.js',
    },

    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },

    devServer: {
        static: './dist',
        hot: true,
        port: 3000,
        open: true,
        watchFiles: ['./src/template.html'],
    },
});

export default { ...devConfig };
