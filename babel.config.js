module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        "loose": false // Set this to 'true' if you want to enable loose mode for all plugins
      }
    ]
  ],
  plugins: [
    ["@babel/plugin-transform-private-methods", { "loose": true }],
    ["@babel/plugin-transform-private-property-in-object", { "loose": true }]
  ]
};
