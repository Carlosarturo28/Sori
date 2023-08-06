import { Dimensions } from "react-native";
import { styled } from "styled-components";

const width = Dimensions.get("window").width;

export const Image = styled.Image`
  width: ${width}px;
  margin-top: -80px;
  object-fit: contain;
`;

export const TitleContainer = styled.View`
  position: absolute;
  padding: 26px;
  background-color: white;
  border-radius: 12px;
  bottom: ${width < 376 ? "80px" : "120px"};
  width: 90%;
`;

export const Title = styled.Text`
  font-family: "FrauncesBold";
  text-align: ${(props) => (props.isCentered ? "center" : "left")};
  font-size: 26px;
  color: #3a433f;
`;

export const Subtitle = styled.Text`
  padding-top: 8px;
  font-family: "MontserratMedium";
  font-size: 16px;
  line-height: 26px;
  color: #3a433f;
`;
