import React from "react";
import { CardContainer, Image, RightSection, Title, Author } from "./style";
import { useNavigation } from "@react-navigation/native";

export const ArticleCard = ({ screenName, item, postType }) => {
  const navigation = useNavigation();

  const goToDetails = (destination, id, postType) => {
    navigation.navigate(!screenName ? destination : screenName, {
      id: id,
      postType: postType,
    });
  };

  return (
    <CardContainer
      onPress={() => goToDetails("Details", item.id, postType)}
      activeOpacity={0.8}
    >
      <Image
        source={{
          uri: `https://c0bb-84-217-33-102.ngrok-free.app${item.attributes.cover.url}`,
        }}
      />
      <RightSection>
        <Title>{item.attributes.title}</Title>
        <Author> Por {item.attributes.author.name}</Author>
      </RightSection>
    </CardContainer>
  );
};
