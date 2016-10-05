module.exports = function (config) {
  config.set({
    basePath: "",
    files: [
      "node_modules/systemjs/dist/system.src.js",
      "node_modules/systemjs/dist/system-polyfills.js",
      "node_modules/core-js/client/shim.min.js",
      "node_modules/zone.js/dist/zone.js",
      "node_modules/zone.js/dist/proxy.js",
      "node_modules/zone.js/dist/sync-test.js",
      "node_modules/zone.js/dist/async-test.js",
      "node_modules/zone.js/dist/jasmine-patch.js",
      "node_modules/reflect-metadata/Reflect.js",
      {pattern: "node_modules/rxjs/**/*.js", included: false, watched: false},
      {pattern: "node_modules/@angular/**/*.js", included: false, watched: false},
      {pattern: "systemjs.config.js", included: false, watched: false},
      "karma-test-shim.js",
      {pattern: "app/*.js", included: false, watched: true}
    ],
    frameworks: ["jasmine"],
    browsers: ["PhantomJS"]
  });
};