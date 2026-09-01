import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "../context/ThemeContext";
import HomeScreen from '../screens/HomeScreen';
import ExploreScreen from '../screens/ExploreScreen';
import  SettingScreen from '../screens/SettingsScreen';

const Tab = createBottomTabNavigator();

export default function TabsNavigator() {
  const { colors, isDark } = useTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor:   colors.primary,
        tabBarInactiveTintColor: colors.textSecondary,
        tabBarStyle:  { backgroundColor: colors.surface },
        headerStyle:  { backgroundColor: colors.surface },
        headerTintColor: colors.text,
      }}
      >
        <Tab.Screen name='Inicio' component={HomeScreen}
        options={{ tabBarIcon: ({ color, size }) =>
          <Ionicons name='home' size={size} color={color} /> }} />
      <Tab.Screen name='Explorar' component={ExploreScreen}
        options={{ tabBarIcon: ({ color, size }) =>
          <Ionicons name='grid' size={size} color={color} /> }} />
      <Tab.Screen name='Configuracion' component={SettingScreen}
        options={{ tabBarIcon: ({ color, size }) =>
          <Ionicons name='settings' size={size} color={color} /> }} />
      </Tab.Navigator>
  );
}