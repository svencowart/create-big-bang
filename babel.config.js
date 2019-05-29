module.exports = function babelConfig(api) {
  api.cache(true);

  const presets = [
    [
      '@babel/preset-env',
      {
        modules: false,
        targets:
          'last 2 major versions and > 0.25%, ie 11, not op_mini all, not dead, maintained node versions',
      },
    ],
  ];
  const plugins = [];
  const env = {
    test: {
      presets: ['@babel/preset-env'],
    },
  };

  return {
    presets,
    plugins,
    env,
  };
};
