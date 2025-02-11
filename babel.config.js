module.exports = {
  presets: [
    'babel-preset-expo',
    '@babel/preset-react',
    '@babel/preset-typescript',
    'module:metro-react-native-babel-preset',
    "@babel/preset-env",
  ],
  env: {
    test: {
      plugins: ['metro-react-native-babel-preset']
    }
  }
};
