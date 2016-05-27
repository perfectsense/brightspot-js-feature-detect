System.config({
  defaultJSExtensions: true,
  map: {
  	'babel': '/assets/node/babel-core/browser.js',
  	'bsp-utils': '/assets/bower/bsp-utils/bsp-utils.js',
  	'bspFeatureDetect': '/assets/js/BspFeatureDetect.js',
  	'jquery': '/assets/bower/jquery/dist/jquery.js'
  },
  transpiler: 'babel'
});