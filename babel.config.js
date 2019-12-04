//For a detailed explanation see: https://github.com/facebook/react-native/issues/20588
//Remove jest preset: '@babel/preset-env' see: https://github.com/expo/expo-cli/issues/276

module.exports = function(api) {
  api.cache(true);
  return {
    plugins: [
      '@babel/transform-flow-strip-types',
      ["@babel/plugin-proposal-decorators", { "legacy": true }],
      ["@babel/plugin-proposal-class-properties", { "loose": true }]
    ],
    presets: ['babel-preset-expo', '@babel/preset-react',
                ['@babel/preset-env', { //occhio al preset-env vedi commenti in alto :)
                  targets: {
                    node: 8
                  }
                }]
             ],
    env: {
      "production": {
        "plugins": ["transform-remove-console"]
      }
    }    
  };
};