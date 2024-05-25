import React from 'react';
import { View, Text, Image, Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Header from './App/Component/Header';
import NewsSection from './App/Component/newsSection';
import ProgressSteps from './App/Component/ProgressSteps';
import { useCustomFonts } from './App/Styles/useCustomFonts';
import { index_styles, body_styles, specialOffer_styles } from './App/Styles/styles';

export default function App() {
  const fontsLoaded = useCustomFonts();
  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={index_styles.container}>
      <NewsSection />
      <Header />
      <View style={body_styles.bodyContainer}>
        <Text style={body_styles.Title}>Wait! Your order is in progress.</Text>
        <Text style={body_styles.subTitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
        <ProgressSteps />
        <View style={body_styles.specialOfferContainer}>
          <Text style={body_styles.specialOfferTitle}>ONE TIME ONLY special price for 6 extra Clarifion for only $14 each ($84.00 total!)</Text>
          <Image source={require('./assets/img/ProductImage.png')} style={specialOffer_styles.specialOfferImage} resizeMode='contain' />
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
