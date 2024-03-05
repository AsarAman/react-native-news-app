import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

import HomeScreen from "./screens/HomeScreen";
import ArticleDetail from "./screens/ArticleDetail";
import { ScrollView } from "react-native";

export default function App() {
  return (
   
      <NavigationContainer>
      
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Article Detail" component={ArticleDetail} />
        </Stack.Navigator>

        <StatusBar style="auto" />
        
      </NavigationContainer>
   
  );
}
