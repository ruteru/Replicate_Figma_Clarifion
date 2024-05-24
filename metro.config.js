const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');


const config = {
  resolver: {
    sourceExts: ['js', 'jsx', 'json', 'ts', 'tsx', 'cjs'],
    assetExts: ['glb', 'gltf', 'mtl', 'obj', 'png', 'jpg', 'ttf', 'otf'],
  },
}

config.resolver.assetExts.push("hcscript");

module.exports = mergeConfig(getDefaultConfig(__dirname), config)
