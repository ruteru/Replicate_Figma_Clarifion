import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Platform } from 'react-native';
import { styles, index_styles, logo_styles } from './App/Styles/styles';

export default function App() {
  return (
    <View style={index_styles.container}>
      <View style={styles.newsContainer}>
        <Text style={styles.newsText}>30-day satisfaction guarantee</Text>
      </View>
      <View style={logo_styles.logoContainer}>
        <Image source={require('./assets/clarifion_logo.png')} style={logo_styles.logo} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}


