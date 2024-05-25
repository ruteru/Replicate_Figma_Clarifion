import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Header from './App/Component/Header';
import NewsSection from './App/Component/newsSection';
import ProgressSteps from './App/Component/ProgressSteps';
import { useCustomFonts } from './App/Styles/useCustomFonts';
import { index_styles, body_styles, specialOffer_styles } from './App/Styles/styles';
import { ProductImage } from './App/Assets/svgr';

export default function App() {
  const fontsLoaded = useCustomFonts();
  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={index_styles.container}>
      <ScrollView>
        <NewsSection /> 
        <Header /> 
        
        <View style={body_styles.bodyContainer}>
          <Text style={body_styles.Title}>Wait! Your order is in progress.</Text>
          <Text style={body_styles.subTitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
          <ProgressSteps /> 
            <View style={specialOffer_styles.specialOfferContainer}>
              <ProductImage /> 
              <Text style={specialOffer_styles.specialOfferTitle}>
                ONE TIME ONLY special price for 6 extra Clarifion for only $14 each ($84.00 total!)
              </Text>
            </View>
        </View>
        <StatusBar style="auto" />
      </ScrollView>
    </View>
  );
}
