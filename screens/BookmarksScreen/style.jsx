import { Dimensions } from "react-native";
import { styled } from "styled-components/native";

const width = Dimensions.get("window").width;

export const Container = styled.View`
  display: flex;
  flex: 1;
  background-color: #fcf5f3;
`;

export const LoadingContainer = styled.View`
  display: flex;
  background-color: #fcf5f3;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const ContainerList = styled.FlatList`
  display: flex;
  padding: 0 16px;
  padding-top: 120px;
`;

export const EmptyState = styled.View`
  display: flex;
  margin-top: 100px;
  padding: 0 20px;
  padding-top: 200px;
  flex: 2;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.Image`
  width: 200px;
  height: 200px;
`;

export const Title = styled.Text`
  font-family: "FrauncesBold";
  font-size: 26px;
  margin-bottom: 10px;
  color: #3a433f;
`;

export const Subtitle = styled.Text`
  font-family: "Montserrat";
  font-size: 16px;
  color: #3a433f;
  margin-bottom: 16px;
`;
