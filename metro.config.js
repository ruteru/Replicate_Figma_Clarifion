const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

const defaultConfig = getDefaultConfig(__dirname);

const config = {
  resolver: {
    sourceExts: [...defaultConfig.resolver.sourceExts, 'js', 'jsx', 'json', 'ts', 'tsx', 'cjs', 'svg', 'svgx'],
    assetExts: [...defaultConfig.resolver.assetExts.filter(ext => ext !== 'svg'), 'glb', 'gltf', 'mtl', 'obj', 'png', 'jpg', 'ttf', 'otf', 'hcscript'],
  },
  transformer: {
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
  },
};

module.exports = mergeConfig(defaultConfig, config);
