const withCSS = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');
const withOptimizedImages = require('next-optimized-images');

module.exports = withCSS({
    cssLoaderOptions: {
      url: false
    }
  });


module.exports = withSass({
    cssModules: true
  });
  
  module.exports = withOptimizedImages( { } );