// eslint-disable-next-line import/no-extraneous-dependencies
const { addBabelPlugin, override } = require('customize-cra');

module.exports = override(
  addBabelPlugin([
    'babel-plugin-root-import', // Plugin adicionado
    {
      rootPathSuffix: 'src', // Pasta que estou colocando a maiorida do código
    },
  ])
);
