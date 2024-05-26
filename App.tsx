import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Header from './App/Component/Header';
import NewsSection from './App/Component/newsSection';
import ProgressSteps from './App/Component/ProgressSteps';
import { useCustomFonts } from './App/Styles/useCustomFonts';
import { index_styles, body_styles, specialOffer_styles, mini_product_styles, columns_styles } from './App/Styles/styles';
import { ProductImage, ProductMinimalist, Dotblue, Star2 } from './App/Assets/svgr';

export default function App() {
  const fontsLoaded = useCustomFonts();
  if (!fontsLoaded) {
    return null;
  }
  const blueStrings = ["ONE TIME ONLY", "$14 Each"];
  const blackStrings = ["Special Price For 6 Extra Clarifion", "$84.00 total!"];
  let count = 0;
  let stars = [];
  while (count < 5) {
    stars.push(<Star2 key={count} />);
    count++;
  }

  return (
    <ScrollView>
      <View style={index_styles.container}>
        <NewsSection />
        <Header />

        <View style={body_styles.bodyContainer}>
          <Text style={body_styles.Title}>Wait! Your order is in progress.</Text>
          <Text style={body_styles.subTitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
          <ProgressSteps />

          <View style={specialOffer_styles.specialOfferContainer}>
            <View style={columns_styles.container}>
              <View style={columns_styles.column1}>
                <ProductImage />
              </View>
              <View style={columns_styles.column2}>
                <View style={specialOffer_styles.singleString}>
                  <Text style={specialOffer_styles.singleString}>
                    <Text style={specialOffer_styles.textBlue}>{blueStrings[0]}</Text>
                    <Text style={specialOffer_styles.textBlack}> {blackStrings[0]} For Only </Text>
                    <Text style={specialOffer_styles.textBlue}>{blueStrings[1]}</Text>
                    <Text style={specialOffer_styles.textBlack}> ({blackStrings[1]})</Text>
                  </Text>
                </View>
                <View style={mini_product_styles.miniProductContainer}>
                  <View style={mini_product_styles.column1}>
                    <ProductMinimalist />
                  </View>

                  <View style={mini_product_styles.column2}>
                    <View style={mini_product_styles.row1}>
                      <Text style={mini_product_styles.titlePrize}>
                        <Text>Clarifion Air Ionizer</Text>
                        <Text style={mini_product_styles.price}>
                          <Text style={mini_product_styles.priceDiscounted}>$180</Text>
                          <Text style={mini_product_styles.priceActual}>$84</Text>
                        </Text>
                      </Text>
                    </View>
                    <View style={mini_product_styles.stars}>
                      {stars}
                    </View>
                    <View style={mini_product_styles.row2}>
                      <Dotblue />
                      <Text>12 left in Stock</Text>
                    </View>
                    <Text style={mini_product_styles.description}>Simply plug a Clarifion into any standard outlet and replace bulky, expensive air purifiers with a simple.</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}
