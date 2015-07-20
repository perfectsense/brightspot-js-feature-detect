System.config({
  defaultJSExtensions: true,
  map: {
  	'babel': '/assets/node/babel-core/browser.js',
  	'bsp-utils': '/assets/bower/bsp-utils/bsp-utils.js',
  	'bsp-feature-detect': '/assets/js/bsp-feature-detect.js',
  	'jquery': '/assets/bower/jquery/dist/jquery.js'
  },
  transpiler: 'babel'
});