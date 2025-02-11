module.exports = {
  presets: [
    'babel-preset-expo', // For React Native with Expo (if using Expo)
    'module:metro-react-native-babel-preset', // Essential for React Native apps
    '@babel/preset-react',
  ],
  env: {
    test: {
      plugins: ['metro-react-native-babel-preset'], // Include the plugin in test environment
    },
  },
};
