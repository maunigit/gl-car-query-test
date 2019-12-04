//For a detailed explanation see: https://jestjs.io/docs/en/configuration.html
//see https://github.com/mobxjs/mobx-react#testing-store-injection

module.exports = {
  preset: "jest-expo",
  modulePathIgnorePatterns: [".yarn",".npm"],
  transformIgnorePatterns: [
    "node_modules/(?!(jest-)?react-native|react-clone-referenced-element|@react-native-community|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|@unimodules/.*|sentry-expo|native-base|victory|react-native-svg|react-native)"
  ],
  snapshotSerializers: ["enzyme-to-json/serializer"],
  testMatch: ["**/__tests__/**/*test.js"],
  transform: {
    "^.+\\.jsx?$": "babel-jest"
  }
};
