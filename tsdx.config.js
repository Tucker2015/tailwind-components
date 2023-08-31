// tsdx.config.js

const postcss = require('rollup-plugin-postcss');

module.exports = {
  rollup(config, options) {
    config.plugins.push(
      postcss({
        plugins: [require('tailwindcss'), require('autoprefixer')],
        // If you want to extract the CSS to a dedicated file and not include it in your JS bundle.
        // extract: options.writeMeta ? 'dist/mylibraryname.css' : false,
        // If you want CSS modules (optional).
        // modules: true,
      })
    );
    return config;
  },
};
