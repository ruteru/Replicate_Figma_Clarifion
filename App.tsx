import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Image, Platform, Animated, Easing } from 'react-native';
import { news_styles, index_styles, logo_styles } from './App/Styles/styles';
import { MaterialIcons } from '@expo/vector-icons';
import { useCustomFonts } from './App/Styles/useCustomFonts';

export default function App() {
  const fontsLoaded = useCustomFonts();
  const translateX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const animate = () => {
      translateX.setValue(300); 
      Animated.loop(
        Animated.sequence([
          Animated.timing(translateX, {
            toValue: -300, 
            duration: 5000,
            easing: Easing.linear,
            useNativeDriver: true,
          }),
          Animated.delay(0), 
        ])
      ).start();
    };
    animate();
  }, [translateX]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={index_styles.container}>
      <View style={news_styles.newsContainer}>
        <Animated.View style={[news_styles.newsBlock, { transform: [{ translateX }] }]}>
          <MaterialIcons name="verified" size={24} color="white" />
          <Text style={news_styles.newsText}>30-DAY SATISFACTION GUARANTEE</Text>
        </Animated.View>

        <Animated.View style={[news_styles.newsBlock, { transform: [{ translateX }] }]}>
          <MaterialIcons name="delivery-dining" size={24} color="white" />
          <Text style={news_styles.newsText}>FREE DELIVERY ON ORDERS OVER $40.00</Text>
        </Animated.View>
      </View>
      <View style={logo_styles.logoContainer}>
        <Image source={require('./assets/clarifion_logo.png')} style={logo_styles.logo} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
