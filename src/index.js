import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import EditTaskScreen from "./screens/EditTaskScreen";
import Home from "./screens/HomeScreen";
import AddTask from "./screens/AddTaskScreen";



const Stack = createMaterialBottomTabNavigator();

export default function RootNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator >
                <Stack.Screen 
                name="Home" 
                component={Home} />
                <Stack.Screen 
                name="Add" 
                component={AddTask} />
                <Stack.Screen 
                name="Edit" 
                component={EditTaskScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}