let mix = require('laravel-mix');

// ensure we make jQuery available to all modules
mix.autoload({
   jquery: ['$', 'window.jQuery']
});

//mix.js('src/app.js', 'dist').setPublicPath('dist');
