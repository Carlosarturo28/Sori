import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LearnMoreScreen from "../screens/LearnMoreScreen/LearnMoreScreen";
import WhatIfScreen from "../screens/WhatIfScreen/WhatIfScreen";
import ActivitiesScreen from "../screens/ActivitiesScreen/ActivitiesScreen";
import DetailsScreen from "../screens/DetailsScreen/DetailsScreen";
import HomeScreen from "../screens/HomeScreen";

const Stack = createNativeStackNavigator();

const InnerNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Start"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Learn More"
        component={LearnMoreScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Qué hacer sí"
        component={WhatIfScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Actividades"
        component={ActivitiesScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default InnerNavigation;
