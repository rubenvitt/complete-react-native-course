import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SearchScreen from './src/screens/Search.screen';
import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtoolsPanel } from 'react-query/devtools';
import DetailScreen from './src/screens/Detail.screen';

const Stack = createStackNavigator();
const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={'Search'}>
          <Stack.Screen name={'Search'} component={SearchScreen} options={{ title: 'Business search' }} />
          <Stack.Screen name={'Detail'} component={DetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
};

export default App;
