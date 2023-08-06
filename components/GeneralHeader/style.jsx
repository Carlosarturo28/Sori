import { styled } from "styled-components/native";

export const Container = styled.View`
  position: absolute;
  z-index: 3;
  background-color: rgba(252, 245, 243, 0.98);
  padding-top: 60px;
  padding-bottom: 14px;
  width: 100%;
`;

export const ButtonsContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 0 16px;
  align-items: center;
`;

export const ActionsContainer = styled.View`
  display: flex;
  flex-direction: row;
`;

export const HeaderTitle = styled.Text`
  font-family: "FrauncesBold";
  font-size: ${(props) => (props.isMain ? "34px" : "18px")};
  margin-left: 15px;
  color: #3a433f;
`;
