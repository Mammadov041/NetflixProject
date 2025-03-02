import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import React from 'react';
import OnboardingScreen from '../screens/onBoarding/OnBoardingScreen';
import Help from '../screens/onBoarding/Help';

const OnBoardingStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      '
      <Stack.Screen name="OnBoarding" component={OnboardingScreen} />
      <Stack.Screen name="Help" component={Help} />
    </Stack.Navigator>
  );
};

export default OnBoardingStack;
