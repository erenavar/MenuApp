import { StyleSheet, Text, View } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FoodOverviewScreen from "./screens/FoodOverviewScreen";
import FoodDetailScreen from "./screens/FoodDetailScreen";
import FavoritesScreen from "./screens/FavoritesScreen";
import { Entypo } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function Root() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "rebeccapurple" },
        headerTintColor: "white",
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "All Categories",
          drawerIcon: () => <Entypo name="list" size={20} color="black" />,
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          drawerIcon: () => <Entypo name="star" size={20} color="black" />,
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "rebeccapurple" },
          headerTintColor: "white",
          contentStyle: { backgroundColor: "lightblue" },
        }}
      >
        {/* <Stack.Screen
          name="Categories"
          component={CategoriesScreen}
          options={{
            title: "All Categories",
          }}
        /> */}
        <Stack.Screen
          name="Deneme"
          component={Root}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen name="FoodOverview" component={FoodOverviewScreen} />
        <Stack.Screen
          name="FoodDetail"
          component={FoodDetailScreen}
          options={{ title: "Details" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
