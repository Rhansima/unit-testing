module.exports = {
  presets: [
    'babel-preset-expo', // Expo preset
    '@babel/preset-react', // React preset
    '@babel/preset-typescript', // TypeScript preset
    'module:metro-react-native-babel-preset', // Metro React Native preset
    '@babel/preset-env', // Modern JS preset
  ],
  plugins: [
    // Ensure loose mode is set to the same value across the relevant plugins
    [
      '@babel/plugin-transform-class-properties', 
      { loose: true }
    ],
    [
      '@babel/plugin-transform-private-methods', 
      { loose: true }
    ],
    [
      '@babel/plugin-transform-private-property-in-object', 
      { loose: true }
    ],
  ],
  env: {
    test: {
      presets: [
        'module:metro-react-native-babel-preset',
        '@babel/preset-env',
      ],
      plugins: [],
    },
  },
};
