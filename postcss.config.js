module.exports = {
    plugins: [
        require('autoprefixer'),
        require('postcss-preset-env')({
            stage:1,
        }),
        require('precss'),
        require('cssnano')({
            preset:'default',
        }),
    ]
};