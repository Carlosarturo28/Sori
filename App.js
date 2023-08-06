import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import Navigation from "./Navigation/Navigation";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Linking } from "react-native";

export default function App() {
  const [fontsLoaded] = useFonts({
    Fraunces: require("./assets/fonts/Fraunces-Regular.ttf"),
    FrauncesBold: require("./assets/fonts/Fraunces-Bold.ttf"),
    Montserrat: require("./assets/fonts/Montserrat-Regular.ttf"),
    MontserratMedium: require("./assets/fonts/Montserrat-Medium.ttf"),
    MontserratBold: require("./assets/fonts/Montserrat-Bold.ttf"),
  });

  useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Navigation />
    </GestureHandlerRootView>
  );
}
