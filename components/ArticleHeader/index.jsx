import React, { useEffect, useState } from "react";
import { ButtonsContainer, Container, ActionsContainer } from "./style";
import { useNavigation } from "@react-navigation/native";
import IconFA from "react-native-vector-icons/FontAwesome";
import Icon from "react-native-vector-icons/Feather";
import { TouchableOpacity } from "react-native";
import { addToBookmark, checkIfArticleIsBookmarked } from "../../utils";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StatusBar } from "expo-status-bar";

export const ArticleHeader = ({ id }) => {
  clearAsyncStorage = async () => {
    AsyncStorage.clear();
  };

  const [isBookmarked, setIsBookmarked] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    const checkBookmark = async () => {
      try {
        const isBooked = await checkIfArticleIsBookmarked(id);
        setIsBookmarked(isBooked);
      } catch (e) {
        console.log(e);
      }
    };

    checkBookmark();
  }, [isBookmarked]);

  const goBack = () => {
    navigation.goBack();
  };

  const handleBookmark = () => {
    setIsBookmarked(addToBookmark(id));
  };

  return (
    <Container>
      <ButtonsContainer>
        <TouchableOpacity activeOpacity={0.8} onPress={goBack}>
          <Icon name="chevron-left" size={24} color="white" />
        </TouchableOpacity>
        <ActionsContainer>
          <TouchableOpacity
            onPress={() => handleBookmark()}
            activeOpacity={0.8}
          >
            <IconFA
              name={isBookmarked ? "bookmark" : "bookmark-o"}
              size={24}
              color="white"
            />
          </TouchableOpacity>
          {/*           <TouchableOpacity activeOpacity={0.8} style={{ marginLeft: 24 }}>
            <Icon name="share" size={24} color="white" />
          </TouchableOpacity> */}
        </ActionsContainer>
      </ButtonsContainer>
      <StatusBar style="light" />
    </Container>
  );
};
