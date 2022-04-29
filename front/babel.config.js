module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['@babel/preset-env', '@babel/preset-react'],
    plugins: [
      '@babel/plugin-transform-runtime',
      ['import', 'syntax-dynamic-import'],
      [
        'babel-plugin-styled-components',
        {
          ssr: true,
          displayName: true,
          preprocess: false,
        },
      ],
      // ['transform-remove-console', { exclude: ['error', 'warn'] }],
      [
        'module-resolver',
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
