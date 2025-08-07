import CopyWebpackPlugin from 'copy-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const commonConfig = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: 'images/[hash][ext][query]',
        clean: true,
    },

    resolve: {
        extensions: ['.js', '.json'],
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/template.html',
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: './src/assets/images/favicon/', to: 'favicon/' },
            ],
        }),
    ],

    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader',
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'images/[hash][ext][query]',
                },
            },

            {
                test: /\.(mp4)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'video/[hash][ext][query]',
                },
            },

            {
                test: /\.(woff2?)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[name][ext][query]',
                },
            },
        ],
    },
};
