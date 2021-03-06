const mix = require('laravel-mix')
const path = require('path')

mix.react('resources/js/app.js', 'public/js')
   .sass('resources/sass/app.scss', 'public/css')
   .webpackConfig({
     output: { chunkFilename: 'js/[name].js?id=[chunkhash]' },
     resolve: {
       alias: {
         '@': path.resolve('resources/js'),
       },
     },
   })
   .babelConfig({
       plugins: ['@babel/plugin-syntax-dynamic-import']
   });

mix.copyDirectory('node_modules/ace-builds/src-noconflict/', 'public/ace/');