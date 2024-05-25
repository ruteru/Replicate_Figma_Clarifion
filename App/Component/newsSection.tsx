import React, { useEffect, useRef } from 'react';
import { View, Text, Image, Platform, Animated, Easing, Dimensions } from 'react-native';
import { news_styles } from '../Styles/styles';
import { useCustomFonts } from '../Styles/useCustomFonts';
import { Verified, Truck, Heart, Fluent } from '../Assets/svgr';

const NewsSection = () => {
  const fontsLoaded = useCustomFonts();
  const translateX = useRef(new Animated.Value(0)).current;
  const screenWidth = Dimensions.get('window').width;

  useEffect(() => {
    if (fontsLoaded && Platform.OS !== 'web') {
      const animate = () => {
        translateX.setValue(0); // Start from the initial position
        Animated.loop(
          Animated.timing(translateX, {
            toValue: -screenWidth * 2, // Move past both sets of news items
            duration: 20000, // Adjust duration as needed
            easing: Easing.linear, // Linear easing for smooth scrolling
            useNativeDriver: true, // Use native driver for better performance
          })
        ).start();
      };

      animate();
    }
  }, [translateX, screenWidth, fontsLoaded]);

  return (
    <View style={news_styles.newsContainer}>
      <Animated.View style={[news_styles.newsBlock, { transform: [{ translateX }] }]}>
        <Verified />
        <Text style={news_styles.newsText}>30-DAY SATISFACTION GUARANTEE</Text>
      </Animated.View>

      <Animated.View style={[news_styles.newsBlock, { transform: [{ translateX }] }]}>
        <Truck />
        <Text style={news_styles.newsText}>FREE DELIVERY ON ORDERS OVER $40.00</Text>
      </Animated.View>

      <Animated.View style={[news_styles.newsBlock, { transform: [{ translateX }] }]}>
        <Heart />
        <Text style={news_styles.newsText}>50.000+ HAPPY CUSTOMERS</Text>
      </Animated.View>

      <Animated.View style={[news_styles.newsBlock, { transform: [{ translateX }] }]}>
        <Fluent />
        <Text style={news_styles.newsText}>100% MONEY BACK GUARANTEE</Text>
      </Animated.View>
    </View>
  );
};

export default NewsSection;
