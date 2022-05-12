const config = require('../tsconfig.json');

const alias = Object.entries(config.compilerOptions.paths).reduce((acc, [key, value]) => {
  acc[`^${key.replace('/*', '(.*)$')}(.*)$`] = `<rootDir>/${value[0].replace('/*', '$1')}`;
  return acc;
}, {});

module.exports = {
  coverageDirectory: 'jest-coverage',
  errorOnDeprecated: true,
  moduleNameMapper: {
    ...alias,
    '^.+.(css|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)$': 'jest-transform-stub',
  },
  // notify: true,
  // notifyMode: 'change',
  resetMocks: true,
  rootDir: '..',
  snapshotSerializers: ['@emotion/jest/serializer'],
  testEnvironment: 'jest-environment-jsdom',
  testPathIgnorePatterns: ['/dist/', 'node_modules'],
  transform: {
    '^.+\\.[tj]sx?$': ['esbuild-jest', { sourcemap: true }],
    '.+\\.(css|style|less|sass|scss|png|jpg|tff|woff|woff2)$': 'jest-transform-stub',
  },
  transformIgnorePatterns: ['node_modules/(?!react-markdown)/'],
  verbose: false,
};
