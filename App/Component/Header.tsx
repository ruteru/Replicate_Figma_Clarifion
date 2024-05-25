import React from 'react';
import { View, Image } from 'react-native';
import { logo_styles, secure_styles } from '../Styles/styles';
import { ClarifionLogo, Frame_Security } from '../Assets/svgr';

const Header = () => {
  return (
    <>
      <View style={logo_styles.logoContainer}>
        <ClarifionLogo />
      </View>
      <View style={secure_styles.secureContainer}>
        <Frame_Security />
      </View>
    </>
  );
};

export default Header;
