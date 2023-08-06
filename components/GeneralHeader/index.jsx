import React from "react";
import { ButtonsContainer, Container, HeaderTitle } from "./style";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Feather";
import { TouchableOpacity } from "react-native";

export const GeneralHeader = ({ isMain, title }) => {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <>
      <Container>
        <ButtonsContainer>
          {isMain ? null : (
            <TouchableOpacity activeOpacity={0.8} onPress={goBack}>
              <Icon name="chevron-left" size={24} color="#3A433F" />
            </TouchableOpacity>
          )}
          <HeaderTitle isMain={isMain}>{title && title}</HeaderTitle>
        </ButtonsContainer>
      </Container>
    </>
  );
};
