import React from 'react';
import { View } from 'react-native';
import { header_styles } from '../Styles/styles';
import { ClarifionLogo, Frame_Security } from '../Assets/svgr';

const Header = () => {
  return (
    <>
      <View style={header_styles.logoContainer}>
        <ClarifionLogo />
      </View>
      <View style={header_styles.secureContainer}>
        <Frame_Security />
      </View>
    </>
  );
};

export default Header;
