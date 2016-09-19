// When mocha tests run they will ignore our .png files and css
// run tests with this command "mocha --require test/.setup.js --compilers css:css-null-compiler.js"
function noop() {
  return null;
}
// you can add whatever you wanna handle
require.extensions['.styl'] = noop;
require.extensions['.scss'] = noop;
require.extensions['.png'] = noop;