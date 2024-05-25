import React from 'react';
import { View } from 'react-native';
import { header_styles } from '../Styles/styles';
import { ClarifionLogo, Frame_Security } from '../Assets/svgr';

const Header = () => {
  return (
    <>
      <ClarifionLogo style={header_styles.logoContainer} />
      <Frame_Security style={header_styles.secureContainer} />
    </>
  );
};

export default Header;
