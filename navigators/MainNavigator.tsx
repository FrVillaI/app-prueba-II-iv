import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from "@react-navigation/native";
import RegistroScreen from "../screens/RegistroScreen";
import LoginScreen from "../screens/LoginScreen";
import InicioScreen from "../screens/InicioScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import PerfilScreen from "../screens/PerfilScreen";

const Stack=createStackNavigator();
const Tabs=createMaterialTopTabNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Inicio" component={InicioScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Registro" component={RegistroScreen} />
      <Stack.Screen name="Tabs" component={MyTab} />
    </Stack.Navigator>
  );
}

function MyTab() {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="Welcome" component={WelcomeScreen} />
      <Tabs.Screen name="Perfil" component={PerfilScreen} />
    </Tabs.Navigator>
  );
}


export default function MainNavigator() {
  return (
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  )
}

