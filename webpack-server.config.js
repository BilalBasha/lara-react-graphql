const mix = require('laravel-mix')
const path = require('path')

mix.js('resources/graphql/index.js', 'public/graphql');