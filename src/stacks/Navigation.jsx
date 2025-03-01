import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import TabStack from './TabStack';
import {useMMKVBoolean, useMMKVString} from 'react-native-mmkv';
import OnboardingScreen from '../screens/onBoarding/OnBoardingScreen';
import Register from '../screens/auth/register/Register';
import Login from '../screens/auth/login/Login';
import AuthStack from './AuthStack';

function Navigation() {
  const [token, setToken] = useMMKVString('token');
  const [hasSeenOnboarding, setHasSeenOnboarding] =
    useMMKVBoolean('hasSeenOnboarding');

  return (
    <NavigationContainer>
      {hasSeenOnboarding ? (
        token ? (
          <TabStack />
        ) : (
          <AuthStack />
        )
      ) : (
        <OnboardingScreen />
      )}
    </NavigationContainer>
  );
}

export default Navigation;
