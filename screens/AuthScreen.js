import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { getItemFromLocal } from "../utils";
import { View, Image, Dimensions } from "react-native";
import { logo } from "../assets";

const AuthScreen = () => {
  const navigation = useNavigation();

  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;

  useEffect(() => {
    const checkTokenAndRedirect = async () => {
      try {
        const firstTime = await getItemFromLocal("firstTime");
        if (firstTime === "false") {
          navigation.reset({
            index: 0,
            routes: [{ name: "TabNavigator" }],
          });
        } else {
          navigation.reset({
            index: 0,
            routes: [{ name: "Onboarding" }],
          });
        }
      } catch (error) {
        console.error("Error reading userToken from AsyncStorage:", error);
        // Handle error or navigate to a default screen if necessary
      }
    };

    checkTokenAndRedirect();
  }, []);

  return (
    <View style={{ width: "100%", height: "100%", backgroundColor: "#fcf5f3" }}>
      <Image source={logo} style={{ width: "100%", height: "100%" }} />
    </View>
  );
};

export default AuthScreen;
