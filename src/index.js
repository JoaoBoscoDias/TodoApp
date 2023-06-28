import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import EditTaskScreen from "./screens/EditTaskScreen";
import Home from "./screens/HomeScreen";
import AddTask from "./screens/AddTaskScreen";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();



export default function RootNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator >
                {/* <Stack.Screen 
                name="Home" 
                component={Home} />
                <Stack.Screen 
                name="Add" 
                component={AddTask} />
                <Stack.Screen 
                name="Edit" 
                component={EditTaskScreen} /> */}
                <Stack.Screen 
                name="TabsNavigator" 
                component={TabsNavigator}
                options={{
                    headerShown: false,
                  }}
                />
                
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const Tabs = createMaterialBottomTabNavigator();

function TabsNavigator() {
    return (
      <Tabs.Navigator
        barStyle={{ backgroundColor: "#343A40" }}
        activeColor="#ADB5BD"
        inactiveColor="#FFFFFF"
      >
        <Tabs.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={24} />
            ),
          }}
        />
        <Tabs.Screen
          name="Edit"
          component={EditTaskScreen}
          options={{
            tabBarLabel: "Edit",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="clipboard-edit-outline" color={color} size={24} />
            ),
          }}
        />
        <Tabs.Screen
          name="Add"
          component={AddTask}
          options={{
            tabBarLabel: "Add",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="tray-plus" color={color} size={24} />
            ),
          }}
        />
      </Tabs.Navigator>
    );
  }