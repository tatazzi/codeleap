import React, {FC} from 'react';
import {Login, Home} from './pages';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import store from './redux/store';
import {Provider} from 'react-redux';

type RootStackParamList = {
  [SCREENS.HOME]?: never;
  [SCREENS.LOGIN]: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
export const enum SCREENS {
  HOME = 'Home',
  LOGIN = 'Login',
}

const Stack = createNativeStackNavigator<RootStackParamList>();
const App: FC = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name={SCREENS.LOGIN} component={Login} />
          <Stack.Screen name={SCREENS.HOME} component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
