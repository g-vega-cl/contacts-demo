const path = require('path');
const config = require('./tsconfig.json');

const alias = Object.entries(config.compilerOptions.paths).reduce((acc, [key, url]) => {
  acc[key.replace('/*', '')] = path.resolve(__dirname, url[0].replace('/*', ''));
  return acc;
}, {});

module.exports = { alias };
