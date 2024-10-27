import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Loading from './src/Screens/Loading';
import Home from './src/Screens/Home';
import Result from './src/Screens/Result';

const stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName="Loading">
        <stack.Screen
          name="Loading"
          component={Loading}
          options={{
            headerShown: false,
          }}
        />
        <stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <stack.Screen name="Result" component={Result} />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
