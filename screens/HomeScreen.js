import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import ScrollableMenu from "../components/ScrollableMenu";
import Quote from "../components/Quote";
import { getItemFromLocal, colors, quotes } from "../utils";
import React, { useEffect, useState, useRef } from "react";
import { StatusBar } from "expo-status-bar";
import { captureRef } from "react-native-view-shot";
import * as Sharing from "expo-sharing";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default function HomeScreen() {
  const [user, setUser] = useState(null);

  const selectedColor = Math.floor(Math.random() * colors.length);
  const selectedQuote = Math.floor(Math.random() * quotes.length);

  const viewRef = useRef();

  const captureComponent = async () => {
    try {
      const uri = await captureRef(viewRef, {
        format: "png",
        quality: 1,
      });

      await Sharing.shareAsync(uri, {
        mimeType: "image/png",
        dialogTitle: "Share Component",
        UTI: "public.png",
      });
    } catch (error) {
      console.error("Error capturing or sharing component:", error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    const user = await getItemFromLocal("user");
    user && setUser(user);
  };

  return (
    <View style={styles.container}>
      <View style={styles.bottomBack} />
      <View style={styles.bottomWhite} />
      <View style={styles.greetingsContainer}>
        <Text style={styles.greetings}>
          Hola{user?.username ? ` ${user && user.username}` : null},
        </Text>
        <Text style={styles.question}>¿Qué quieres hacer hoy?</Text>
      </View>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.menuContainer}>
          <ScrollableMenu />
          <Text style={styles.title}>La frase del día</Text>
          <View>
            <Quote
              share={captureComponent}
              selectedColor={selectedColor}
              selectedQuote={selectedQuote}
            />
          </View>
        </View>
      </ScrollView>
      <View style={{ zIndex: -4 }}>
        <Quote
          isShareable={true}
          selectedColor={selectedColor}
          selectedQuote={selectedQuote}
          ref={viewRef}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    position: "absolute",
    width: "100%",
    height: height,
  },
  bottomWhite: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 300,
    backgroundColor: "white",
    zIndex: -1,
  },
  bottomBack: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "#FCF5F3",
    zIndex: -2,
  },
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#FCF5F3",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  greetingsContainer: {
    position: "absolute",
    width: "80%",
    paddingHorizontal: 16,
    paddingTop: 68,
    paddingBottom: 30,
  },
  greetings: {
    fontFamily: "FrauncesBold",
    fontSize: width > 375 ? 34 : 30,
    color: "#A8A8A8",
  },
  question: {
    fontFamily: "FrauncesBold",
    fontSize: width > 375 ? 34 : 30,
    color: "#3A433F",
  },
  menuContainer: {
    width: "100%",
    paddingBottom: 80,
    marginTop: 220,
    backgroundColor: "#fff",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  buttonContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    marginLeft: 16,
    color: "#3A433F",
    fontFamily: "FrauncesBold",
    fontSize: width > 375 ? 28 : 26,
  },
  button: {
    width: 200,
    height: 44,
  },
});
