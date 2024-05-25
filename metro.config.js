const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

const config = {
  resolver: {
    sourceExts: ['js', 'jsx', 'json', 'ts', 'tsx', 'cjs', 'svg', 'svgx'],
    assetExts: ['glb', 'gltf', 'mtl', 'obj', 'png', 'jpg', 'ttf', 'otf'].filter(ext => ext !== 'svg'),
  },
  transformer: {
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
  },
};

config.resolver.assetExts.push("hcscript");

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
