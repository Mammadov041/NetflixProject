import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/auth/login/Login';
import Register from '../screens/auth/register/Register';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="SignIn" component={Login} />
      <Stack.Screen name="SignUp" component={Register} />
    </Stack.Navigator>
  );
};

export default AuthStack;
