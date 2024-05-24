import React from 'react';
import { View, Image } from 'react-native';
import { logo_styles, secure_styles } from '../Styles/styles';

const Header = () => {
  return (
    <>
      <View style={logo_styles.logoContainer}>
        <Image 
          source={require('../../assets/clarifion_logo.png')} 
          style={logo_styles.logo} 
          resizeMode='contain' 
        />
      </View>
      <View style={secure_styles.secureContainer}>
        <Image 
          source={require('../../assets/Frame_Security.png')} 
          style={secure_styles.secure} 
          resizeMode='contain' 
        />
      </View>
    </>
  );
};

export default Header;
