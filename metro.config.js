// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');

/** @type {import('expo/metro-config').MetroConfig} */
const defaultConfig = getDefaultConfig(__dirname);

const config = {
  resolver: {
    sourceExts: ['js', 'jsx', 'json', 'ts', 'tsx', 'cjs', 'svg', 'svgx'],
    assetExts: ['glb', 'gltf', 'mtl', 'obj', 'png', 'jpg', 'ttf', 'otf'],
  },
};

module.exports = {
  ...defaultConfig,
  ...config,
  resolver: {
    ...defaultConfig.resolver,
    ...config.resolver,
  },
};
