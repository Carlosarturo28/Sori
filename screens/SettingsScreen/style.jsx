import { Dimensions } from "react-native";
import { styled } from "styled-components";

const width = Dimensions.get("window").width;

export const Container = styled.View`
  display: flex;
  flex: 1;
  background-color: #fcf5f3;
`;

export const ListContainer = styled.View`
  flex: 1;
  justify-content: space-between;
  padding: 30px;
  padding-top: 130px;
`;

export const LogOut = styled.TouchableOpacity`
  color: red;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const TitleContainer = styled.View`
  padding: 26px;
  background-color: white;
  border-radius: 12px;
  width: 100%;
`;

export const Title = styled.Text`
  font-family: "FrauncesBold";
  text-align: ${(props) => (props.isCentered ? "center" : "left")};
  font-size: 26px;
  color: #3a433f;
`;
