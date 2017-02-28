const $ = require('dekko');

$('dist')
  .isDirectory()
  .hasFile('nestia-antd.css')
  .hasFile('nestia-antd.min.css')
  .hasFile('nestia-antd.js')
  .hasFile('nestia-antd.min.js');

// eslint-disable-next-line
console.log('`dist` directory is valid.');

