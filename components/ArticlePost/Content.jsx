import React from "react";
import { View } from "react-native";
import { Author, Divider, Image, Title } from "./style";
import Markdown from "react-native-markdown-display";

export const Content = ({ data }) => {
  return (
    <View>
      <Image
        source={{
          uri: `https://c0bb-84-217-33-102.ngrok-free.app${data.cover.url}`,
        }}
      />
      <Title>{data.title}</Title>
      <Author>Por {data.author.name}</Author>
      <Divider />
      <Markdown style={customStyle}>{data.body}</Markdown>
      <Divider end />
    </View>
  );
};

const customStyle = {
  heading1: {
    fontSize: 28,
    fontFamily: "FrauncesBold",
  },
  heading2: {
    fontSize: 26,
    marginTop: 48,
    fontFamily: "FrauncesBold",
  },
  heading3: {
    fontSize: 24,
    fontFamily: "FrauncesBold",
  },
  heading4: {
    fontSize: 22,
    fontFamily: "FrauncesBold",
  },
  heading5: {
    fontSize: 20,
    fontFamily: "FrauncesBold",
  },
  heading6: {
    fontSize: 18,
    fontFamily: "FrauncesBold",
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: "Montserrat",
  },
  bullet_list: {
    lineHeight: 24,
    fontSize: 16,
    fontFamily: "Montserrat",
  },
  ordered_list: {
    lineHeight: 24,
    fontSize: 16,
    fontFamily: "Montserrat",
  },
  strong: {
    fontFamily: "MontserratBold",
  },
  table: {
    fontFamily: "Montserrat",
  },
  fence: {
    fontFamily: "Montserrat",
  },
  code_block: {
    fontFamily: "Montserrat",
  },
  code_inline: {
    fontFamily: "Montserrat",
  },
};
