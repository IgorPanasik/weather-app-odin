import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { merge } from 'webpack-merge';
import { commonConfig } from './webpack.common.js';

const prodConfig = merge(commonConfig, {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js',
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
        ],
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: 'styles/[name].[contenthash].css',
        }),
    ],

    optimization: {
        minimizer: [`...`, new CssMinimizerPlugin()],
        splitChunks: {
            chunks: 'all',
        },
        runtimeChunk: 'single',
    },
});

export default { ...prodConfig };
