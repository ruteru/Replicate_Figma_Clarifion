// App/Components/ProgressSteps.tsx
import React from 'react';
import { View, Text, Platform } from 'react-native';
import { body_styles } from '../Styles/styles';
import { Done, Step3, Step4 } from '../Assets/svgr';

const ProgressSteps = () => {
  const steps = [
    { key: 'cartReview', labelWeb: 'Step 1: Cart Review', labelMobile: 'Cart Review', Component: Done },
    { key: 'checkout', labelWeb: 'Step 2: Checkout', labelMobile: 'Checkout', Component: Done },
    { key: 'specialOffer', labelWeb: 'Step 3: Special Offer', labelMobile: 'Special Offer', Component: Step3 },
    { key: 'confirmation', labelWeb: 'Step 4: Confirmation', labelMobile: 'Confirmation', Component: Step4 },
  ];

  return (
    <View style={body_styles.progressBarContainer}>
      {steps.map((step, index) => {
        const SvgComponent = step.Component;
        return (
          <View key={step.key} style={body_styles.progressStep}>
            <SvgComponent  />
            <Text style={index === 2 ? body_styles.progressStepCurrent : body_styles.progressBarTitle}>
              {Platform.OS === 'web' ? step.labelWeb : step.labelMobile}
            </Text>
          </View>
        );
      })}
    </View>
  );
};

export default ProgressSteps;
