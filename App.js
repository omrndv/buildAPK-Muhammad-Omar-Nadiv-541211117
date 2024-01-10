import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Register from './components/Register';
import Login from './components/Login';
import Portofolio from './components/Portofolio';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Portofolio" component={Portofolio} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}