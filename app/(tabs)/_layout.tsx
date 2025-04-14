import { Tabs } from "expo-router";

import Ionicons from "@expo/vector-icons/Ionicons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        headerTitleStyle: {
          display: "none",
        },
        tabBarActiveTintColor: "#5C24D4",
        tabBarInactiveTintColor: "#ca8eff",
        headerStyle: {
          backgroundColor: "#fff",
        },
        headerShadowVisible: false,
        headerTintColor: "#000",
        tabBarStyle: {
          backgroundColor: "#fff",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "home-sharp" : "home-outline"}
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="vault"
        options={{
          title: "Vault",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "key" : "key-outline"}
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: "About",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={
                focused ? "information-circle" : "information-circle-outline"
              }
              color={color}
              size={24}
            />
          ),
        }}
      />
    </Tabs>
  );
}
