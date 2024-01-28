module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      "module-resolver",
      {
        alias: {
          src: './src',
          // components: './src/components',
          config: './src/config',
          // actions: "./src/actions",
          assets: "./src/assets",
          // reducers: "./src/reducers",
          screens: "./src/screens",
          // store: "./src/store",
          utils: "./src/utils",
          // selectors: "./src/selectors",
          data: "./src/data",
          // services: "./src/services"
        }
      }
    ]
  ]
};
