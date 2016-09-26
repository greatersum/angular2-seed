module.exports = function (config) {
  config.set({
    basePath: "",
    files: [
      "node_modules/systemjs/dist/system.src.js",
      "app/*.js",
      "node_modules/core-js/client/shim.min.js",
      "node_modules/zone.js/dist/zone.js",
      "node_modules/reflect-metadata/Reflect.js",
      {pattern: "systemjs.config.js", included: false, watched: false}
        ],
    frameworks: ["jasmine"],
    browsers: ["PhantomJS"]
  });
};