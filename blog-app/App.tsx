import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import IndexScreen from './src/screens/index.screen';
import { Provider } from './src/context/blogpost.context';

const Stack = createStackNavigator();
const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName={'Index'}>
            <Stack.Screen name={'Index'} component={IndexScreen} options={{ title: 'Blog articles' }} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </QueryClientProvider>
  );
};

export default App;
