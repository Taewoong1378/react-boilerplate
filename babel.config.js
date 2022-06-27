module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['@babel/preset-env', '@babel/preset-react'],
    plugins: [
      '@babel/plugin-transform-runtime',
      'babel-plugin-styled-components',
      [
        require.resolve('babel-plugin-module-resolver'),
        {
          root: ['.'],
          alias: {
            '@components': './src/components',
            '@constants': './src/constants',
            '@config': './src/config',
            '@assets': './src/assets',
            '@hooks': './src/hooks',
            '@styles': './src/styles',
            '@types': './src/types',
            '@themes': './src/themes',
            '@util': './src/util',
            '@pages': './src/pages',
          },
        },
      ],
    ],
  };
};
