import { styled } from "styled-components/native";

export const Container = styled.View`
  position: absolute;
  z-index: 3;
  background-color: rgba(7, 101, 167, 0.98);
  padding-top: 60px;
  padding-bottom: 14px;
  width: 100%;
`;

export const ButtonsContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 16px;
  align-items: center;
`;

export const ActionsContainer = styled.View`
  display: flex;
  flex-direction: row;
`;
