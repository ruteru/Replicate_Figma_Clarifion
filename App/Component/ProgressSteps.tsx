// ProgressSteps.tsx
import React from 'react';
import { View, Text, Image, Platform } from 'react-native';
import { body_styles } from '../Styles/styles';

const ProgressSteps = () => {
  const steps = [
    { key: 'cartReview', labelWeb: 'Step 1: Cart Review', labelMobile: 'Cart Review', img: require('../../assets/img/done.png') },
    { key: 'checkout', labelWeb: 'Step 2: Checkout', labelMobile: 'Checkout', img: require('../../assets/img/done.png') },
    { key: 'specialOffer', labelWeb: 'Step 3: Special Offer', labelMobile: 'Special Offer', img: require('../../assets/img/step3.png') },
    { key: 'confirmation', labelWeb: 'Step 4: Confirmation', labelMobile: 'Confirmation', img: require('../../assets/img/step4.png') },
  ];

  return (
    <View style={body_styles.progressBarContainer}>
      {steps.map((step, index) => (
        <View key={step.key} style={body_styles.progressStep}>
          <Image
            source={step.img}
            style={body_styles.progressBarImg}
            resizeMode='contain'
          />
          <Text style={index === 2 ? body_styles.progressStepCurrent : body_styles.progressBarTitle}>
            {Platform.OS === 'web' ? step.labelWeb : step.labelMobile}
          </Text>
        </View>
      ))}
    </View>
  );
};

export default ProgressSteps;
