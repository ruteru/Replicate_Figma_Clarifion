import { useFonts } from 'expo-font';

export const useCustomFonts = () => {
  const [fontsLoaded] = useFonts({
    'Bond': require('../../assets/fonts/bond-bolditalic/Bond-BoldItalic.otf'),
  });

  return fontsLoaded;
};
