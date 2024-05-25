import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';

export const useCustomFonts = () => {
  const [fontsLoaded, fontError] = useFonts({
    'Manrope-Medium': require('../Assets/fonts/Manrope/static/Manrope-Medium.ttf'),
    'Manrope-Regular': require('../Assets/fonts/Manrope/static/Manrope-Regular.ttf'),
    'Manrope-Bold': require('../Assets/fonts/Manrope/static/Manrope-Bold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return fontsLoaded;
};
