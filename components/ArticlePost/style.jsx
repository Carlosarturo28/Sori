import { styled } from "styled-components";

export const Container = styled.ScrollView`
  padding-top: 100px;
`;

export const ScrollContainer = styled.ScrollView`
  background-color: #fff;
  margin-top: 30px;
  border-radius: ${(props) => props.borderRadius}px;
  padding: 20px;
  padding-bottom: 200px;
`;

export const Image = styled.Image`
  width: 100%;
  height: 195px;
  border-radius: 12px;
`;

export const Title = styled.Text`
  font-family: "FrauncesBold";
  font-size: 26px;
  color: #3a433f;
  margin-top: 20px;
`;

export const Author = styled.Text`
  font-family: "Montserrat";
  font-size: 16px;
  color: #a8a8a8;
  margin-top: 10px;
`;

export const Divider = styled.View`
  width: 94px;
  height: 4px;
  background.color: #d9d9d9;
  margin: ${(props) => (props.end ? "44px 0" : "24px 0")};
  border-radius: 50px;
`;

export const Text = styled.Text`
  font-size: 16px;
  color: #3a433f;
`;
