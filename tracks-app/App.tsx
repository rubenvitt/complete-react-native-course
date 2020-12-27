import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignUpScreen from './src/screens/sign-up.screen';
import SignInScreen from './src/screens/sign-in.screen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AccountScreen from './src/screens/account.screen';
import TrackCreateScreen from './src/screens/track-create.screen';
import TrackListScreen from './src/screens/track-list.screen';
import TrackDetailScreen from './src/screens/track-detail.screen';
import { useAuthenticationStore } from './src/hooks/login.hook';
import { QueryClient, QueryClientProvider } from 'react-query';

const LoginStack = createStackNavigator();
const MainStack = createBottomTabNavigator();
const TrackStack = createStackNavigator();

export type LoginStackParamList = {
  Signin: undefined;
  Signup: undefined;
};

export type MainStackParamList = {
  Tracks: undefined;
  Account: undefined;
  TrackCreate: undefined;
};

export type TrackStackParamList = {
  TrackList: undefined;
  TrackDetail: undefined;
};

const queryClient = new QueryClient();

const App = () => {
  const { token } = useAuthenticationStore();

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        {!token ? (
          <LoginStack.Navigator initialRouteName={'Signup'}>
            <LoginStack.Screen
              name={'Signin'}
              component={SignInScreen}
              options={{
                title: 'Sign in',
                header: () => {
                  return null;
                },
              }}
            />
            <LoginStack.Screen
              name={'Signup'}
              component={SignUpScreen}
              options={{
                title: 'Sign up',
                header: () => {
                  return null;
                },
              }}
            />
          </LoginStack.Navigator>
        ) : (
          <MainStack.Navigator initialRouteName={'Tracks'}>
            <MainStack.Screen name={'Tracks'} options={{ tabBarLabel: 'Track List' }}>
              {() => (
                <TrackStack.Navigator initialRouteName={'TrackList'}>
                  <TrackStack.Screen
                    name={'TrackList'}
                    component={TrackListScreen}
                    options={{ title: 'List Tracks' }}
                  />
                  <TrackStack.Screen
                    name={'TrackDetail'}
                    component={TrackDetailScreen}
                    options={{ title: 'Track Detail' }}
                  />
                </TrackStack.Navigator>
              )}
            </MainStack.Screen>
            <MainStack.Screen name={'TrackCreate'} component={TrackCreateScreen} options={{ title: 'Create Track' }} />
            <MainStack.Screen name={'Account'} component={AccountScreen} options={{ title: 'Account' }} />
          </MainStack.Navigator>
        )}
      </NavigationContainer>
    </QueryClientProvider>
  );
};

export default App;
