import React from 'react';
import { View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Header from './App/Component/header';
import NewsSection from './App/Component/newsSection';
import { useCustomFonts } from './App/Styles/useCustomFonts';
import { index_styles, body_styles } from './App/Styles/styles';

export default function App() {
  const fontsLoaded = useCustomFonts();

  return (
    <View style={index_styles.container}>
      <NewsSection />
      <Header />
      <View style={body_styles.bodyContainer}>
        <Text style={body_styles.Title}>Wait! Your order is in progress.</Text>
        <Text style={body_styles.subTitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
