import { styled } from "styled-components/native";

export const Container = styled.View`
  border-radius: 16px;
  margin: ${(props) => (props.isShareable ? "40px" : "16px")};
  padding: 32px;
  overflow: hidden;
  height: ${(props) => (props.isShareable ? "300px" : "auto")};
`;

export const QuoteText = styled.Text`
  font-family: "MontserratBold";
  font-size: 20px;
  line-height: 28px;
`;
