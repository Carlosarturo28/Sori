import { styled } from "styled-components/native";

export const CardContainer = styled.TouchableOpacity`
  background-color: white;
  border-radius: 12px;
  display: flex;
  flex-direction: row;
  padding: 6px;
  margin-bottom: 14px;
`;

export const RightSection = styled.View`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-left: 10px;
  padding-right: 12px;
  justify-content: space-between;
`;

export const Image = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 8px;
`;

export const Title = styled.Text`
  font-family: "FrauncesBold";
  font-size: 18px;
`;

export const Author = styled.Text`
  font-family: "Montserrat";
  color: #a8a8a8;
`;
