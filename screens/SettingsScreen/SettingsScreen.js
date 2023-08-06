import React, { useEffect, useState } from "react";
import {
  Container,
  LogOut,
  ListContainer,
  Title,
  TitleContainer,
} from "./style";
import { GeneralHeader } from "../../components/GeneralHeader";
import Icon from "react-native-vector-icons/Feather";
import { ActivityIndicator, Text, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { setItemToLocal, getItemFromLocal, AppleAuth } from "../../utils";
import { useNavigation } from "@react-navigation/native";

const SettingsScreen = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    const getUser = async () => {
      try {
        const user = await getItemFromLocal("user");
        setUser(user);
        setLoading(false);
      } catch (err) {
        console.error(err);
      }
    };

    getUser();
  }, []);

  const logOut = async () => {
    try {
      await setItemToLocal("firstTime", "true");
      await AsyncStorage.removeItem("user");
      navigation.reset({
        index: 0,
        routes: [{ name: "Onboarding" }],
      });
    } catch (exception) {
      return false;
    }
  };

  if (loading) {
    return <ActivityIndicator />;
  }

  return (
    <Container>
      <GeneralHeader isMain title="Configuración" />
      <ListContainer>
        {user.username ? (
          <>
            <View>
              <View
                style={{
                  justifyContent: "space-between",
                  backgroundColor: "white",
                  borderRadius: 12,
                  padding: 24,
                  marginBottom: 16,
                  flexDirection: "row",
                }}
              >
                <Text
                  style={{
                    fontFamily: "Montserrat",
                    fontSize: 16,
                    color: "#3a433f",
                  }}
                >
                  Nombre en la app
                </Text>
                <Text
                  style={{
                    fontFamily: "MontserratBold",
                    fontSize: 16,
                    color: "#3a433f",
                  }}
                >
                  {user.username}
                </Text>
              </View>
              <View
                style={{
                  justifyContent: "space-between",
                  backgroundColor: "white",
                  borderRadius: 12,
                  padding: 24,
                  flexDirection: "row",
                }}
              >
                <Text
                  style={{
                    fontFamily: "Montserrat",
                    fontSize: 16,
                    color: "#3a433f",
                  }}
                >
                  Versión
                </Text>
                <Text
                  style={{
                    fontFamily: "MontserratBold",
                    fontSize: 16,
                    color: "#3a433f",
                  }}
                >
                  1.0.0
                </Text>
              </View>
            </View>
            <LogOut onPress={() => logOut()} activeOpacity={0.8}>
              <Text
                style={{
                  fontFamily: "Montserrat",
                  fontSize: 16,
                  marginRight: 8,
                  color: "red",
                }}
              >
                Cerrar Sesión
              </Text>
              <Icon name="log-out" size={16} color="red" />
            </LogOut>
          </>
        ) : (
          <View>
            <TitleContainer>
              <Title isCentered={true}>Para una experiencia más completa</Title>
              <AppleAuth navigation={navigation} />
            </TitleContainer>
            <View
              style={{
                justifyContent: "space-between",
                backgroundColor: "white",
                borderRadius: 12,
                padding: 24,
                marginTop: 12,
                flexDirection: "row",
              }}
            >
              <Text
                style={{
                  fontFamily: "Montserrat",
                  fontSize: 16,
                  color: "#3a433f",
                }}
              >
                Versión
              </Text>
              <Text
                style={{
                  fontFamily: "MontserratBold",
                  fontSize: 16,
                  color: "#3a433f",
                }}
              >
                1.0.0
              </Text>
            </View>
          </View>
        )}
      </ListContainer>
    </Container>
  );
};

export default SettingsScreen;
