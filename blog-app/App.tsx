import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import IndexScreen from './src/screens/index.screen';
import { Provider } from './src/context/blogpost.context';
import DetailScreen from './src/screens/detail.screen';
import CreateScreen from './src/screens/create.screen';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import EditScreen from './src/screens/edit.screen';

export const Stack = createStackNavigator();
const queryClient = new QueryClient();

export type RootStackParamList = {
  Index: undefined;
  Detail: { blogPostId: string | undefined };
  Create: undefined;
  Edit: { blogPostId: string | undefined };
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName={'Index'}>
            <Stack.Screen
              name={'Index'}
              component={IndexScreen}
              options={{
                title: 'Blog articles',
              }}
            />
            <Stack.Screen name={'Detail'} component={DetailScreen} options={{ title: 'Blog article detail' }} />
            <Stack.Screen name={'Create'} component={CreateScreen} options={{ title: 'Create new post' }} />
            <Stack.Screen name={'Edit'} component={EditScreen} options={{ title: 'Edit post' }} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </QueryClientProvider>
  );
};

export default App;
